import React from 'react';
import { Power, Moon, Sun, Activity, Zap, Wind } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      
      {/* Deep Atmospheric Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- PART 1: THE USER EXPERIENCE --- */}
        <div className="mb-32">
            <div className="text-center mb-20">
                <span className="text-[#C5A059] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">החוויה שלך</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  פשוט. חכם. <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#C5A059] to-amber-700">שקט.</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent z-0"></div>

                {/* Step 1 */}
                <div className="relative flex flex-col items-center text-center group z-10">
                    <div className="w-36 h-36 flex items-center justify-center relative mb-8">
                         <div className="absolute inset-0 bg-[#C5A059]/5 rounded-full blur-2xl group-hover:bg-[#C5A059]/20 transition-all duration-700"></div>
                         <div className="w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center relative z-10 group-hover:border-[#C5A059] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                            <Power size={32} className="text-white group-hover:text-[#C5A059] transition-colors" />
                         </div>
                         <div className="absolute -top-4 -right-4 text-6xl font-black text-neutral-800 select-none opacity-50">01</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">הנחה והפעלה</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                      מניחים את המכשיר בנוחות מתחת לסנטר. רצועות הסיליקון נצמדות בעדינות ללא חוטים וללא הפרעות.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center text-center group z-10">
                    <div className="w-36 h-36 flex items-center justify-center relative mb-8">
                         <div className="absolute inset-0 bg-[#C5A059]/5 rounded-full blur-2xl group-hover:bg-[#C5A059]/20 transition-all duration-700"></div>
                         <div className="w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center relative z-10 group-hover:border-[#C5A059] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                            <Moon size={32} className="text-white group-hover:text-[#C5A059] transition-colors" />
                         </div>
                         <div className="absolute -top-4 -right-4 text-6xl font-black text-neutral-800 select-none opacity-50">02</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">הולכים לישון</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                      עוצמים עיניים ברוגע. המכשיר נכנס למצב המתנה חכם ומתחיל לפעול רק כשהוא מזהה שאתם ישנים.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group z-10">
                    <div className="w-36 h-36 flex items-center justify-center relative mb-8">
                         <div className="absolute inset-0 bg-[#C5A059]/5 rounded-full blur-2xl group-hover:bg-[#C5A059]/20 transition-all duration-700"></div>
                         <div className="w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center relative z-10 group-hover:border-[#C5A059] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                            <Sun size={32} className="text-white group-hover:text-[#C5A059] transition-colors" />
                         </div>
                         <div className="absolute -top-4 -right-4 text-6xl font-black text-neutral-800 select-none opacity-50">03</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors">בוקר חדש</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">
                      מתעוררים רעננים ואנרגטיים אחרי לילה רציף ושקט. מסירים בקלות ומחזירים לקופסת הטעינה.
                    </p>
                </div>
            </div>
        </div>


        {/* --- PART 2: THE TECHNOLOGY --- */}
        <div className="relative mt-32 pt-20 border-t border-white/5">
            
            <div className="text-center mb-24">
                 <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">הטכנולוגיה</span>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">מדע השינה השקטה</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                   מתחת לפני השטח, מערכת Smart EMS™ עובדת בדיוק מילי-שנייתי כדי להבטיח מעבר אוויר חופשי.
                 </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16 relative max-w-6xl mx-auto">
                
                {/* Tech Item 1 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full group-hover:bg-blue-500/40 transition-all duration-500"></div>
                        <Activity size={60} strokeWidth={1} className="text-blue-500 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">1. ניטור רציף</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      חיישנים ביומטריים דוגמים את קצב הנשימה ותדר הקול 100 פעמים בדקה כדי לזהות חריגות בזמן אמת.
                    </p>
                </div>

                {/* Tech Item 2 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-[#C5A059]/20 blur-[40px] rounded-full group-hover:bg-[#C5A059]/40 transition-all duration-500"></div>
                        <Zap size={70} strokeWidth={1} className="text-[#C5A059] relative z-10 drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">2. התערבות חכמה</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      ברגע הזיהוי, המכשיר שולח פולס עדין (בלתי מורגש) שמכווץ את שריר הגרון ומונע את צניחת החך.
                    </p>
                </div>

                {/* Tech Item 3 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-green-500/20 blur-[40px] rounded-full group-hover:bg-green-500/40 transition-all duration-500"></div>
                        <Wind size={60} strokeWidth={1} className="text-green-500 relative z-10 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">3. זרימה חופשית</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      נתיב האוויר נפתח מיידית, רמת החמצן בדם עולה, והשינה נמשכת ללא רעש וללא יקיצות מיותרות.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};