"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";

const quickActions = ["transfer", "dining", "housekeeping"] as const;

export default function ConciergePage() {
  const t = useTranslations("guest");
  const [messages, setMessages] = useState<{ role: "guest" | "ai"; text: string }[]>([
    {
      role: "ai",
      text: "Good evening. I am your SASALLE concierge. How may we shape your evening?",
    },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const guestMsg = input.trim();
    setMessages((m) => [
      ...m,
      { role: "guest", text: guestMsg },
      {
        role: "ai",
        text: "Thank you. I have noted your request. A member of our team will confirm within fifteen minutes.",
      },
    ]);
    setInput("");
  };

  return (
    <AppShell>
      <main className="flex min-h-[80dvh] flex-col pb-32 pt-24">
        <div className="flex-1 space-y-4 overflow-y-auto px-margin py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-3 ${
                msg.role === "guest"
                  ? "ml-auto bg-primary text-on-primary"
                  : "border border-outline-variant/30 bg-surface-container-low"
              }`}
            >
              <p className="text-body-md">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto px-margin pb-4">
          {quickActions.map((key) => (
            <button
              key={key}
              type="button"
              className="shrink-0 border border-outline px-4 py-2 font-label-caps text-on-surface-variant"
              onClick={() => setInput(t(key))}
            >
              {t(key)}
            </button>
          ))}
        </div>
        <div className="border-t border-outline-variant/30 px-margin py-4 pb-safe">
          <div className="flex gap-2">
            <input
              className="flex-1 border-b border-outline bg-transparent py-2 outline-none"
              placeholder={t("conciergePlaceholder")}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <Button type="button" onClick={send}>
              Send
            </Button>
          </div>
          <button type="button" className="font-label-caps mt-4 text-secondary underline">
            {t("humanHandoff")}
          </button>
        </div>
      </main>
    </AppShell>
  );
}
