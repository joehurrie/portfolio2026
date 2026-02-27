"use client";

import React from 'react';

export function ClientTicker() {
  const clients = ["LINEAR", "VERCEL", "STRIPE", "RAYCAST", "ARC", "FIGMA"];
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 border-y border-border/50 py-12 overflow-hidden relative z-30 transition-colors duration-700">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-24 px-12 opacity-40 text-2xl md:text-3xl font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-700">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-1-${index}`}>{client}</span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12 opacity-40 text-2xl md:text-3xl font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-700" aria-hidden="true">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-2-${index}`}>{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
