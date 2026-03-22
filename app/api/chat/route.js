// Remove edge runtime export to ensure standard Node.js compilation

export async function POST(req) {
  if (!process.env.GEMINI_API_KEY) {
    console.error("No API key found in env!");
    return new Response(JSON.stringify({ error: 'Gemini API key not configured in .env' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { messages } = await req.json();

    const systemPrompt = "You are VANI, a highly intelligent, multilingual AI assistant built by Harsha. Your primary capabilities are providing direct, helpful, and highly articulate responses in English, Hindi, and Telugu. Keep your tone professional, friendly, and slightly futuristic. You are currently in Stage 1-2 of development, operating as a fast text assistant with context awareness. You are built completely from scratch by one developer, Harsha. Never break character.";

    // Filter out internal connection errors and format messages
    const validMessages = messages.filter(msg => !msg.content.startsWith("Connection Error:"));
    
    // Gemini requires alternating roles (user, model, user, model). 
    // We group consecutive roles together into single parts.
    const geminiContents = [];
    for (const msg of validMessages) {
      const currentRole = msg.role === 'user' ? 'user' : 'model';
      
      const last = geminiContents[geminiContents.length - 1];
      if (last && last.role === currentRole) {
        last.parts.push({ text: "\n" + msg.content });
      } else {
        geminiContents.push({ 
          role: currentRole, 
          parts: [{ text: msg.content }] 
        });
      }
    }

    const payload = {
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: geminiContents
    };

    const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    console.log("SENDING TO GEMINI:", targetUrl);
    console.log("PAYLOAD CONTENTS:", JSON.stringify(geminiContents, null, 2));

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY
      },
      body: JSON.stringify(payload)
    });

    console.log("GEMINI HTTP STATUS:", response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("GEMINI API ERROR TEXT:", errorData);
      return new Response(JSON.stringify({ error: 'API Error', details: errorData }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    
    // Extract text from Gemini response structure
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("INTERNAL CRASH:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
