/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'agent',
      text: 'Hello! Thank you for reaching out to Grills & Flames. Are you planning a custom outdoor kitchen or fire lounge for your villa?',
      time: 'Just now'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { sender: 'user', text: message, time: 'Just now' };
    setChatHistory((prev) => [...prev, userMsg]);
    const originalMsg = message;
    setMessage('');

    // Trigger realistic typing reply after 1 second
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: `Fantastic! A specialist is reviewing your interest in "${originalMsg}". Let's arrange a complimentary design consultation. Please leave your contact details or click to launch official WhatsApp Chat.`,
          time: 'Just now'
        }
      ]);
    }, 1000);
  };

  const launchWhatsAppDirect = () => {
    const formattedText = encodeURIComponent("Hello Grills & Flames, I would like to inquire about a custom outdoor kitchen or fireplace design.");
    window.open(`https://wa.me/97142345678?text=${formattedText}`, '_blank');
  };

  return (
    <div id="whatsapp-integration-widget" className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 font-sans">
      {/* Mini Chat Window */}
      {isOpen && (
        <div
          id="whatsapp-chat-box"
          className="bg-white rounded-2xl shadow-2xl w-76 sm:w-96 max-w-[calc(100vw-2rem)] overflow-hidden border border-neutral-100 mb-4 animate-slideUp transition-all duration-300 absolute bottom-16 right-0"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80"
                  alt="Consultant"
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="font-semibold text-sm">Asha – Grills & Flames</div>
                <div className="text-xs text-emerald-100">Outdoor Design Concierge</div>
              </div>
            </div>
            <button
              id="whatsapp-close-chat"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-[#ECE5DD] flex flex-col gap-3">
            {chatHistory.map((chat, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-xl p-3 text-xs shadow-sm ${
                  chat.sender === 'agent'
                    ? 'bg-white text-neutral-800 self-start rounded-tl-none'
                    : 'bg-[#DCF8C6] text-neutral-800 self-end rounded-tr-none'
                }`}
              >
                <p>{chat.text}</p>
                <span className="block text-[9px] text-neutral-400 mt-1 text-right">{chat.time}</span>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white flex items-center gap-2 border-t border-neutral-100">
            <input
              type="text"
              placeholder="Type your query..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs border border-neutral-200 rounded-full px-4 py-2 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-neutral-800"
            />
            <button
              id="whatsapp-send-message"
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transition-all focus:outline-none"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct WA Launch */}
          <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-100 text-center">
            <button
              id="whatsapp-direct-link"
              onClick={launchWhatsAppDirect}
              className="text-[10px] text-emerald-700 font-semibold hover:underline flex items-center justify-center gap-1.5 w-full"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              Launch Official WhatsApp Chat directly
            </button>
          </div>
        </div>
      )}

      {/* Pulsing Main Trigger Button */}
      <button
        id="whatsapp-floating-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group focus:outline-none animate-pulseHover transition-transform hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden"></span>
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.513 5.35 1.515 5.548 0 10.061-4.512 10.064-10.064.002-2.69-1.045-5.216-2.946-7.119C17.154 1.582 14.636.536 12.01.536c-5.55 0-10.069 4.512-10.073 10.064-.001 2.036.529 4.01 1.535 5.713L2.503 21.64l5.477-1.436z" />
          <path d="M8.823 6.613c-.156-.347-.32-.354-.47-.36l-.398-.008c-.143 0-.376.054-.572.268-.195.214-.748.73-.748 1.779 0 1.05.764 2.062.87 2.206.107.144 1.503 2.296 3.642 3.22.508.22.905.35 1.213.448.51.162.973.139 1.34.084.408-.06 1.24-.507 1.413-.997.172-.49.172-.91.121-.997-.051-.088-.188-.139-.395-.244-.207-.104-1.226-.605-1.415-.673-.189-.068-.328-.104-.465.103-.137.207-.532.673-.652.81-.12.138-.24.156-.448.052-.207-.104-.876-.323-1.668-1.03-.615-.55-1.03-1.228-1.15-1.436-.12-.207-.013-.32.09-.423.094-.093.208-.244.312-.366.103-.122.138-.207.207-.347.069-.138.034-.26-.017-.364-.051-.104-.415-1.002-.57-1.347z" />
        </svg>
      </button>
    </div>
  );
}
