"use client";

import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, MapPin, TrendingUp, Clock, CheckCircle, 
  Menu, X, Instagram, Linkedin, Facebook, ChevronRight, 
  ArrowRight, ArrowUp, Share2 
} from 'lucide-react';

// --- ÖZEL WHATSAPP IKONU ---
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Site724Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/905550000000"; // NUMARANI GÜNCELLE
  const phoneLink = "tel:05550000000";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600 relative scroll-smooth">

      {/* --- FLOATING BUTTONS --- */}

      {/* 1. WhatsApp Widget */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4 font-sans">
        
        {/* Chat Penceresi */}
        {isChatOpen && (
            <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300 origin-bottom-left">
                <div className="bg-[#0f172a] p-6 text-white relative">
                    <button 
                        onClick={() => setIsChatOpen(false)} 
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60" 
                                alt="Profil" 
                                className="w-14 h-14 rounded-full border-2 border-white object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-tight">Abdulsamed<br/>Tanrıverdi</h3>
                            <p className="text-xs text-slate-300 mt-1 opacity-90">5 dakika içerisinde cevaplıyorum.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#e5ddd5] p-6 h-64 flex flex-col gap-4 overflow-y-auto relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                    <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 relative z-10 self-start max-w-[90%]">
                        <p className="font-bold text-xs text-orange-600 mb-1">Abdulsamed Tanrıverdi</p>
                        <p>Merhaba 👋</p>
                        <p className="mt-2">Yardım etmek için buradayım, soru ve görüşleriniz için yazabilirsiniz. 😊</p>
                        <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">Şimdi</span>
                    </div>
                </div>

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
        )}

        {/* Tetikleyici Buton (Cursor-Pointer Eklendi) */}
        <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="group flex items-center gap-3 bg-[#0f172a] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition duration-300 relative cursor-pointer"
        >
            <WhatsAppIcon size={28} className="text-white" />
            <span className="font-bold pr-1">İletişime Geçin</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
        </button>
      </div>

      {/* 2. Yukarı Çık Butonu (Cursor-Pointer Eklendi) */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-white text-slate-900 border border-slate-200 p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-500 transform cursor-pointer ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        title="Yukarı Çık"
      >
        <ArrowUp size={24} />
      </button>

      {/* --- NAVBAR --- */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
            scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo (Cursor-Pointer) */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Site<span className="text-orange-500">724</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#hero" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Ana Sayfa</a>
              <a href="#hizmetler" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Hizmetler</a>
              <a href="#avantajlar" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Neden Biz?</a>
              {/* Teklif Al Butonu (Cursor-Pointer) */}
              <button onClick={() => setIsChatOpen(true)} className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg hover:shadow-orange-500/20 flex items-center gap-2 cursor-pointer">
                <MessageCircle size={18} />
                Teklif Al
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2 cursor-pointer">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 absolute w-full shadow-xl">
            <a href="#hero" className="block text-slate-600 p-2 hover:bg-slate-50 rounded" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</a>
            <a href="#hizmetler" className="block text-slate-600 p-2 hover:bg-slate-50 rounded" onClick={() => setIsMenuOpen(false)}>Hizmetler</a>
            <a href="#avantajlar" className="block text-slate-600 p-2 hover:bg-slate-50 rounded" onClick={() => setIsMenuOpen(false)}>Neden Biz?</a>
            <button onClick={() => { setIsChatOpen(true); setIsMenuOpen(false); }} className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-bold cursor-pointer">
              WhatsApp'tan Yaz
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pr-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Kars Esnafına Özel Dijital Çözümler
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Siz Uyurken Bile <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">İşiniz Çalışsın</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              İşletmenizi dijital dünyaya taşıyoruz. Müşterileriniz sizi Google'da bulsun, Kars'a gelmeden rezervasyon yapsın, satışlarınız 7/24 devam etsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => setIsChatOpen(true)} className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-xl shadow-slate-900/20 hover:-translate-y-1 cursor-pointer">
                Hemen Başlayalım
                <ArrowRight size={20} />
              </button>
              <a href="#hizmetler" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-500 text-slate-600 px-8 py-4 rounded-full text-lg font-medium transition shadow-sm hover:shadow-md cursor-pointer">
                Hizmetleri Gör
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-[4/3] group">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Growth" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-3xl font-bold text-slate-900">50+</p><p className="text-sm text-slate-500 mt-1">Mutlu Esnaf</p></div>
            <div><p className="text-3xl font-bold text-slate-900">3 Günde</p><p className="text-sm text-slate-500 mt-1">Teslimat</p></div>
            <div><p className="text-3xl font-bold text-slate-900">%100</p><p className="text-sm text-slate-500 mt-1">SEO Uyumlu</p></div>
            <div><p className="text-3xl font-bold text-slate-900">7/24</p><p className="text-sm text-slate-500 mt-1">Teknik Destek</p></div>
        </div>
      </div>

      {/* --- PAIN POINTS --- */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Müşteri Kaybetmekten Yorulmadınız mı?</h2>
            <p className="text-slate-600 text-lg">Dijital dünyada yoksanız, her gün potansiyel cironuzun yarısını rakiplerinize kaptırıyorsunuz demektir.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition"><MapPin size={28} /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Haritada Yoksunuz</h3>
              <p className="text-slate-600">Turistler sizi arıyor ama bulamayıp rakibinize gidiyor.</p>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition"><TrendingUp size={28} /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Satışlar Düşük</h3>
              <p className="text-slate-600">Sadece dükkanın önünden geçenlere satış yapıyorsunuz.</p>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition"><Clock size={28} /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Zaman Yetmiyor</h3>
              <p className="text-slate-600">Telefonda tek tek fiyat vermekten yoruldunuz mu?</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HİZMETLER (GÜNCELLENDİ) --- */}
      <section id="hizmetler" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Hizmet 1: Web Tasarım */}
          <div id="hizmet-web" className="flex flex-col lg:flex-row items-center gap-16 scroll-mt-24">
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="Web Tasarım" />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">Web Tasarım</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Kurumsal Kimliğinizi Yansıtın</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kurumsal kimliğinizi yansıtan, güven veren ve tüm telefonlarda kusursuz çalışan modern web siteleri.
              </p>
              <button onClick={() => setIsChatOpen(true)} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group cursor-pointer">
                Fiyat Teklifi Alın <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Hizmet 2: E-Ticaret */}
          <div id="hizmet-eticaret" className="flex flex-col-reverse lg:flex-row items-center gap-16 scroll-mt-24">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">E-Ticaret</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Ürünlerinizi Tüm Türkiye'ye Satın</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kars kaşarı, balı veya el sanatları... Ürünlerinizi sadece dükkana gelene değil, İstanbul'a, İzmir'e kargolayın.
              </p>
              <button onClick={() => setIsChatOpen(true)} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group cursor-pointer">
                Paketleri İnceleyin <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="E-Ticaret" />
               </div>
            </div>
          </div>

           {/* Hizmet 3: Google & SEO */}
           <div id="hizmet-seo" className="flex flex-col lg:flex-row items-center gap-16 scroll-mt-24">
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="SEO" />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">Google & SEO</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Arandığında Bulunan Siz Olun</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigasyonda ve Google aramalarında en üstte çıkın. Müşteri "Kars otelleri" yazdığında sizi görsün.
              </p>
              <button onClick={() => setIsChatOpen(true)} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group cursor-pointer">
                Analiz İsteyin <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Hizmet 4: Sosyal Medya */}
          <div id="hizmet-sosyal" className="flex flex-col-reverse lg:flex-row items-center gap-16 scroll-mt-24">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">Sosyal Medya Yönetimi</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Takipçi Değil, Müşteri Kazanın</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Instagram ve Facebook hesabınızı profesyonel ellere bırakın. Düzenli paylaşımlar, Reels videoları ve reklam yönetimiyle marka sesinizi duyurun.
              </p>
              <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> İçerik Üretimi & Tasarım</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Reels & Video Çekimi</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Sponsorlu Reklam Yönetimi</li>
              </ul>
              <button onClick={() => setIsChatOpen(true)} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group cursor-pointer">
                Sosyal Medya Paketi Alın <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="Sosyal Medya Yönetimi" />
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEDEN BİZ --- */}
      <section id="avantajlar" className="bg-slate-900 text-white py-24 scroll-mt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4">Neden Site724?</h2>
                 <p className="text-slate-400">Bizi diğerlerinden ayıran, Kars'ı ve sizi tanıyor olmamız.</p>
             </div>
             <div className="grid md:grid-cols-4 gap-8">
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><MapPin /></div>
                     <h4 className="font-bold text-lg mb-2">Yerel Destek</h4>
                     <p className="text-sm text-slate-400">İstanbul'daki gibi telefonda beklemezsiniz. Bir çay içimlik uzağınızdayız.</p>
                 </div>
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><Phone /></div>
                     <h4 className="font-bold text-lg mb-2">7/24 İletişim</h4>
                     <p className="text-sm text-slate-400">Sitenizde sorun mu var? Bize her an ulaşabilirsiniz.</p>
                 </div>
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><Share2 /></div>
                     <h4 className="font-bold text-lg mb-2">Sosyal Güç</h4>
                     <p className="text-sm text-slate-400">Sadece web sitesi değil, Instagram'da da büyümenizi sağlıyoruz.</p>
                 </div>
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><TrendingUp /></div>
                     <h4 className="font-bold text-lg mb-2">Sonuç Odaklı</h4>
                     <p className="text-sm text-slate-400">Size para kazandıracak kurguyu yapıyoruz.</p>
                 </div>
             </div>
         </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">İşletmenizi Büyütmeye Hazır Mısınız?</h2>
                <p className="text-orange-50 text-lg mb-10 max-w-2xl mx-auto relative z-10">Kaybedecek vaktiniz yok. Rakipleriniz dijitale geçti bile.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <button onClick={() => setIsChatOpen(true)} className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition shadow-xl cursor-pointer">
                    <WhatsAppIcon size={24} />
                    WhatsApp'tan Yazın
                    </button>
                    <a href={phoneLink} className="bg-orange-700/50 border border-white/30 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition cursor-pointer">
                    <Phone size={24} />
                    Hemen Arayın
                    </a>
                </div>
            </div>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={scrollToTop}>
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                        <span className="text-2xl font-bold text-slate-900">Site<span className="text-orange-500">724</span></span>
                    </div>
                    <p className="text-slate-500 mb-6">Kars'ın yerel işletmeleri için dijital büyüme ortağı. Web tasarım, SEO ve sosyal medya çözümleri.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white transition"><Instagram size={20} /></a>
                        <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition"><Linkedin size={20} /></a>
                        <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-800 hover:text-white transition"><Facebook size={20} /></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Hızlı Erişim</h4>
                    <ul className="space-y-3">
                        <li><a href="#hero" className="text-slate-600 hover:text-orange-500 transition">Ana Sayfa</a></li>
                        <li><a href="#hizmetler" className="text-slate-600 hover:text-orange-500 transition">Hizmetlerimiz</a></li>
                        <li><a href="#avantajlar" className="text-slate-600 hover:text-orange-500 transition">Neden Biz?</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Hizmetler</h4>
                    <ul className="space-y-3">
                        <li><a href="#hizmet-web" className="text-slate-600 hover:text-orange-500 transition">Web Tasarım</a></li>
                        <li><a href="#hizmet-eticaret" className="text-slate-600 hover:text-orange-500 transition">E-Ticaret Paketleri</a></li>
                        <li><a href="#hizmet-seo" className="text-slate-600 hover:text-orange-500 transition">Google Harita Kaydı</a></li>
                        <li><a href="#hizmet-sosyal" className="text-slate-600 hover:text-orange-500 transition">Sosyal Medya Yönetimi</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">İletişim</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-600">
                            <MapPin size={20} className="text-orange-500 shrink-0" />
                            <span>Merkez, Kars</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                            <Phone size={20} className="text-orange-500 shrink-0" />
                            <span>+90 555 000 00 00</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                            <MessageCircle size={20} className="text-orange-500 shrink-0" />
                            <span>info@site724.com.tr</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>&copy; 2026 Site724. Tüm Hakları Saklıdır.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-slate-900">Gizlilik Politikası</a>
                    <a href="#" className="hover:text-slate-900">Kullanım Şartları</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Site724Landing;