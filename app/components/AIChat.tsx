"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

const WELCOME: Message = {
  role: "assistant",
  text: "Welcome to DN Studios. Tell me what you want to build — website, app, e-commerce, software or something completely custom.",
};

const QUICK = ["Website", "Mobile App", "E-commerce", "Pricing", "Contact"];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("dn-ai-v7");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed.slice(-40));
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try { localStorage.setItem("dn-ai-v7", JSON.stringify(messages.slice(-40))); } catch {}
  }, [messages, mounted]);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(value = input) {
    const text = value.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: messages.slice(-10) }),
      });
      const data = await res.json();
      setMessages([...next, {
        role: "assistant",
        text: typeof data?.reply === "string" ? data.reply : "Tell me more about your project and I’ll help you plan it.",
      }]);
    } catch {
      setMessages([...next, {
        role: "assistant",
        text: "I can still help you plan it. Tell me the project type, key features and target timeline. You can also WhatsApp DN Studios on +91 87806 92285.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  function whatsapp() {
    const text = encodeURIComponent("Hello DN Studios, I would like to discuss a project.");
    window.open(`https://wa.me/918780692285?text=${text}`, "_blank", "noopener,noreferrer");
  }

  if (!mounted) return null;

  return (
    <>
      {!open && (
        <button className="dn-ai-launcher" onClick={() => setOpen(true)} aria-label="Open DN Studios AI">
          <span className="dn-ai-pulse" />
          <span className="dn-ai-mark">DN</span>
          <span className="dn-ai-live" />
        </button>
      )}

      {open && (
        <aside className="dn-ai-chat" aria-label="DN Studios AI assistant">
          <header className="dn-ai-head">
            <div className="dn-ai-identity">
              <div className="dn-ai-avatar">DN</div>
              <div><strong>DN STUDIOS AI</strong><span><i /> ONLINE / HUMAN SUPPORT</span></div>
            </div>
            <div className="dn-ai-actions">
              <button onClick={() => setMessages([WELCOME])} aria-label="Clear chat">↻</button>
              <button onClick={() => setOpen(false)} aria-label="Close chat">×</button>
            </div>
          </header>

          <div className="dn-ai-context">
            <span>PRIVATE DIGITAL WORKS</span>
            <b>How can we help you build?</b>
            <p>Describe the idea in your own words. I’ll help turn it into a clear project brief.</p>
          </div>

          <div className="dn-ai-body">
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`dn-ai-row ${m.role === "user" ? "user" : "bot"}`}>
                {m.role === "assistant" && <span className="dn-ai-mini">DN</span>}
                <div className="dn-ai-bubble"><p>{m.text}</p></div>
              </div>
            ))}
            {loading && (
              <div className="dn-ai-row bot">
                <span className="dn-ai-mini">DN</span>
                <div className="dn-ai-bubble dn-ai-typing"><i /><i /><i /></div>
              </div>
            )}
            <div ref={bottom} />
          </div>

          <div className="dn-ai-quick">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q === "Contact" ? "I want to contact DN Studios." : `Tell me about ${q}.`)}>{q}</button>
            ))}
          </div>

          <div className="dn-ai-direct">
            <button onClick={whatsapp}>WhatsApp</button>
            <a href="tel:+918780692285">Call DN Studios</a>
          </div>

          <form className="dn-ai-form" onSubmit={submit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} maxLength={1200} disabled={loading} placeholder="Describe your project..." />
            <button disabled={!input.trim() || loading} aria-label="Send">↗</button>
          </form>

          <footer className="dn-ai-foot">DN STUDIOS / AI ASSISTED / HUMAN SUPPORT AVAILABLE</footer>
        </aside>
      )}
    </>
  );
}
