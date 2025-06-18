export async function POST(req) {
  try {
    const body = await req.json();

    const userInput = body.message || "Hello!";
    let threadId = body.thread_id || null;

    const apiKey = process.env.OPENAI_API_KEY;
    const assistantId = body.agentId || "asst_vLYkgiVRfB8ik6PwF5lIwNoQ"; // your assistant ID

    console.log(`apiKey ${apiKey}`)
    // 1. Create thread if not provided
    if (!threadId) {
      const createThreadRes = await fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "OpenAI-Beta": "assistants=v2" // ✅ required for Assistants API
        },
        body: JSON.stringify({})
      });

      if (!createThreadRes.ok) {
        const errorBody = await createThreadRes.json();
        throw new Error(errorBody?.error?.message || "Failed to create thread");
      }

      const createThreadJson = await createThreadRes.json();
      threadId = createThreadJson.id;
    }

    

    // 2. Add user message
    const messageRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2" // ✅ required for Assistants API
      },
      body: JSON.stringify({
        role: "user",
        content: userInput
      })
    });

    if (!messageRes.ok) {
      const errorBody = await messageRes.json();
      throw new Error(errorBody?.error?.message || "Failed to add message");
    }

    // 3. Run assistant
    const runRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2" // ✅ required for Assistants API

      },
      body: JSON.stringify({ assistant_id: assistantId })
    });

    if (!runRes.ok) {
      const errorBody = await runRes.json();
      throw new Error(errorBody?.error?.message || "Failed to run assistant");
    }

    const runJson = await runRes.json();
    const runId = runJson.id;

    // 4. Poll run status
    let status = "queued";
    let attempts = 0;
    while (status !== "completed" && status !== "failed" && attempts < 10) {
      const poll = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "OpenAI-Beta": "assistants=v2" // ✅ required for Assistants API
  
        }
      });

      if (!poll.ok) {
        const errorBody = await poll.json();
        throw new Error(errorBody?.error?.message || "Polling failed");
      }

      const pollJson = await poll.json();
      status = pollJson.status;
      attempts++;

      if (status !== "completed") await new Promise(r => setTimeout(r, 2500));
    }

    if (status !== "completed") {
      throw new Error("Assistant did not complete within polling limit.");
    }

    // 5. Fetch messages
    const messagesRes = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2" // ✅ required for Assistants API
      }
    });

    if (!messagesRes.ok) {
      const errorBody = await messagesRes.json();
      throw new Error(errorBody?.error?.message || `Failed to fetch messages ${messagesRes}`);
    }

    const messagesJson = await messagesRes.json();
    const lastMsg = messagesJson.data.find(msg => msg.role === "assistant");

    return Response.json({
      reply: lastMsg?.content?.[0]?.text?.value || "(no reply)",
      thread_id: threadId
    });

  } catch (err) {
    console.error("❌ OpenAI Assistant Error:", err.message);

    return Response.json({
      error: true,
      message: err.message || "Unexpected error occurred",
    }, { status: 500 });
  }
}
