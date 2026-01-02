import React, { useEffect } from 'react';
import { Button } from './Button';

interface AccessibilityProps {
  onBack: () => void;
}

export const AccessibilityStatement: React.FC<AccessibilityProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-neutral-900 text-gray-300 font-sans" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-8 text-sm px-6 py-2">
            חזרה לדף הבית
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">הצהרת נגישות</h1>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          
          <p>
            אנו ב-SHINI רואים חשיבות רבה בהנגשת האתר לאנשים עם מוגבלויות, ופועלים לאפשר חוויית שימוש שוויונית, מכובדת, נגישה ונוחה לכלל המשתמשים, לרבות אנשים עם מוגבלויות.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">עמידה בתקנים</h2>
            <p>
              אתר זה נבנה בהתאם להנחיות הנגישות של WCAG 2.1 ברמה AA ובהתאם לתקן הישראלי ת״י 5568.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">התאמות נגישות שבוצעו באתר</h2>
            <p className="mb-2">באתר בוצעו התאמות נגישות הכוללות בין היתר:</p>
            <ul className="list-disc list-inside space-y-1 mr-4">
              <li>אפשרות ניווט באמצעות מקלדת</li>
              <li>התאמה לקוראי מסך</li>
              <li>שימוש בניגודיות צבעים תקינה</li>
              <li>היררכיית כותרות תקינה</li>
              <li>טקסטים ברורים וקריאים</li>
              <li>אפשרות להגדלת טקסט</li>
              <li>כפתורים וקישורים בעלי משמעות ברורה</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">תפריט נגישות</h2>
            <p>
              באתר מותקן תפריט נגישות המאפשר התאמות נוספות בהתאם לצרכי המשתמש.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">חריגים</h2>
            <p>
              למרות מאמצינו להנגיש את כלל רכיבי האתר, ייתכן ויתגלו חלקים שטרם הונגשו באופן מלא. אנו ממשיכים לפעול לשיפור מתמיד של הנגישות באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">פרטי אחראי נגישות ויצירת קשר</h2>
            <p>
              אם נתקלתם בקושי בגלישה באתר או שיש לכם הערה בנושא נגישות, נשמח לקבל פנייה ולטפל בכך בהקדם.
            </p>
            <p className="mt-4 font-bold text-white">
              דוא״ל ליצירת קשר: <a href="mailto:shiniof770@gmail.com" className="text-[#C5A059] hover:underline">shiniof770@gmail.com</a>
            </p>
          </section>

          <div className="border-t border-gray-800 pt-6 mt-8 text-sm text-gray-500">
            <p>עדכון הצהרה</p>
            <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: 02/01/2026</p>
          </div>

        </div>
      </div>
    </section>
  );
};