'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const profile = {
    name: 'Abdulsamed Tanrıverdi',
    avatarUrl: 'https://i.imgur.com/39Bv0aj.png',
    responseTime: '5 dakika içerisinde cevaplıyorum.',
  };

  const whatsappLink = "https://wa.me/905531716331?text=Merhaba,%20Site724%20üzerinden%20ulaşıyorum.%20Web%20tasarım%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.";

  const toggleWidget = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (!showMessage) {
        setIsTyping(true);
      }
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    if (isOpen && isTyping) {
      typingTimer = setTimeout(() => {
        setIsTyping(false);
        setShowMessage(true);
      }, 1500);
    }
    return () => clearTimeout(typingTimer);
  }, [isOpen, isTyping]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4 font-sans">
      {/* Chat Panel */}
      <div
        className={`bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-100 transition-all duration-300 origin-bottom-left ${
          isOpen ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100' : 'hidden'
        }`}
      >
        {/* Header */}
        <div className="bg-[#0f172a] p-6 text-white relative">
          <button
            onClick={toggleWidget}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition cursor-pointer"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profile.avatarUrl}
                alt="Profil"
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{profile.name}</h3>
              <p className="text-xs text-slate-300 mt-1 opacity-90">{profile.responseTime}</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-[#e5ddd5] p-6 h-64 flex flex-col gap-4 overflow-y-auto relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>

          {/* Time Badge */}
          <div className="text-center text-xs text-slate-500 z-10">
            <span>Şimdi</span>
          </div>

          {/* Typing Animation */}
          {isTyping && (
            <div className="flex items-center justify-start p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 relative z-10 self-start max-w-[90%] bg-white">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}

          {/* Welcome Message */}
          {showMessage && (
            <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 relative z-10 self-start max-w-[90%] animate-fadeIn">
              <p className="font-bold text-xs text-orange-600 mb-1">{profile.name}</p>
              <p>Merhaba 👋</p>
              <p className="mt-2">Yardım etmek için buradayım, soru ve görüşleriniz için yazabilirsiniz. 😊</p>
              <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">Şimdi</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-full transition shadow-lg hover:shadow-green-500/30 cursor-pointer"
          >
            <WhatsAppIcon size={24} className="fill-white" />
            Sohbete Başla
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        id="whatsapp-widget-open-btn"
        onClick={toggleWidget}
        className={`group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition duration-300 relative cursor-pointer ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="WhatsApp ile İletişime Geçin"
      >
        <WhatsAppIcon size={28} className="text-white" />
        <span className="font-bold pr-1">İletişime Geçin</span>
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}
