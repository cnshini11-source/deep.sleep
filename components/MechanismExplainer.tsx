import React from 'react';
import { Cpu, Zap, Activity, Mic2, MousePointerClick, CheckCircle2, Info } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  const features = [
    {
      icon: <Mic2 size={24} />,
      title: "1. זיהוי ביומטרי",
      description: "המערכת משתמשת בחיישן הולכת עצם (Bone Conduction) מתקדם. בניגוד למיקרופון רגיל, הוא מזהה את הרטט הפיזי של מיתרי הקול שלכם בלבד, מה שמונע 'זיהוי שווא' מרעשי רקע או בן/בת הזוג.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: <Cpu size={24} />,
      title: "2. עיבוד AI בזמן אמת",
      description: "שבב ה-Smart EMS™ מנתח את תדר הנחירה 100 פעמים בשנייה. האלגוריתם קובע את עוצמת ההתערבות הנדרשת כדי להפסיק את הנחירה מבלי להעיר אתכם מהשינה העמוקה.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: <Zap size={24} />,
      title: "3. תיקון נתיב אוויר",
      description: "ברגע הזיהוי, המכשיר משחרר פולס TENS מיקרוסקופי. הפולס גורם לכיווץ עדין ולא מורגש של שרירי הגרון והלשון, מה שמרחיב את נתיב האוויר ומאפשר נשימה חרישית וחלקה.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      icon: <Activity size={24} />,
      title: "4. ניטור שינה עמוקה",
      description: "המערכת שומרת על רצף נשימתי תקין לאורך כל הלילה. התוצאה היא מעבר של הגוף לשלבי שינה עמוקה (REM) ארוכים יותר, המאפשרים התאוששות מלאה של המוח והשרירים.",
      color: "text-[#C5A059]",
      bg: "bg-[#C5A059]/10",
      border: "border-[#C5A059]/20",
    }
  ];

  const usageSteps = [
    { label: "הדבקה", text: "הצמידו את רפידת הג'ל למרכז הסנטר מתחת ללסת." },
    { label: "הפעלה", text: "לחצו לחיצה ארוכה (3 שניות) על כפתור ההפעלה." },
    { label: "שינה", text: "המכשיר יעבוד אוטומטית. ניתן להסיר בבוקר ולשטוף את הרפידה." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
            <span className="block text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2 animate-fade-in">
              המערכת שמאחורי
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
               Smart EMS™ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Core</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-6"></div>
        </div>

        {/* --- SYSTEM ARCHITECTURE --- */}
        <div className="relative max-w-6xl mx-auto">
            
            {/* Desktop Connectors (Visual Only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
               <path d="M 300 150 L 500 250" stroke="white" strokeWidth="1" strokeDasharray="5,5" fill="none" />
               <path d="M 800 150 L 600 250" stroke="white" strokeWidth="1" strokeDasharray="5,5" fill="none" />
               <path d="M 300 450 L 500 350" stroke="white" strokeWidth="1" strokeDasharray="5,5" fill="none" />
               <path d="M 800 450 L 600 350" stroke="white" strokeWidth="1" strokeDasharray="5,5" fill="none" />
            </svg>

            {/* Central Core & Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                
                {/* Right Side (Features 1 & 2) */}
                <div className="space-y-8 order-2 lg:order-1">
                   <FeatureCard feature={features[0]} align="left" />
                   <FeatureCard feature={features[1]} align="left" />
                </div>

                {/* Central Core Animation */}
                <div className="order-1 lg:order-2 flex justify-center">
                   <CoreAnimation />
                </div>

                {/* Left Side (Features 3 & 4) */}
                <div className="space-y-8 order-3">
                   <FeatureCard feature={features[2]} align="right" />
                   <FeatureCard feature={features[3]} align="right" />
                </div>
            </div>

            {/* --- HOW TO USE INTEGRATION --- */}
            <div className="mt-24 bg-black/40 border border-[#C5A059]/20 rounded-3xl p-8 backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 bg-[#C5A059]/10 p-4 rounded-2xl border border-[#C5A059]/30">
                        <Info className="text-[#C5A059]" size={32} />
                    </div>
                    <div className="flex-grow text-center md:text-right">
                        <h3 className="text-2xl font-bold text-white mb-2">איך משתמשים נכון?</h3>
                        <p className="text-gray-400 text-sm md:text-base">שלושה שלבים פשוטים לשינה שקטה מהלילה הראשון:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-2/3">
                        {usageSteps.map((step, idx) => (
                            <div key={idx} className="bg-neutral-900/60 p-4 rounded-xl border border-white/5 text-right">
                                <div className="flex items-center gap-2 mb-1 text-[#C5A059]">
                                    <CheckCircle2 size={16} />
                                    <span className="font-bold text-xs uppercase tracking-wider">{step.label}</span>
                                </div>
                                <p className="text-gray-300 text-xs leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any, align: 'left' | 'right' }> = ({ feature, align }) => (
    <div className={`
        relative overflow-hidden rounded-2xl p-6 w-full
        bg-neutral-900/40 border ${feature.border} backdrop-blur-sm
        hover:bg-neutral-900 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]
        group text-right
    `}>
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-gradient-to-br from-white to-transparent`}></div>
        
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${feature.bg} ${feature.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
            </div>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/5 mx-4"></div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
            {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">
            {feature.description}
        </p>
    </div>
);

const CoreAnimation = () => (
    <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
        {/* Visual Halo */}
        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] animate-pulse"></div>
        
        {/* Orbital Circles */}
        <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute inset-10 border border-neutral-700/30 border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
        
        {/* The Central Component */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 bg-black rounded-[2.5rem] border border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.1)] flex flex-col items-center justify-center z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black"></div>
            
            {/* The Scanning Radar Effect */}
            <div className="absolute inset-0 opacity-20 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.5)_360deg)] animate-[spin_4s_linear_infinite]"></div>
            
            <Activity size={48} className="text-blue-400 relative z-20 group-hover:scale-110 transition-transform duration-700" />
            <span className="text-[10px] text-blue-500/70 font-mono tracking-widest mt-2 relative z-20">SYSTEM ACTIVE</span>
            
            {/* The Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/40 shadow-[0_0_15px_#3b82f6] animate-scan z-30"></div>
        </div>
        
        {/* Pulsing Dots around the core */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-purple-500 animate-ping [animation-delay:1s]"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[#C5A059] animate-ping [animation-delay:2s]"></div>
    </div>
);
