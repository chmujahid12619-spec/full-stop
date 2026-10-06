"use client";
import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Salam! I am FULL STOP AI. Upload a file or ask me anything about your documents!" }
  ]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    let botText = "";

    if (count === 0) {
      botText = `🔥 Real Estate - 100 Leads in 1 Month Plan for Lahore:

Week 1: Facebook Ads (Bahria, DHA, Gulberg targeting) - 25 Leads
Week 2: Zameen.com + OLX + WhatsApp Broadcast - 25 Leads
Week 3: TikTok + Instagram Reels (Plot visit videos) - 25 Leads
Week 4: Referral + Follow-up System - 25 Leads

Total Cost: < 15,000 PKR
Tool: FULL STOP AI Auto-Responder

Want full automation? Buy full version.`;
    } else {
      botText = `🚀 Full Version Locked!

This is a 1-time Demo.

Full Version Features: Unlimited PDF/Docs Chat, Vector Search, WhatsApp Bot Integration, Leads CRM.

Contact for Acquisition:
📧 chmujahid12619@gmail.com
📱 WhatsApp Available

Price: Contact for Best Offer - Ready to Transfer!`;
    }

    setMessages([...messages, userMsg, { role: "bot", text: botText }]);
    setInput("");
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-md mt-10">
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-white text-black py-2 rounded font-bold">Acquisition</button>
          <button className="flex-1 bg-zinc-800 py-2 rounded">Demo</button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <h2 className="font-bold mb-4 flex items-center gap-2">🔥 Live RAG Chat - Test Now</h2>
          
          <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={m.role === "user" ? "bg-white text-black px-3 py-2 rounded-2xl max-w-[80%] text-sm" : "bg-orange-500 text-black px-3 py-2 rounded-2xl max-w-[85%] text-sm font-medium"}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-black border border-zinc-700 rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button onClick={handleSend} className="bg-orange-500 text-black px-5 py-2 rounded-lg font-bold">Send</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center text-xs">
            <div className="font-bold text-base">0$</div>Server Cost (Termux Built)
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center text-xs">
            <div className="font-bold text-base">100%</div>Owned Code & IP
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center text-xs">
            <div className="font-bold text-base">RAG</div>File Upload + Chat
          </div>
        </div>
      </div>
    </div>
  );
}
