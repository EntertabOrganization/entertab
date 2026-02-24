"use client";

import { useEffect, useState } from "react";

type GoToTopProps = {
  startFromId?: string;
  hideFromId?: string;
};

export default function GoToTop({
  startFromId = "about",
  hideFromId = "footer",
}: GoToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const startEl = document.getElementById(startFromId);
    const hideEl = hideFromId ? document.getElementById(hideFromId) : null;

    // If we can't find the target section, show the control so it's not lost.
    if (!startEl) {
      setIsVisible(true);
      return;
    }

    const computeStartY = () =>
      startEl.getBoundingClientRect().top + window.scrollY;

    const computeHideY = () =>
      hideEl ? hideEl.getBoundingClientRect().top + window.scrollY : null;

    let startY = computeStartY();
    let hideY = computeHideY();

    const updateVisibility = () => {
      const viewportBottom = window.scrollY + window.innerHeight;
      const isPastStart = viewportBottom >= startY;
      const isPastHide = hideY !== null ? viewportBottom >= hideY : false;
      setIsVisible(isPastStart && !isPastHide);
    };

    const handleResize = () => {
      startY = computeStartY();
      hideY = computeHideY();
      updateVisibility();
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [startFromId, hideFromId]);

  return (
    <a
      href="#home"
      className={`hidden lg:flex fixed bottom-8 right-6 flex-col items-center gap-2 text-primary hover:text-primary-light transition-colors z-[50000] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span
        className="text-xs font-medium tracking-wider"
        style={{ writingMode: "vertical-rl" }}
      >
        go to top
      </span>
    </a>
  );
}
