import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5521994211545"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;