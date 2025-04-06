// components/ChatBotOverlay.tsx
"use client";

import React, { useState } from 'react';
import { FiMessageSquare } from "react-icons/fi";
import ChatBot from './ChatBot';

export default function ChatBotOverlay() {
    const [isChatOpen, setChatOpen] = useState(false);

    React.useEffect(() => {
        console.log("isChatOpen state:", isChatOpen);
    }, [isChatOpen]);

    return (
        <>
            <button
                onClick={() => setChatOpen(true)}
                className="fixed bottom-24 right-4 p-3 bg-primary text-background rounded-full shadow-lg hover:bg-primary/80 transition flex items-center justify-center"
                aria-label="Open Chatbot"
            >
                <FiMessageSquare size={24} />
            </button>
            {isChatOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Chatbot</h2>
                        <ChatBot />
                        <button
                            onClick={() => setChatOpen(false)}
                            className="mt-4 px-4 py-2 bg-primary text-black rounded hover:bg-primary/80"
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
