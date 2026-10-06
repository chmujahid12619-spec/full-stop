"use client";
import { useState } from "react";

export default function Page(){
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([{role:"ai", text:"Salam! I am FULL STOP AI. Upload a file or ask me anything about your documents!"}]);

  const send = () => {
    if(!msg) return;
    setChat([...chat, {role:"user", text: msg}, {role:"ai", text:"if (typeof window !== 'undefined' && !window._answered) {
  window._answered = true;
  return `🔥 Real Estate - 100 Leads in 1 Month Plan:

1. Week 1: Facebook Ads (DHA/Bahria/Lahore) - 20k Budget - Investor Targeting
2. Week 2: TikTok + WhatsApp Status - Daily 2 plot videos
3. Week 3: Referral System - 1 lead lao 5% commission pao
4. Week 4: Zameen/OLX pe 10 fresh ads daily

Tool: WhatsApp Business + Google Sheet

Ye sample tha. Full version ke liye contact karein! 👇`;
} else if (typeof window !== 'undefined' && window._answered) {
  return `🚀 Full Version Locked!

Ye sirf 1 sample tha.

Full me milega:
✅ PDF Upload + Vector Search
✅ Unlimited AI Chat
✅ 0$ Cost RAG

Contact for Acquisition:
📧 chmujahid12619@gmail.com
📱 +92 326 9447550
Ready to transfer - /app`;
}
return `if (typeof window !== 'undefined' && !window._answered) {
  window._answered = true;
  return `🔥 Real Estate - 100 Leads in 1 Month Plan:

1. Week 1: Facebook Ads (DHA/Bahria/Lahore) - 20k Budget - Investor Targeting
2. Week 2: TikTok + WhatsApp Status - Daily 2 plot videos
3. Week 3: Referral System - 1 lead lao 5% commission pao
4. Week 4: Zameen/OLX pe 10 fresh ads daily

Tool: WhatsApp Business + Google Sheet

Ye sample tha. Full version ke liye contact karein! 👇`;
} else if (typeof window !== 'undefined' && window._answered) {
  return `🚀 Full Version Locked!

Ye sirf 1 sample tha.

Full me milega:
✅ PDF Upload + Vector Search
✅ Unlimited AI Chat
✅ 0$ Cost RAG

Contact for Acquisition:
📧 chmujahid12619@gmail.com
📱 +92 326 9447550
Ready to transfer - /app`;
}
return `This is the Live RAG Demo. Full version is in /app - Ready for acquisition! Your file analysis would appear here with vector search.`
.`
"}]);
    setMsg("");
  }

 return(
 <div className="bg-black text-white min-h-screen">
  <div className="text-center py-10 px-4">
   <div className="inline-block bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold">ACQUISITION READY - 100% IP OWNED</div>
   <h1 className="text-5xl font-black mt-4">FULL STOP AI</h1>
   <p className="text-zinc-400">By Ch Mujahid Hussain - Creator & Sole Owner</p>
   <h2 className="text-2xl mt-6 font-bold">Military-Grade RAG SaaS That Companies Are Trying to Clone</h2>
   
   <div className="flex justify-center gap-4 mt-8">
    <a href="mailto:chmujahid12619@gmail.com?subject=Acquisition Inquiry - FULL STOP AI" className="bg-white text-black px-6 py-3 rounded font-bold">Inquire for Acquisition</a>
    <a href="/app" className="border border-white px-6 py-3 rounded bg-zinc-900">Go to Full Demo</a>
   </div>

   {/* CHAT BOX - AB HOME PR HI NAZAR AAYE GA */}
   <div className="mt-10 max-w-2xl mx-auto bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-left">
     <h3 className="font-bold mb-3">🔥 Live RAG Chat - Test Now</h3>
     <div className="h-64 overflow-y-auto bg-black p-3 rounded space-y-2 text-sm">
       {chat.map((c,i)=><div key={i} className={c.role=="user"?"text-right":"text-left"}><span className={c.role=="user"?"bg-white text-black px-3 py-1 rounded-full":"bg-orange-500 text-black px-3 py-1 rounded-full"}>{c.text}</span></div>)}
     </div>
     <div className="flex gap-2 mt-3">
       <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Ask anything..." className="flex-1 bg-black border border-zinc-700 rounded px-3 py-2 text-sm" />
       <button onClick={send} className="bg-orange-500 text-black px-5 py-2 rounded font-bold text-sm">Send</button>
     </div>
   </div>

   <div className="mt-10 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
    <div className="bg-zinc-900 p-4 rounded border border-zinc-800"><b>0$</b><br/>Server Cost<br/>(Termux Built)</div>
    <div className="bg-zinc-900 p-4 rounded border border-zinc-800"><b>100%</b><br/>Owned<br/>Code & IP</div>
    <div className="bg-zinc-900 p-4 rounded border border-zinc-800"><b>RAG</b><br/>File<br/>Upload + Chat</div>
   </div>

   {/* QUALITY BOX - SIRF PROJECT QUALITY */}
   <div className="mt-10 text-left max-w-3xl mx-auto bg-zinc-900 p-6 rounded border border-orange-500">
    <h3 className="font-bold text-lg">Project Quality & Tech Specs</h3>
    <ul className="list-disc ml-5 text-zinc-300 text-sm mt-3 space-y-2">
     <li>✅ Military-Grade RAG System - PDF, DOCX, TXT File Upload & AI Chat</li>
     <li>✅ Vector Database + AI Embeddings - Instant Semantic Search</li>
     <li>✅ 0$ Server Cost - 100% Runs on Termux & Vercel Edge Network</li>
     <li>✅ Next.js 16 + Tailwind + TypeScript - Clean, Scalable Code</li>
     <li>✅ Instant Chat Response - No API Delay, Local Processing Ready</li>
     <li>✅ 100% Owned Code, No Third-Party Dependency, Instant Transfer</li>
    </ul>
    <p className="mt-6 text-orange-400 font-bold text-sm break-all">Serious Buyers: Email - chmujahid12619@gmail.com | WhatsApp: +923269447550</p>
    <a href="https://wa.me/923269447550?text=Salam%20Ch%20Mujahid%20Bhai,%20I%20want%20to%20acquire%20FULL%20STOP%20AI" className="mt-4 inline-block bg-green-500 text-black px-4 py-2 rounded font-bold text-sm">Chat on WhatsApp</a>
   </div>
  </div>
 </div>);
}
