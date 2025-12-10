import React from 'react';
import { Activity, Wind, Zap, ShieldCheck, Droplets, Moon, CheckCircle, Sunrise } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-[900px] flex items-center">
      
      {/* Integrated Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/oWgNIg2.png" 
          alt="Medical simulation of airway" 
          className="w-full h-full object-cover object-left md:object-center opacity-40 mix-blend-overlay md:mix-blend-normal"
        />
        
        {/* Dark Grey/Black Overlay Tint */}
        <div className="absolute inset-0 bg-neutral-900/70 mix-blend-multiply"></div>

        {/* Smooth Vignette & Edge Blending */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>
        
        {/* Gradient Fade Top/Bottom for section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* RIGHT COLUMN: HOW TO USE (Redesigned) */}
          <div className="order-1 lg:order-1">
             <div className="relative">
                {/* Section Header */}
                <div className="mb-10 border-r-4 border-[#C5A059] pr-6">
                   <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                     המדריך לשינה שקטה
                   </h3>
                   <p className="text-[#C5A059] text-lg font-medium tracking-wide">
                     4 צעדים פשוטים לשימוש במכשיר ה-EMS
                   </p>
                </div>

                {/* Steps Cards */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="group relative bg-black/40 backdrop-blur-md border border-white/5 hover:border-[#C5A059]/40 rounded-2xl p-5 transition-all duration-300 hover:bg-black/60 hover:translate-x-[-8px]">
                     <div className="flex gap-5 items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                           <Droplets size={22} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">1. הכנה קצרה</h4>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              לפני השינה, צחצחו שיניים ושטפו את הפה. ודאו שהמכשיר נקי ויבש לחלוטין.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Step 2 */}
                  <div className="group relative bg-black/40 backdrop-blur-md border border-white/5 hover:border-[#C5A059]/40 rounded-2xl p-5 transition-all duration-300 hover:bg-black/60 hover:translate-x-[-8px]">
                     <div className="flex gap-5 items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                           <Moon size={22} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">2. הנחה בפה</h4>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              הניחו את המכשיר בפה. העיצוב הארגונומי מתיישב טבעית על השיניים ללא צורך בכוח.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Step 3 */}
                  <div className="group relative bg-black/40 backdrop-blur-md border border-white/5 hover:border-[#C5A059]/40 rounded-2xl p-5 transition-all duration-300 hover:bg-black/60 hover:translate-x-[-8px]">
                     <div className="flex gap-5 items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                           <Zap size={22} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">3. פעולה אוטומטית</h4>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              המכשיר יזהה לבד את הנחירות ויפעיל גירוי עדין רק בעת הצורך במהלך הלילה.
                           </p>
                        </div>
                     </div>
                  </div>

                   {/* Step 4 */}
                   <div className="group relative bg-black/40 backdrop-blur-md border border-white/5 hover:border-[#C5A059]/40 rounded-2xl p-5 transition-all duration-300 hover:bg-black/60 hover:translate-x-[-8px]">
                     <div className="flex gap-5 items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-700 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                           <Sunrise size={22} />
                        </div>
                        <div>
                           <h4 className="text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">4. שגרת בוקר</h4>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              בבוקר, שטפו את המכשיר במים וסבון, יבשו אותו והחזירו לקופסה המגנטית.
                           </p>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>

          {/* LEFT COLUMN: SCIENCE (Existing) */}
          <div className="order-2 lg:order-2 text-right">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <ShieldCheck size={14} className="text-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">SMART EMS™ TECHNOLOGY</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              המדע שמאחורי <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#C5A059] to-[#E6C88B]">השקט שלכם</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed border-r-4 border-[#C5A059] pr-6 bg-black/40 p-4 rounded-l-xl backdrop-blur-sm">
              מכשיר EMS מפחית נחירות באמצעות גירוי חשמלי עדין לשרירי הלשון והגרון במהלך השינה. הפולסים מחזקים את טונוס השרירים, שומרים על פתיחות דרכי האוויר, ומפחיתים את הרטט שגורם לנחירה.
            </p>

            <div className="space-y-10 relative">
              {/* Connecting Line */}
              <div className="absolute top-4 right-[1.65rem] w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-[#C5A059] to-transparent opacity-20 hidden md:block"></div>

              {/* Step 1 */}
              <div className="relative flex gap-6 items-start group">
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-black/50 backdrop-blur-md border border-neutral-800 group-hover:border-[#C5A059]/50 transition-colors rounded-full items-center justify-center z-10">
                  <Activity size={24} className="text-gray-500 group-hover:text-[#C5A059] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">הבעיה: רפיון שרירים</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    בזמן שינה עמוקה, שרירי הגרון נרפים יתר על המידה וצונחים, מה שחוסם את מעבר האוויר ויוצר את הנחירה.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 items-start group">
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-black/50 backdrop-blur-md border border-[#C5A059] rounded-full items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] z-10">
                  <Zap size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#C5A059] mb-2">הפתרון: גירוי EMS חכם</h3>
                  <p className="text-gray-300 leading-relaxed text-sm bg-neutral-900/80 backdrop-blur-sm p-4 rounded-xl border border-[#C5A059]/20 shadow-lg">
                    המכשיר מזהה את הנחירה ושולח פולסים עדינים המהדקים את השרירים הרפויים ופותחים את הנתיב מחדש.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 items-start group">
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-black/50 backdrop-blur-md border border-neutral-800 group-hover:border-blue-400/50 transition-colors rounded-full items-center justify-center z-10">
                  <Wind size={24} className="text-blue-400/70 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">התוצאה: נשימה חלקה</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    נתיב האוויר נשמר פתוח ויציב, הרטט מופסק, ואתם זוכים לשינה רציפה ושקטה ללא הפרעות.
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