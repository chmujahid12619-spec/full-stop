#!/bin/bash
echo "بھائی جان اپنی Gemini API Key Paste کریں (نظر نہیں آئے گی):"
read -s GEMINI_KEY
echo ""
echo "NEXT_PUBLIC_GEMINI_API_KEY=$GEMINI_KEY" > .env.local
echo "✅ Key Save ہو گئی .env.local میں!"
