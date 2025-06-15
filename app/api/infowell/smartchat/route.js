// File: /app/api/gptchat/route.js or inside any Next.js function

export async function POST(req) {
    const body = await req.json(); // Optional: Accept dynamic prompts
    const userMessage = body?.message || "message prompt";
  
  
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
  