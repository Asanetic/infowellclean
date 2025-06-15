// File: /app/api/gptchat/route.js or inside any Next.js function

export async function POST(req) {
    const body = await req.json(); // Optional: Accept dynamic prompts
    const userMessage = body?.message || "message prompt";
  
    const apiKey = "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"; // Replace with your actual API key
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: userMessage }
        ]
      }),
    });
  
    const data = await response.json();
  
    // Extract assistant's reply
    const assistantMessage = data?.choices?.[0]?.message?.content || data;
  
    return Response.json({ reply: assistantMessage });
  }
  