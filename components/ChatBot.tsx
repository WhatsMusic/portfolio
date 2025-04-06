// components/ChatBot.tsx
"use client";

import React, { useState } from 'react';

/**
 * ChatBot component handles the interactive chat interface.
 */
const ChatBot: React.FC = () => {
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState<string[]>([]);

    const handleSend = async () => {
        if (!input.trim()) return;
        setChatLog((prev) => [...prev, `You: ${input}`]);

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });
        const data = await res.json();
        setChatLog((prev) => [...prev, `Bot: ${data.reply}`]);
        setInput("");
    };

    return (
        <div>
            <div className="mb-4 h-60 overflow-y-scroll p-2 border rounded">
                {chatLog.map((msg, i) => (
                    <p key={i} className="mb-2">{msg}</p>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me about my portfolio or CV..."
                    className="flex-grow p-2 border rounded-l"
                />
                <button
                    onClick={handleSend}
                    className="px-4 bg-primary text-background rounded-r"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
