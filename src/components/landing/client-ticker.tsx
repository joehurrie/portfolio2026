
"use client";

import React from 'react';

/**
 * ClientTicker component featuring a consistent grey background in both themes.
 * Provides a neutral visual rest between bold content blocks.
 */
export function ClientTicker() {
  const clients = ["LINEAR", "VERCEL", "STRIPE", "RAYCAST", "ARC", "FIGMA"];
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 border-y border-border/10 py-12 overflow-hidden relative z-30 transition-colors duration-700">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-foreground transition-colors duration-700">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-1-${index}`}>{client}</span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-foreground transition-colors duration-700" aria-hidden="true">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-2-${index}`}>{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
