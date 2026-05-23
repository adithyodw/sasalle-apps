"use client";

import { WhatsAppConcierge } from "./whatsapp-concierge";

export function FooterWhatsAppBlock({ title }: { title: string }) {
  return (
    <div>
      <p className="font-label-caps mb-4 text-on-primary-container/80">{title}</p>
      <WhatsAppConcierge variant="ghost" tone="dark" />
    </div>
  );
}
