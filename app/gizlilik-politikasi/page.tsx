"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">

                {/* Geri Dön Butonu */}
                <a href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 mb-8 transition">
                    <ArrowLeft size={20} />
                    Ana Sayfaya Dön
                </a>

                <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        Site724 ("Biz", "Şirket") olarak, web sitemizi ziyaret eden kullanıcılarımızın ("Kullanıcı") gizliliğine önem veriyoruz. Bu metin, kişisel verilerinizin nasıl işlendiğini açıklar.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">1. Toplanan Veriler</h3>
                    <p>
                        Sitemiz üzerinden bizimle iletişime geçtiğinizde (WhatsApp, Telefon veya E-posta) paylaştığınız Ad, Soyad ve İletişim bilgileriniz, sadece size hizmet vermek amacıyla kullanılır.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">2. Çerezler (Cookies)</h3>
                    <p>
                        Web sitemizin performansını artırmak ve kullanıcı deneyimini iyileştirmek amacıyla basit çerezler kullanmaktayız. Bu çerezler kişisel veri barındırmaz ve tarayıcı ayarlarınızdan kapatılabilir.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">3. Veri Paylaşımı</h3>
                    <p>
                        Kişisel bilgileriniz, yasal zorunluluklar haricinde asla üçüncü şahıslarla veya reklam firmalarıyla paylaşılmaz. Kars esnafının sırrı bizim sırrımızdır.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">4. İletişim</h3>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için <strong>info@site724.com.tr</strong> adresinden bize ulaşabilirsiniz.
                    </p>

                    <p className="text-sm text-slate-400 mt-8 pt-8 border-t">
                        Son Güncelleme: 15 Ocak 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;