"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MIN_VISIBLE_MS = 300;
const MAX_WAIT_MS = 10000;
const FADE_MS = 400;

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

// Lazy images far below the fold never load until scrolled to, so only wait for
// images that are eager or close to the viewport.
function collectCriticalImages(): HTMLImageElement[] {
  return Array.from(document.images).filter((img) => {
    if (img.closest("[data-page-loader]")) return false;
    if (!img.currentSrc && !img.src) return false;
    if (img.loading !== "lazy") return true;
    const rect = img.getBoundingClientRect();
    return rect.top < window.innerHeight * 1.5;
  });
}

function waitForImage(img: HTMLImageElement): Promise<void> {
  return new Promise((resolve) => {
    if (img.complete) {
      resolve();
      return;
    }
    const done = () => {
      img.removeEventListener("load", done);
      img.removeEventListener("error", done);
      resolve();
    };
    img.addEventListener("load", done);
    img.addEventListener("error", done);
  });
}

async function waitForPageImages() {
  // Let React commit the new route so its <img> tags exist in the DOM.
  await nextFrame();
  await nextFrame();

  const settle = async () => {
    const images = collectCriticalImages();
    await Promise.all(images.map(waitForImage));
    return images.length;
  };

  // Second pass catches images rendered after the first batch resolved.
  const first = await settle();
  const second = await settle();
  if (second > first) await settle();
}

export default function PageLoader() {
  const pathname = usePathname();
  const [readyPath, setReadyPath] = useState<string | null>(null);
  const [navigating, setNavigating] = useState(false);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Show the loader the moment an internal link is clicked, before the new route renders.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      setNavigating(true);
      if (safetyTimer.current) clearTimeout(safetyTimer.current);
      safetyTimer.current = setTimeout(() => setNavigating(false), MAX_WAIT_MS);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // The page counts as ready once its images are loaded (or the timeout hits).
  useEffect(() => {
    let cancelled = false;
    const startedAt = performance.now();
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([waitForPageImages(), timeout]).then(() => {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));
      setTimeout(() => {
        if (cancelled) return;
        if (safetyTimer.current) clearTimeout(safetyTimer.current);
        setReadyPath(pathname);
        setNavigating(false);
      }, remaining);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const visible = navigating || readyPath !== pathname;

  useEffect(() => {
    if (!visible) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  return (
    <div
      data-page-loader
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-white ${
        visible ? "opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
      style={{
        transition: visible
          ? "opacity 150ms ease-out"
          : `opacity ${FADE_MS}ms ease-out, visibility 0s linear ${FADE_MS}ms`,
      }}
    >
      <noscript>
        <style>{"[data-page-loader]{display:none!important}"}</style>
      </noscript>
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-mint" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.svg" alt="" className="absolute inset-3 h-14 w-14 animate-pulse" />
      </div>
      <p className="text-sm font-medium tracking-wide text-text-gray">Loading...</p>
    </div>
  );
}
