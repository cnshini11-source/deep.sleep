import React, { useEffect } from 'react';
import { Accessibility, Check, Mail, Phone } from 'lucide-react';
import { Button } from './Button';

interface AccessibilityProps {
  onBack: () => void;
}

export const AccessibilityStatement: React.FC<AccessibilityProps> = ({ onBack }) => {
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
          <div className="flex items-center gap-4 mb-4">
             <div className="bg-blue-600 p-3 rounded-full text-white">
                <Accessibility size={32} />
             </div>
             <h1 className="text-3xl md:text-5xl font-bold text-white">הצהרת נגישות</h1>
          </div>
          <p className="text-gray-400">אנו רואים חשיבות עליונה במתן שירות שוויוני לכלל הגולשים ובשיפור חווית הגלישה לבעלי מוגבלויות.</p>
        </div>

        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">רמת הנגישות באתר</h2>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                אנו משקיעים מאמצים רבים על מנת להפוך את האתר לנגיש לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.
                האתר נבנה בהתאם להוראות נגישות תכנים באינטרנט (WCAG) 2.0 ברמה AA.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">פעולות שבוצעו להנגשת האתר</h2>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 "תמיכה מלאה בניווט מקלדת",
                 "התאמה לקוראי מסך פופולריים",
                 "שימוש בצבעים בעלי ניגודיות גבוהה",
                 "אפשרות להגדלת פונטים (סרגל נגישות)",
                 "טקסט אלטרנטיבי לתמונות (Alt Text)",
                 "היררכיית כותרות ברורה ומסודרת",
                 "ביטול הבהובים ואנימציות מהירות",
                 "טפסים נגישים עם תוויות ברורות"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-neutral-800/30 p-4 rounded-xl border border-white/5">
                    <Check className="text-[#C5A059] shrink-0" size={20} />
                    <span className="text-gray-200">{item}</span>
                 </div>
               ))}
            </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-white mb-4">סרגל הנגישות</h2>
             <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800">
                <p>
                   באתר מותקן סרגל נגישות מתקדם (אייקון כחול בצד המסך). לחיצה על האייקון פותחת תפריט המאפשר:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400 mr-4">
                   <li>הגדלת טקסט במספר רמות</li>
                   <li>שינוי לניגודיות גבוהה / שחור-לבן</li>
                   <li>הדגשת קישורים וכותרות</li>
                   <li>שינוי לגופן קריא יותר</li>
                   <li>עצירת אנימציות</li>
                </ul>
             </div>
          </section>

          <section className="bg-neutral-800/40 p-8 rounded-3xl border border-[#C5A059]/20">
            <h2 className="text-2xl font-bold text-white mb-6">יצירת קשר ודיווח על תקלות</h2>
            <p className="mb-6 leading-relaxed">
              למרות מאמצנו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם הונגשו במלואם. 
              אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה.
              במידה ונתקלתם בבעיית נגישות, נשמח שתעדכנו אותנו כדי שנוכל לטפל בה בהקדם.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
               <a href="mailto:support@shini-sleep.co.il" className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                     <Mail size={20} />
                  </div>
                  <div>
                     <span className="block text-xs text-gray-500">דוא"ל רכז נגישות</span>
                     <span className="font-bold">support@shini-sleep.co.il</span>
                  </div>
               </a>
               
               <a href="tel:0538227778" className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors">
                  <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                     <Phone size={20} />
                  </div>
                  <div>
                     <span className="block text-xs text-gray-500">טלפון</span>
                     <span className="font-bold">053-8227778</span>
                  </div>
               </a>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};