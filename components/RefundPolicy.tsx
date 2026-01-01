import React, { useEffect } from 'react';
import { PackageX, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface RefundPolicyProps {
  onBack: () => void;
}

export const RefundPolicy: React.FC<RefundPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-12 border-b border-gray-800 pb-8">
          <Button variant="outline" onClick={onBack} className="mb-8 text-sm px-6 py-2">
            חזרה לדף הבית
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">מדיניות החזרים וביטולים</h1>
          <p className="text-[#C5A059]">פשוט, הוגן ושקוף.</p>
        </div>

        <div className="space-y-12">
          
          <div className="bg-black/50 p-8 rounded-3xl border border-[#C5A059]/30 shadow-[0_0_30px_rgba(197,160,89,0.05)]">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#C5A059]/10 p-4 rounded-full text-[#C5A059] shrink-0">
                    <PackageX size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">תנאי הסף להחזרה</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        אנחנו מכבדים את החוק ואת הלקוחות שלנו. ניתן לבטל עסקה ולהחזיר את המוצר תוך <strong>14 יום</strong> מקבלת המשלוח.
                    </p>
                    <div className="mt-4 bg-red-900/20 border border-red-500/30 p-4 rounded-xl flex gap-3 items-start">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                        <p className="text-red-200 font-medium">
                            חשוב מאוד: עקב אופיו של המוצר (מוצר היגייני הבא במגע עם הפה והפנים), 
                            <span className="underline decoration-red-500 font-bold mx-1">לא ניתן להחזיר מוצר שאריזתו נפתחה</span> 
                            או שנעשה בו שימוש כלשהו.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="text-[#C5A059]" />
                איך זה עובד?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-800/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="font-bold text-white text-lg mb-2">1. בדיקת האריזה</h4>
                    <p>ודאו שמדבקת הסגירה (החותם) על הקופסה שלמה ולא נקרעה. אם הקופסה סגורה הרמטית כפי שהגיעה - ניתן להחזיר.</p>
                </div>
                <div className="bg-neutral-800/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="font-bold text-white text-lg mb-2">2. יצירת קשר</h4>
                    <p>שלחו לנו הודעה לווצאפ או למייל עם פרטי ההזמנה, וכתבו שברצונכם להחזיר את המוצר.</p>
                </div>
                <div className="bg-neutral-800/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="font-bold text-white text-lg mb-2">3. משלוח חזרה</h4>
                    <p>אתם שולחים אלינו את החבילה (עלות המשלוח חזרה חלה על הלקוח), או מתאמים מולנו שליח לאיסוף (בתשלום).</p>
                </div>
                <div className="bg-neutral-800/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="font-bold text-white text-lg mb-2">4. קבלת החזר כספי</h4>
                    <p>ברגע שהמוצר יגיע אלינו ונבדוק שהוא סגור וחדש, נזכה אתכם במלוא הסכום (בניכוי דמי ביטול של 5% או 100 ₪ - הנמוך מביניהם, על פי חוק).</p>
                </div>
            </div>
          </section>

          <section className="bg-neutral-800/20 p-6 rounded-2xl border border-neutral-800">
             <div className="flex items-center gap-3 mb-4">
                 <RefreshCw className="text-gray-400" />
                 <h3 className="text-xl font-bold text-white">מוצר פגום?</h3>
             </div>
             <p>
                 במידה וקיבלתם מוצר פגום או תקול, האחריות עלינו! צרו איתנו קשר מיד עם קבלת החבילה, שלחו תמונה/וידאו של התקלה, ונדאג להחליף לכם למוצר חדש ללא עלות נוספת.
             </p>
          </section>

        </div>
        
        <div className="mt-12 text-center">
            <Button onClick={onBack} className="w-full md:w-auto px-12">
                הבנתי, תודה
            </Button>
        </div>

      </div>
    </section>
  );
};