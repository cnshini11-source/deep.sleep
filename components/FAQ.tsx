import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "איך המכשיר מצליח להפסיק את הנחירה מבלי להעיר אותי?",
    answer: "זה הקסם של טכנולוגיית ה-Smart EMS™. המכשיר מזהה את תדר הנחירה ושולח פולס חשמלי עדין מאוד (Micro-Pulse). העוצמה מכוילת בדיוק לרמה שגורמת לשרירי הגרון להתכווץ מעט ולפתוח את נתיב האוויר, אך היא נמוכה מסף העירור של המוח. רוב המשתמשים מדווחים שהם כלל לא מרגישים את המכשיר במהלך הלילה, אך מתעוררים רעננים בהרבה בבוקר בזכות זרימת חמצן רציפה."
  },
  {
    question: "האם המכשיר מתאים למבנה הפנים שלי? (התאמה אוניברסלית)",
    answer: "בהחלט. המכשיר תוכנן בצורה ארגונומית גמישה שמתאימה לכל מבנה פנים, סנטר ולסת. בזכות העיצוב הקומפקטי והמשקל הקל שלו, הוא מתמקם בצורה טבעית מתחת לסנטר ומבטיח מגע מקסימלי עם העור לזיהוי רטט מדויק. הוא מתאים לגברים ונשים כאחד, בכל גיל ובכל מבנה גוף."
  },
  {
    question: "תוך כמה זמן המשלוח מגיע?",
    answer: "אנחנו מבינים שאתם מחכים להתחיל לישון בשקט. לכן, אנחנו מוציאים את המשלוחים בשיטת 'אקספרס' עד פתח הדלת. זמן האספקה הממוצע הוא בין 2 ל-4 ימי עסקים לכל רחבי הארץ."
  },
  {
    question: "תוך כמה זמן ארגיש בשינוי באיכות השינה?",
    answer: "שיפור בנחירה עצמה קורה לרוב כבר מהלילה הראשון. עם זאת, איכות השינה הכללית (הרגשת הרעננות בבוקר) משתפרת משמעותית לאחר 3-5 לילות של שימוש רצוף. לגוף לוקח זמן קצר להתרגל למכשיר ולעבור למצב של 'שינה עמוקה ללא הפרעות'."
  },
  {
    question: "מה קורה אם המכשיר לא עוזר לי?",
    answer: "אנחנו כאן כדי לוודא שאתם מרוצים. המערכת שלנו כוללת 3 פתרונות משלימים בערכה אחת (מכשיר חכם, פותחי נשימה וכיסוי 3D) כדי להבטיח מענה רחב ככל הניתן. אם יש לכם קושי בתפעול או שאלות נוספות, שירות הלקוחות שלנו בווצאפ זמין לכם לליווי אישי עד להשגת התוצאה הרצויה."
  },
  {
    question: "איך מטעינים את המכשיר וכמה זמן מחזיקה הסוללה?",
    answer: "המכשיר מגיע עם כבל טעינה USB-C מהיר. טעינה מלאה אורכת כשעתיים ומספיקה ל-2 עד 3 לילות של שימוש רצוף. נורית חיווי על המכשיר תסמן לך מתי הסוללה חלשה."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C5A059]/10 text-[#C5A059] mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">שאלות נפוצות</h2>
          <p className="text-gray-400 text-lg">כל מה שצריך לדעת כדי להתחיל לישון בשקט</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`group border border-neutral-800 rounded-2xl transition-all duration-500 ${
                openIndex === index 
                  ? 'bg-neutral-900/50 border-[#C5A059]/50 shadow-[0_0_30px_rgba(197,160,89,0.05)]' 
                  : 'bg-black hover:border-neutral-700'
              }`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                onClick={() => toggleIndex(index)}
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  openIndex === index ? 'text-[#C5A059]' : 'text-gray-200 group-hover:text-white'
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <div className="bg-[#C5A059] text-black rounded-full p-1"><Minus size={18} /></div>
                  ) : (
                    <div className="bg-neutral-800 text-gray-400 rounded-full p-1 group-hover:bg-neutral-700 group-hover:text-white"><Plus size={18} /></div>
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-8 text-gray-400 leading-relaxed text-lg border-t border-neutral-800/50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
           <h3 className="text-xl font-bold text-white mb-2">יש לכם שאלה נוספת?</h3>
           <p className="text-gray-400 mb-6">צוות המומחים שלנו זמין עבורכם לייעוץ אישי בווצאפ</p>
           <a 
             href="https://wa.me/972538227778" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
           >
             צ'אט מהיר בווצאפ
           </a>
        </div>
      </div>
    </section>
  );
};