"use client";
import { useState } from "react";
export default function AppPage() {
 const [q, setQ] = useState(""); const [ans, setAns] = useState(""); const [loading, setLoading] = useState(false);
 async function ask(){
  setLoading(true);
  const r = await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:q})});
  const d = await r.json(); setAns(d.reply); setLoading(false);
 }
 return(
 <div className="bg-black text-white min-h-screen p-6">
  <h1 className="text-2xl font-bold">FULL STOP AI - By Ch Mujahid Hussain</h1>
  <div className="mt-6 flex gap-2"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="who r you" className="flex-1 p-3 rounded bg-zinc-900 border border-zinc-700"/><button onClick={ask} className="bg-orange-500 text-black px-6 rounded font-bold">ASK</button></div>
  {loading && <p className="mt-4 text-zinc-400">FULL STOP AI Processing...</p>}
  {ans && <div className="mt-4 bg-zinc-900 p-4 rounded border border-zinc-800 whitespace-pre-wrap">{ans}</div>}
 </div>)
}
