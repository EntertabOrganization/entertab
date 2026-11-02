"use client";
export default function CookieSettings() {
  return <button type="button" className="text-white/70 text-xs underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4" onClick={() => window.dispatchEvent(new Event("entertab-cookie-settings"))}>Cookie Settings</button>;
}
