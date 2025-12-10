import React from 'react';
import { Wind, EyeOff, Zap, Plus } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">איך הקסם קורה?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            השילוב המדעי שיוצר את השינה המושלמת
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 relative">
            
            {/* Step 1 */}
            <div className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-[#C5A059]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-4xl font-black text-[#C5A059]/10 group-hover:text-[#C5A059]/20 transition-colors">01</div>
              <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
                <Wind size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">שיפור זרימת האוויר</h3>
              <p className="text-gray-400 leading-relaxed">
                בזמן שינה, שרירי הגרון רפים וחוסמים את המעבר. המכשיר שומר על נתיב אוויר פתוח, מפחית רעידות (נחירות) ומאפשר חמצן רציף למוח.
              </p>
            </div>

            {/* Connecting Plus Sign (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 bg-black border border-neutral-800 rounded-full text-[#C5A059] shadow-lg">
              <Plus size={24} />
            </div>

            {/* Step 2 */}
            <div className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 hover:border-[#C5A059]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-4xl font-black text-[#C5A059]/10 group-hover:text-[#C5A059]/20 transition-colors">02</div>
              <div className="w-14 h-14 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
                <EyeOff size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">ניתוק מהעולם החיצון</h3>
              <p className="text-gray-400 leading-relaxed">
                כיסוי העיניים מבטיח 100% חושך. זהו איתות ביולוגי קריטי למוח להפריש מלטונין (הורמון השינה), מה שמוביל להירדמות מהירה יותר ושינה עמוקה.
              </p>
            </div>

            {/* Step 3 - Full Width / Centered */}
            <div className="md:col-span-2 mt-2">
              <div className="group relative bg-gradient-to-r from-neutral-900/60 to-black border border-[#C5A059]/30 rounded-2xl p-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-right hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] transition-all duration-500">
                 <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#C5A059] to-[#8A6D3B] rounded-2xl rotate-3 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                      <Zap size={40} className="text-black" />
                    </div>
                 </div>
                 
                 <div className="flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                       <span className="bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold px-3 py-1 rounded-full border border-[#C5A059]/20">התוצאה</span>
                       <h3 className="text-2xl md:text-3xl font-bold text-white">אפקט הסינרגיה הכפול</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                       כשמשלבים נשימה שקטה עם חושך מוחלט, הגוף נכנס למצב 'Deep Sleep' (שינה עמוקה) ביעילות הגבוהה ב-40% מהרגיל. אתם לא רק מפסיקים לנחור – אתם מתעוררים עם אנרגיה חדשה לגמרי.
                    </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};