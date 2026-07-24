import { useState, useRef, useEffect } from "react";

function AIRaceEngineer() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hello! I'm your PitWall AI Race Engineer. Ask me anything about Formula 1 or the current race.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      text: question,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("https://pitwall-backend-c6yr.onrender.com/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "❌ Unable to contact the AI backend.",
        },
      ]);
    }

    setQuestion("");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">

        {/* Header */}

        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          🤖 AI Race Engineer
        </h1>

        <p className="mt-3 text-sm text-gray-400 sm:text-base">
          Powered by Gemini AI
        </p>

        {/* Chat */}

        <div className="mt-8 h-[60vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-[#111111] p-4 sm:p-6">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-5 flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap sm:max-w-[75%] sm:px-5 sm:py-4 sm:text-base ${
                  message.role === "user"
                    ? "bg-red-600"
                    : "bg-zinc-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-sm text-gray-400 animate-pulse">
              AI is thinking...
            </div>
          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Input */}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                sendMessage();
              }
            }}
            placeholder="Ask anything about Formula 1..."
            className="flex-1 rounded-xl bg-zinc-900 p-4 text-sm outline-none transition focus:ring-2 focus:ring-red-600 sm:text-base"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIRaceEngineer;