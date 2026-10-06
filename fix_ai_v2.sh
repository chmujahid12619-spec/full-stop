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

    let debugError = "";

    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
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
        
        if (data && data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          const text = data.candidates[0].content.parts[0].text;
          return NextResponse.json({ text });
        } else if (data && data.error) {
          debugError = data.error.message || JSON.stringify(data.error);
        }
      } catch (err: any) {
        debugError = err.message;
      }
    }

    return NextResponse.json({ 
      text: "FULL STOP AI Operational. Debug Note: " + (debugError || "All models returned empty response. Check API Key permissions.") 
    });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
INNER
echo "API route upgraded with deep response extractor!"
