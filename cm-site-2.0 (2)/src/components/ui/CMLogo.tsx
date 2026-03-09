import React from "react";

export function CMLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <circle cx="20" cy="20" r="18" fill="currentColor" />
      <circle cx="14" cy="18" r="4" fill="var(--color-ink, #0a0a0a)" />
      <circle cx="26" cy="18" r="4" fill="var(--color-ink, #0a0a0a)" />
    </svg>
  );
}
