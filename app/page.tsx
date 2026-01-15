import React from 'react';
import { Phone, MessageCircle, MapPin, TrendingUp, Clock, CheckCircle, Menu, X } from 'lucide-react';

const Site724Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // WhatsApp Linki (Senin numaran gelecek)
  const whatsappLink = "https://wa.me/905550000000";
  const phoneLink = "tel:05550000000";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">Site<span className="text-orange-500">724</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#hizmetler" className="text-slate-600 hover:text-orange-500 transition">Hizmetler</a>
              <a href="#avantajlar" className="text-slate-600 hover:text-orange-500 transition">Neden Biz?</a>
              <a href={whatsappLink} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-orange-500/30">
                Teklif Al
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4">
            <a href="#hizmetler" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Hizmetler</a>
            <a href="#avantajlar" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Neden Biz?</a>
            <a href={whatsappLink} className="block w-full text-center bg-orange-500 text-white py-3 rounded-lg font-bold">
              WhatsApp'tan Yaz
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-10 text-center lg:text-left">
            <div className="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              🚀 Kars Esnafına Özel Dijital Çözümler
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Siz Uyurken Bile <br/>
              <span className="text-orange-500">İşiniz Çalışsın</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              İşletmenizi dijital dünyaya taşıyoruz. Müşterileriniz sizi Google'da bulsun, Kars'a gelmeden rezervasyon yapsın, satışlarınız 7/24 devam etsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={whatsappLink} className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-xl shadow-orange-500/20">
                <MessageCircle size={20} />
                Hemen Teklif Alın
              </a>
              <a href="#hizmetler" className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 text-slate-600 px-8 py-4 rounded-full text-lg font-medium transition">
                Hizmetleri İncele
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle size={16} className="text-green-500" /> %100 Müşteri Memnuniyeti ve Yerel Destek
            </p>
          </div>

          {/* Image Content (3D Illustration Placeholder) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Buraya senin bulacağın Modern 3D görsel gelecek. Şimdilik placeholder. */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-video lg:aspect-square flex items-center justify-center group">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Growth" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS (Sorunlar) --- */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Müşteri Kaybetmekten Yorulmadınız mı?</h2>
            <p className="text-slate-600">Dijital dünyada yoksanız, her gün potansiyel cironuzun yarısını rakiplerinize kaptırıyorsunuz demektir.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Haritada Yoksunuz</h3>
              <p className="text-slate-600">Turistler "en yakın restoran" veya "otel" yazdığında sizi değil, yan komşunuzu görüyor.</p>
            </div>
             {/* Card 2 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Satışlar Düşük</h3>
              <p className="text-slate-600">Sadece dükkanın önünden geçenlere satış yapıyorsunuz. Oysa internette milyonlarca müşteri sizi bekliyor.</p>
            </div>
             {/* Card 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zaman Yetmiyor</h3>
              <p className="text-slate-600">Instagram'dan tek tek fiyat yazmaktan yoruldunuz mu? Siteniz 7/24 otomatik satış yapsın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HİZMETLER (ZIG-ZAG) --- */}
      <section id="hizmetler" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Hizmet 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               {/* Görsel Alanı - Web Tasarım Mockup */}
               <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl" alt="Web Tasarım" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold tracking-wide uppercase text-sm">Hizmet 01</span>
              <h3 className="text-3xl font-bold mt-2 mb-6 text-slate-900">Profesyonel Web Tasarım</h3>
              <p className="text-lg text-slate-600 mb-8">
                Sadece şık değil, aynı zamanda satış odaklı siteler yapıyoruz. Müşteriniz sitenize girdiğinde güven duyar, telefon numaranızı kolayca bulur ve sizinle iletişime geçer.
              </p>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:underline flex items-center gap-2">
                Fiyat Teklifi Alın &rarr;
              </a>
            </div>
          </div>

          {/* Hizmet 2 (Reverse) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold tracking-wide uppercase text-sm">Hizmet 02</span>
              <h3 className="text-3xl font-bold mt-2 mb-6 text-slate-900">E-Ticaret ve Online Satış</h3>
              <p className="text-lg text-slate-600 mb-8">
                Kars kaşarı, balı veya el sanatları... Ürünlerinizi sadece dükkana gelene değil, İstanbul'a, İzmir'e, tüm Türkiye'ye kargolayın. Basit yönetim paneliyle satışa başlayın.
              </p>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:underline flex items-center gap-2">
                E-Ticaret Paketlerini Gör &rarr;
              </a>
            </div>
            <div className="w-full lg:w-1/2">
               {/* Görsel Alanı - E-Ticaret */}
               <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl" alt="E-Ticaret" />
            </div>
          </div>

           {/* Hizmet 3 */}
           <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               {/* Görsel Alanı - Harita/SEO */}
               <img src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl" alt="SEO ve Harita" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-orange-500 font-bold tracking-wide uppercase text-sm">Hizmet 03</span>
              <h3 className="text-3xl font-bold mt-2 mb-6 text-slate-900">Google Haritalar ve SEO</h3>
              <p className="text-lg text-slate-600 mb-8">
                Navigasyonda ve Google aramalarında en üstte çıkın. Turistler "Kars'ta ne yenir?" veya "Kars otelleri" yazdığında sizi görsün.
              </p>
              <a href={whatsappLink} className="text-orange-600 font-bold hover:underline flex items-center gap-2">
                Analiz İsteyin &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <footer className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">İşletmenizi Büyütmeye Hazır Mısınız?</h2>
          <p className="text-slate-400 text-lg mb-10">Kaybedecek vaktiniz yok. Rakipleriniz dijitale geçti bile. Hemen arayın, kahve eşliğinde plan yapalım.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={whatsappLink} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition transform hover:scale-105">
              <MessageCircle size={24} />
              WhatsApp'tan Yazın
            </a>
            <a href={phoneLink} className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-3 transition transform hover:scale-105">
              <Phone size={24} />
              Hemen Arayın
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; 2026 Site724. Tüm Hakları Saklıdır. Kars'ın Dijital Gücü.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Site724Landing;