"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function FloatingActions() {
  const whatsappNumber = "917900780022";
  const callNumber = "7900780022";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageSquare size={24} fill="currentColor" />
      </a>

      {/* Call */}
      <a
        href={`tel:${callNumber}`}
        className="bg-gold text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Call"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
}
