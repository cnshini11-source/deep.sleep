import React from 'react';
import { Fingerprint, BrainCircuit, MoonStar } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      keyword: "פשוט.",
      title: "התאמה טבעית",
      description: "ללא מסכות מסורבלות וללא חוטים. העיצוב הארגונומי מתלבש בנוחות מתחת לסנטר ומאפשר הירדמות טבעית ומהירה.",
      icon: <Fingerprint strokeWidth={1.5} />
    },
    {
      num: "02",
      keyword: "חכם.",
      title: "זיהוי וטיפול",
      description: "חיישני ה-Smart EMS™ סורקים את הנשימה 100 פעמים בדקה. ברגע שמתחילה נחירה, המכשיר שולח איתות עדין לפתיחת נתיב האוויר.",
      icon: <BrainCircuit strokeWidth={1.5} />
    },
    {
      num: "03",
      keyword: "שקט.",
      title: "דממה בחדר",
      description: "הנחירות פוסקות באופן מיידי. אתם (ובני הזוג) זוכים לשינה עמוקה, רציפה ונטולת הפרעות עד הבוקר.",
      icon: <MoonStar strokeWidth={1.5} />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#C5A059] opacity-[0.03] blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-900 opacity-[0.05] blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6">
                איך זה עובד?
            </h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto rounded-full shadow-[0_0_15px_#C5A059]"></div>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-7xl mx-auto">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent"></div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center group">
                        
                        {/* Circle Icon Container */}
                        <div className="relative mb-8">
                            {/* Pulse Effect */}
                            <div className="absolute inset-0 bg-[#C5A059] rounded-full opacity-0 group-hover:animate-ping duration-1000"></div>
                            
                            {/* Main Circle */}
                            <div className="w-32 h-32 rounded-full bg-black border-2 border-[#C5A059]/30 flex items-center justify-center relative z-10 group-hover:border-[#C5A059] group-hover:shadow-[0_0_40px_rgba(197,160,89,0.2)] transition-all duration-500 ease-out">
                                <div className="text-[#C5A059] transform group-hover:scale-110 transition-transform duration-500">
                                    {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
                                </div>
                            </div>

                            {/* Number Bubble */}
                            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-neutral-800 border border-[#C5A059] text-[#C5A059] font-mono font-bold flex items-center justify-center text-sm z-20 shadow-lg group-hover:bg-[#C5A059] group-hover:text-black transition-colors duration-300">
                                {step.num}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-4 md:px-6 transition-transform duration-500 group-hover:-translate-y-2">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                                {step.keyword}
                            </h3>
                            <h4 className="text-lg font-medium text-gray-400 mb-4 border-b border-gray-800 pb-4 inline-block mx-auto w-full max-w-[200px]">
                                {step.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {step.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};