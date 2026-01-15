"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, TrendingUp, Clock, CheckCircle, Menu, X, Instagram, Linkedin, Facebook, ChevronRight, Globe, ArrowRight } from 'lucide-react';

const Site724Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll efektini takip et (Header için)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp Linki
  const whatsappLink = "https://wa.me/905550000000";
  const phoneLink = "tel:05550000000";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* --- NAVBAR (Glassmorphism Effect) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Site<span className="text-orange-500">724</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#hero" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Ana Sayfa</a>
              <a href="#hizmetler" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Hizmetler</a>
              <a href="#avantajlar" className="text-slate-600 hover:text-orange-500 transition cursor-pointer">Neden Biz?</a>
              <a href={whatsappLink} className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg hover:shadow-orange-500/20 flex items-center gap-2">
                <MessageCircle size={18} />
                Teklif Al
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
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
            <a href={whatsappLink} className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-bold">
              WhatsApp'tan Yaz
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Blobs (Süsleme) */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          
          {/* Text Content */}
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
              <a href={whatsappLink} className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-xl shadow-slate-900/20 hover:-translate-y-1">
                Hemen Başlayalım
                <ArrowRight size={20} />
              </a>
              <a href="#hizmetler" className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-orange-500 hover:text-orange-500 text-slate-600 px-8 py-4 rounded-full text-lg font-medium transition shadow-sm hover:shadow-md">
                Hizmetleri Gör
              </a>
            </div>
            <p className="mt-8 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-4">
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-orange-500" /> %100 Yerel Destek</span>
              <span className="flex items-center gap-1"><CheckCircle size={16} className="text-orange-500" /> Faturalı İşlem</span>
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 aspect-[4/3] group">
               {/* Buraya senin 3D görselin gelecek */}
               <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Growth Dashboard" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS / TRUST BAR --- */}
      <div className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-500 mt-1">Mutlu Esnaf</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900">3 Günde</p>
                <p className="text-sm text-slate-500 mt-1">Teslimat</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900">%100</p>
                <p className="text-sm text-slate-500 mt-1">SEO Uyumlu</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900">7/24</p>
                <p className="text-sm text-slate-500 mt-1">Teknik Destek</p>
            </div>
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
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Haritada Yoksunuz</h3>
              <p className="text-slate-600">Turistler "en yakın restoran" veya "otel" yazdığında sizi değil, yan komşunuzu görüyor.</p>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Satışlar Düşük</h3>
              <p className="text-slate-600">Sadece dükkanın önünden geçenlere satış yapıyorsunuz. Oysa internette milyonlarca müşteri var.</p>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Zaman Yetmiyor</h3>
              <p className="text-slate-600">Instagram'dan tek tek fiyat yazmaktan yoruldunuz mu? Siteniz 7/24 otomatik satış yapsın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HİZMETLER --- */}
      <section id="hizmetler" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Hizmet 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="Web Tasarım" />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">Web Tasarım</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Kurumsal Kimliğinizi Yansıtın</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sadece şık değil, aynı zamanda satış odaklı siteler yapıyoruz. Müşteriniz sitenize girdiğinde güven duyar, telefon numaranızı kolayca bulur ve sizinle iletişime geçer.
              </p>
              <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Mobil Uyumlu Tasarım</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Hızlı Açılan Sayfalar</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Yönetim Paneli</li>
              </ul>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group">
                Fiyat Teklifi Alın <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>

          {/* Hizmet 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">E-Ticaret</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Ürünlerinizi Tüm Türkiye'ye Satın</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kars kaşarı, balı veya el sanatları... Ürünlerinizi sadece dükkana gelene değil, İstanbul'a, İzmir'e kargolayın. Basit yönetim paneliyle satışa başlayın.
              </p>
              <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Kolay Ürün Yükleme</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Kredi Kartı ile Ödeme Alma</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Kargo Entegrasyonu</li>
              </ul>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group">
                Paketleri İnceleyin <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="E-Ticaret" />
               </div>
            </div>
          </div>

           {/* Hizmet 3 */}
           <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2">
                   <img src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=800&q=80" className="rounded-xl w-full" alt="SEO" />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">Google & SEO</span>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Arandığında Bulunan Siz Olun</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigasyonda ve Google aramalarında en üstte çıkın. Turistler "Kars'ta ne yenir?" veya "Kars otelleri" yazdığında rakibinizi değil sizi görsün.
              </p>
              <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Google Harita Kaydı</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Arama Motoru Optimizasyonu</li>
                  <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-green-500" /> Yorum ve Yıldız Yönetimi</li>
              </ul>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2 group">
                Analiz İsteyin <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEDEN BİZ (Trust) --- */}
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
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><Globe /></div>
                     <h4 className="font-bold text-lg mb-2">Modern Teknoloji</h4>
                     <p className="text-sm text-slate-400">En son teknolojileri kullanıyoruz, siteniz asla eskimez.</p>
                 </div>
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                     <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-orange-500"><TrendingUp /></div>
                     <h4 className="font-bold text-lg mb-2">Sonuç Odaklı</h4>
                     <p className="text-sm text-slate-400">Sadece site yapmıyoruz, size para kazandıracak kurguyu yapıyoruz.</p>
                 </div>
             </div>
         </div>
      </section>

      {/* --- CTA (Call to Action) --- */}
      <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">İşletmenizi Büyütmeye Hazır Mısınız?</h2>
                <p className="text-orange-50 text-lg mb-10 max-w-2xl mx-auto relative z-10">Kaybedecek vaktiniz yok. Rakipleriniz dijitale geçti bile. Hemen arayın, kahve eşliğinde plan yapalım.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                    <a href={whatsappLink} className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition shadow-xl">
                    <MessageCircle size={24} />
                    WhatsApp'tan Yazın
                    </a>
                    <a href={phoneLink} className="bg-orange-700/50 border border-white/30 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition">
                    <Phone size={24} />
                    Hemen Arayın
                    </a>
                </div>
            </div>
          </div>
      </section>

      {/* --- FOOTER (DOLU) --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                {/* Kolon 1: Marka */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
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

                {/* Kolon 2: Hızlı Erişim */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Hızlı Erişim</h4>
                    <ul className="space-y-3">
                        <li><a href="#hero" className="text-slate-600 hover:text-orange-500 transition">Ana Sayfa</a></li>
                        <li><a href="#hizmetler" className="text-slate-600 hover:text-orange-500 transition">Hizmetlerimiz</a></li>
                        <li><a href="#avantajlar" className="text-slate-600 hover:text-orange-500 transition">Neden Biz?</a></li>
                        <li><a href="#" className="text-slate-600 hover:text-orange-500 transition">Referanslar</a></li>
                    </ul>
                </div>

                {/* Kolon 3: Hizmetler */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">Hizmetler</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-slate-600 hover:text-orange-500 transition">Web Tasarım</a></li>
                        <li><a href="#" className="text-slate-600 hover:text-orange-500 transition">E-Ticaret Paketleri</a></li>
                        <li><a href="#" className="text-slate-600 hover:text-orange-500 transition">Google Harita Kaydı</a></li>
                        <li><a href="#" className="text-slate-600 hover:text-orange-500 transition">Sosyal Medya Yönetimi</a></li>
                    </ul>
                </div>

                {/* Kolon 4: İletişim */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-4">İletişim</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-600">
                            <MapPin size={20} className="text-orange-500 shrink-0" />
                            <span>Merkez, Kars<br/>Türkiye</span>
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