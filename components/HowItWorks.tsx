import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">למה זה עובד?</h2>
          <p className="text-gray-400">הטכנולוגיה מאחורי השינה השקטה שלך</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
          
          <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border-r-4 border-[#C5A059] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#C5A059] text-black font-bold px-3 py-1 text-sm rounded-bl-lg">01</div>
            <h3 className="text-2xl font-bold mb-4 text-white">שיפור זרימת האוויר</h3>
            <p className="text-gray-400">
              בזמן השינה, השרירים בגרון רפים וחוסמים את דרכי האוויר. המכשיר שומר על נתיב אוויר פתוח ומאפשר נשימה חלקה ושקטה.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border-r-4 border-[#C5A059] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#C5A059] text-black font-bold px-3 py-1 text-sm rounded-bl-lg">02</div>
            <h3 className="text-2xl font-bold mb-4 text-white">חסימת אור מוחלטת</h3>
            <p className="text-gray-400">
              כיסוי העיניים הייחודי מבטיח חושך מוחלט, מה שמאותת למוח להפריש מלטונין ומאפשר כניסה מהירה לשינה עמוקה (REM).
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border-r-4 border-[#C5A059] relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-[#C5A059] text-black font-bold px-3 py-1 text-sm rounded-bl-lg">03</div>
            <h3 className="text-2xl font-bold mb-4 text-white">סינרגיה מושלמת</h3>
            <p className="text-gray-400">
              שילוב של פתרון פיזי לנחירות ופתרון סביבתי לשינה (חושך) יוצר אפקט כפול שמשפר את איכות השינה בעשרות אחוזים.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};