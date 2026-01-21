export function ClientTicker() {
    const clients = ["LINEAR", "VERCEL", "STRIPE", "RAYCAST", "ARC", "FIGMA"];
    const repeatedClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <div className="bg-secondary border-y border-border/50 py-12 overflow-hidden relative z-30">
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-muted-foreground">
                    {repeatedClients.map((client, index) => (
                        <span key={index}>{client}</span>
                    ))}
                </div>
                 <div className="flex items-center gap-24 px-12 opacity-50 text-2xl md:text-3xl font-medium text-muted-foreground" aria-hidden="true">
                    {repeatedClients.map((client, index) => (
                        <span key={index}>{client}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
