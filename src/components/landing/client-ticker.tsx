"use client";

import React from 'react';

export function ClientTicker() {
  const clients = ["LINEAR", "VERCEL", "STRIPE", "RAYCAST", "ARC", "FIGMA"];
  const repeatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="bg-foreground border-y border-background/20 py-12 overflow-hidden relative z-30 transition-colors duration-700">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-background transition-colors duration-700">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-1-${index}`}>{client}</span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-background transition-colors duration-700" aria-hidden="true">
          {repeatedClients.map((client, index) => (
            <span key={`ticker-2-${index}`}>{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
