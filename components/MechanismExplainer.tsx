import React from 'react';
import { Activity, Wind, ArrowRight, ShieldCheck, Droplets, Moon, CheckCircle, Sunrise } from 'lucide-react';

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
          
          {/* RIGHT COLUMN: HOW TO USE (Detailed) */}
          <div className="order-1 lg:order-1">
             <div className="bg-neutral-900/60 backdrop-blur-md border border-[#C5A059]/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-3xl font-bold text-white mb-8 border-r-4 border-[#C5A059] pr-4">
                  איך משתמשים?
                  <span className="block text-lg font-normal text-gray-400 mt-1">4 צעדים פשוטים לשינה שקטה</span>
                </h3>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full border border-neutral-700 flex items-center justify-center text-[#C5A059]">
                        <Droplets size={20} />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-1">1. הכנה קצרה</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           לפני השינה, צחצחו שיניים ושטפו את הפה. ודאו שהמכשיר נקי ויבש.
                        </p>
                     </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full border border-neutral-700 flex items-center justify-center text-[#C5A059]">
                        <Moon size={20} />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-1">2. הלבשה פשוטה</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           הכניסו את המכשיר לפה. המבנה הארגונומי שלו "מתלבש" על קשת השיניים באופן טבעי. אין צורך בכוח.
                        </p>
                     </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full border border-neutral-700 flex items-center justify-center text-[#C5A059]">
                        <CheckCircle size={20} />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-1">3. התאמה ופעולה</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           סגרו את הפה בעדינות. המכשיר ינחה את הלסת התחתונה למנח אופטימלי שמונע נחירות. זה קורה לבד.
                        </p>
                     </div>
                  </div>

                   {/* Step 4 */}
                   <div className="flex gap-4">
                     <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full border border-neutral-700 flex items-center justify-center text-[#C5A059]">
                        <Sunrise size={20} />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-white mb-1">4. בבוקר שאחרי</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           הוציאו את המכשיר, שטפו במים פושרים וסבון עדין, והחזירו לקופסה המגנטית עד הלילה הבא.
                        </p>
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
                <span className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">PATENTED EMA® TECH</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              המדע שמאחורי <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#C5A059] to-[#E6C88B]">השקט שלכם</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed border-r-4 border-[#C5A059] pr-6 bg-black/40 p-4 rounded-l-xl backdrop-blur-sm">
              ה-Shini Deep Sleep Pro פועל בטכנולוגיית ייצוב מתקדמת המבטיחה נתיב אוויר פתוח לאורך כל הלילה, ללא התערבות אקטיבית.
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
                  <h3 className="text-xl font-bold text-white mb-2">הבעיה הפיזיולוגית</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    בשינה עמוקה, הלסת צונחת אחורה וחוסמת את האוויר. זהו הגורם העיקרי לנחירות ולעייפות כרונית.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6 items-start group">
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-black/50 backdrop-blur-md border border-[#C5A059] rounded-full items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.2)] z-10">
                  <ArrowRight size={24} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#C5A059] mb-2">הפתרון: קידום מיקרוסקופ</h3>
                  <p className="text-gray-300 leading-relaxed text-sm bg-neutral-900/80 backdrop-blur-sm p-4 rounded-xl border border-[#C5A059]/20 shadow-lg">
                    המכשיר מקדם את הלסת ב-1-2 מ"מ בלבד. זה מספיק כדי למתוח את הרקמות, לפתוח את הנתיב ולהשתיק את הנחירות.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6 items-start group">
                <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-black/50 backdrop-blur-md border border-neutral-800 group-hover:border-blue-400/50 transition-colors rounded-full items-center justify-center z-10">
                  <Wind size={24} className="text-blue-400/70 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">התוצאה: שקט מוחלט</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    אוויר נכנס בחופשיות. רמת החמצן עולה, השינה הופכת רציפה ועמוקה יותר, ואתם קמים רעננים.
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