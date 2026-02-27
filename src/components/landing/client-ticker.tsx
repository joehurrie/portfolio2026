
"use client";

import React from 'react';

/**
 * ClientTicker component.
 * Features a grey background in Light Mode and a bold white background in Dark Mode.
 * This ensures a high-fidelity visual break regardless of the active theme.
 */
export function ClientTicker() {
  const clients = ["LINEAR", "VERCEL", "STRIPE", "RAYCAST", "ARC", "FIGMA"];
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="bg-neutral-200 dark:bg-white border-y border-border/10 py-12 overflow-hidden relative z-30 transition-colors duration-700">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-foreground dark:text-background transition-colors duration-700">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-1-${index}`}>{client}</span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-foreground dark:text-background transition-colors duration-700" aria-hidden="true">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-2-${index}`}>{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
