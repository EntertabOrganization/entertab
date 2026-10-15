"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { applyConsent, readConsent, rememberConsent, trackPage, resetSessionConsent, CONSENT_KEY, type ConsentChoice } from "@/app/lib/analytics";
import styles from "./consent.module.css";
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
export default function ConsentBanner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const refresh = () => { const choice = readConsent(); applyConsent(choice); setOpen(choice === "unset"); if (choice === "accepted") trackPage(location.pathname); };
    const show = () => setOpen(true);
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) { resetSessionConsent(); refresh(); } };
    refresh();
    window.addEventListener("entertab-cookie-settings", show);
    window.addEventListener("storage", storage);
    // Recheck expiry when a visitor returns to the tab.
    const visibility = () => { if (document.visibilityState === "visible") refresh(); };
    document.addEventListener("visibilitychange", visibility);
    return () => { window.removeEventListener("entertab-cookie-settings", show); window.removeEventListener("storage", storage); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => { const choice = readConsent(); applyConsent(choice); if (choice === "accepted") trackPage(pathname || "/"); }, [pathname]);
  function choose(choice: Exclude<ConsentChoice, "unset">) {
    const previouslyLoaded = Boolean(document.getElementById("entertab-gtm"));
    rememberConsent(choice); applyConsent(choice); setOpen(false);
    // Unload the previously accepted Google runtime after withdrawal.
    if (choice === "rejected" && previouslyLoaded) { window.location.reload(); return; }
    if (choice === "accepted") trackPage(pathname || "/");
  }
  if (!open) return null;
  return <section className={`${styles.banner} ${poppins.className}`} aria-labelledby="consent-heading" aria-describedby="consent-description">
    <h2 id="consent-heading">Your privacy matters.</h2>
    <p id="consent-description">We use optional analytics cookies to help improve our website.</p>
    <div className={styles.actions}>
      <button type="button" onClick={() => choose("accepted")}>Accept analytics</button>
      <button type="button" onClick={() => choose("rejected")}>Reject analytics</button>
    </div>
    <a className={styles.privacy} href="/privacy-policy">Privacy Policy</a>
  </section>;
}
