import React from 'react';
import { Activity, Wind, Zap, ShieldCheck } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden flex items-center min-h-[70vh]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/oWgNIg2.png" 
          alt="Medical simulation of airway" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-5xl mx-auto">
            
            {/* Science Content - Centered Layout */}
            <div className="space-y-16">
                {/* Badge & Title */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                        <ShieldCheck size={14} className="text-[#C5A059]" />
                        <span className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">SMART EMS™ TECHNOLOGY</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    המדע שמאחורי <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#C5A059] to-[#E6C88B]">השקט שלכם</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                    מכשיר EMS מפחית נחירות באמצעות גירוי חשמלי עדין לשרירי הלשון והגרון. הפולסים מחזקים את טונוס השרירים ושומרים על נתיב אוויר פתוח באופן אקטיבי במהלך השינה.
                    </p>
                </div>

                {/* Science Steps Grid */}
                <div className="grid md:grid-cols-3 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent z-0"></div>

                    {/* Item 1 */}
                    <div className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-[#C5A059]/30 transition-all duration-300 hover:-translate-y-1 relative z-10 group">
                        <div className="w-16 h-16 rounded-full bg-[#2A2A2A] flex items-center justify-center border border-white/10 mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                            <Activity size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-3">01. זיהוי</h3>
                            <p className="text-gray-400 leading-relaxed">חיישנים ביומטריים מדויקים מזהים את תדר הקול והרטט של הנחירה בזמן אמת.</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-neutral-900/80 backdrop-blur-xl p-8 rounded-2xl border border-[#C5A059]/40 shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-300 hover:-translate-y-1 md:-mt-6 relative z-10 group">
                        <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 flex items-center justify-center border border-[#C5A059] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                            <Zap size={28} className="text-[#C5A059]" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#C5A059] mb-3">02. טיפול</h3>
                            <p className="text-gray-300 leading-relaxed">המכשיר שולח פולס עדין (שאינו מעיר) לכיווץ השריר ופתיחה מיידית של דרכי האוויר.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-[#C5A059]/30 transition-all duration-300 hover:-translate-y-1 relative z-10 group">
                        <div className="w-16 h-16 rounded-full bg-[#2A2A2A] flex items-center justify-center border border-white/10 mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                            <Wind size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-3">03. תוצאה</h3>
                            <p className="text-gray-400 leading-relaxed">זרימת אוויר חלקה, הפסקת הנחירות ושינה רציפה ועמוקה ללא יקיצות.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};