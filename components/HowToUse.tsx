import React from 'react';

export const HowToUse: React.FC = () => {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">איך משתמשים במכשיר</h2>
          
          <div className="bg-[#0A0A0A] border border-[#C5A059]/40 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(197,160,89,0.08)] relative overflow-hidden group hover:border-[#C5A059]/60 transition-colors duration-300">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              <span className="font-bold text-[#C5A059] block mb-4 text-2xl">איך משתמשים:</span>
              מניחים את המכשיר בפה לפני השינה, מצמידים בעדינות לשיניים והוא מתמקם לבד. לא צריך להפעיל שום דבר – פשוט הולכים לישון והוא עושה את העבודה במהלך הלילה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};