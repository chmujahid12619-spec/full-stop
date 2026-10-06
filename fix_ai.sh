cat << 'INNER' > src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    const models = [
      "gemini-1.5-flash",
      "gemini-1.5-pro",
      "gemini-2.0-flash",
      "gemini-flash-latest"
    ];

    let lastError = "";

    for (const model of models) {
      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are FULL STOP AI created by Ch Mujahid Hussain. Never say you are Gemini or Google. Answer: ${prompt}`
              }]
            }]
          }),
        });

        const data = await res.json();
        
        if (!data.error) {
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
          return NextResponse.json({ text });
        }
        
        lastError = JSON.stringify(data.error);
      } catch (err: any) {
        lastError = err.message;
      }
    }

    return NextResponse.json({ 
      text: "FULL STOP AI System is currently experiencing high server traffic. Please try your query again in a moment." 
    });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
INNER
echo "API route updated successfully without Nano!"
