"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">

                <a href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 mb-8 transition">
                    <ArrowLeft size={20} />
                    Ana Sayfaya Dön
                </a>

                <h1 className="text-3xl font-bold mb-8">Kullanım Şartları</h1>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        Site724.com.tr web sitesini ziyaret ederek aşağıdaki şartları kabul etmiş sayılırsınız.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">1. Hizmet Kapsamı</h3>
                    <p>
                        Site724, yerel işletmelere web tasarım, e-ticaret altyapısı ve dijital pazarlama danışmanlığı hizmeti verir. Sitede yer alan bilgiler bilgilendirme amaçlıdır.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">2. Fikri Mülkiyet</h3>
                    <p>
                        Bu sitedeki tüm tasarımlar, yazılar, görseller ve kod yapıları Site724'e aittir. İzinsiz kopyalanamaz veya ticari amaçla kullanılamaz.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">3. Sorumluluk Reddi</h3>
                    <p>
                        Site724, web sitesindeki olası teknik aksaklıklardan veya bilgi yanlışlıklarından sorumlu tutulamaz. Ancak en güncel ve doğru bilgiyi sunmak için 7/24 çalışırız.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6">4. Değişiklik Hakkı</h3>
                    <p>
                        Site724, bu şartları önceden bildirmeksizin değiştirme hakkını saklı tutar.
                    </p>

                    <p className="text-sm text-slate-400 mt-8 pt-8 border-t">
                        Son Güncelleme: 15 Ocak 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;