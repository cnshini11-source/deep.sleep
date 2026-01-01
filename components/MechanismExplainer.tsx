import React from 'react';
import { Cpu, Zap, Activity, Mic2, CheckCircle2, Smartphone } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  const features = [
    {
      icon: <Mic2 size={24} />,
      title: "זיהוי ביומטרי מדויק",
      description: "חיישן הולכת עצם מזהה רטט ממיתרי הקול בלבד. בניגוד לאפליקציות, המערכת לא מושפעת מרעשי רקע או מנחירות של בן/בת הזוג.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: <Cpu size={24} />,
      title: "עיבוד AI בזמן אמת",
      description: "שבב ה-Smart EMS™ מנתח את עומק הנחירה ושולח פולס מותאם אישית כדי להפסיק אותה מבלי להעיר אתכם.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: <Zap size={24} />,
      title: "פולס EMS עדין",
      description: "תיקון נשימתי באמצעות פולס תת-עורי המכווץ בעדינות את שרירי הגרון, פותח את נתיב האוויר ומפסיק את הרעש מיד.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      icon: <Activity size={24} />,
      title: "ניטור שינה עמוקה",
      description: "המערכת שומרת עליכם במצב של שינה רציפה (REM), מונעת 'דום נשימה' קל ומאפשרת להתעורר רעננים באמת.",
      color: "text-[#C5A059]",
      bg: "bg-[#C5A059]/10",
      border: "border-[#C5A059]/20",
    }
  ];

  const usageSteps = [
    { 
      label: "התאמה מושלמת", 
      text: "הצמידו את המכשיר למרכז הסנטר (מתחת ללסת) באמצעות המדבקה המוליכה. ודאו שהעור נקי ויבש למגע אופטימלי וזיהוי מדויק של רטט מיתרי הקול." 
    },
    { 
      label: "הפעלה חכמה", 
      text: "לחצו לחיצה ארוכה (3 שניות) על כפתור ההפעלה עד להופעת חיווי האור. המערכת תבצע כיול קצר ותכנס למצב המתנה חכם באופן מיידי." 
    },
    { 
      label: "שינה עמוקה", 
      text: "פשוט צוללים לעולם החלומות. המכשיר ינטר את הנשימה בזמן אמת, יזהה נחירות ויפסיק אותן בעדינות מבלי שתהיו מודעים לכך." 
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Tech Background Image */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-neutral-950/90 z-10"></div>
         <img 
            src="https://i.imgur.com/nSd9XBi.jpeg" 
            alt="" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
            <span className="block text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2 animate-fade-in">
              הטכנולוגיה שבפנים
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
               Smart EMS™ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Core</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">המערכת המתקדמת בעולם להפסקת נחירות ללא התערבות כירורגית.</p>
        </div>

        {/* Orbital Structure */}
        <div className="relative max-w-6xl mx-auto">
            
            {/* Desktop Connectors (SVG) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none">
                    <path d="M 350 150 C 450 150, 450 250, 500 300" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 650 150 C 550 150, 550 250, 500 300" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 350 450 C 450 450, 450 350, 500 300" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 650 450 C 550 450, 550 350, 500 300" stroke="white" strokeWidth="1" strokeDasharray="4,4" />
                </svg>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                
                {/* Right Cards */}
                <div className="flex flex-col gap-8 w-full lg:w-1/3">
                    <FeatureCard feature={features[0]} />
                    <FeatureCard feature={features[1]} />
                </div>

                {/* Central Animation */}
                <div className="flex-shrink-0">
                    <CoreAnimation />
                </div>

                {/* Left Cards */}
                <div className="flex flex-col gap-8 w-full lg:w-1/3">
                    <FeatureCard feature={features[2]} />
                    <FeatureCard feature={features[3]} />
                </div>
            </div>

            {/* Integration Instructions */}
            <div className="mt-24 md:mt-32">
                <div className="relative border border-[#C5A059]/30 rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    
                    {/* NEW Background Image with Overlay for "How To Use" */}
                    <div className="absolute inset-0 z-0">
                         <img 
                           src="https://i.imgur.com/nSd9XBi.jpeg" 
                           alt="Instruction Background" 
                           className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                         />
                         {/* Gradient Overlay for text readability */}
                         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
                    </div>

                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none z-10">
                        <Smartphone size={120} className="text-white" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-10">
                        <div className="text-center md:text-right md:w-1/3 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                                איך משתמשים <span className="text-[#C5A059]">נכון?</span>
                            </h3>
                            <p className="text-gray-400 text-lg">פשוט, מהיר ואפקטיבי. פחות מ-30 שניות ואתם מוכנים לשינה שקטה ואיכותית.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
                            {usageSteps.map((step, idx) => (
                                <div key={idx} className="relative bg-black/60 border border-white/5 p-6 rounded-2xl group hover:border-[#C5A059]/50 hover:bg-neutral-900/80 transition-all duration-500 overflow-hidden flex flex-col">
                                    {/* Big Number Background */}
                                    <div className="absolute -bottom-4 -left-4 text-9xl font-black text-[#C5A059]/5 select-none pointer-events-none group-hover:text-[#C5A059]/10 transition-colors">
                                        {idx + 1}
                                    </div>

                                    <div className="flex items-center gap-3 mb-4 relative z-10">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8E7036] text-black flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                                            {idx + 1}
                                        </div>
                                        <h4 className="font-bold text-white text-lg">{step.label}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-light group-hover:text-gray-200 transition-colors">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any }> = ({ feature }) => (
    <div className={`
        relative overflow-hidden rounded-3xl p-6 w-full
        bg-neutral-900/40 border ${feature.border} backdrop-blur-md
        hover:bg-neutral-900 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.02)]
        group text-right
    `}>
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl ${feature.bg} ${feature.color} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
            </div>
            <CheckCircle2 size={16} className="text-white/10 group-hover:text-[#C5A059]/40 transition-colors" />
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
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] animate-pulse"></div>
        
        {/* Orbit Rings */}
        <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_60s_linear_infinite]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
        </div>
        <div className="absolute inset-8 border border-neutral-700/30 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Central Component */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neutral-800 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center z-10 overflow-hidden group bg-black">
            
            {/* Usage Image */}
            <div className="absolute inset-0">
               <img 
                 src="https://i.imgur.com/nSd9XBi.jpeg" 
                 alt="Smart EMS In Use" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20"></div>
            </div>
            
            {/* Tech UI Overlays */}
            <div className="absolute inset-0 opacity-30 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.3)_360deg)] animate-[spin_4s_linear_infinite]"></div>
            
            {/* Center Status */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                 <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-500/30">
                    <Activity size={14} className="text-blue-400 animate-pulse" />
                    <span className="text-[10px] text-blue-100 font-mono font-bold tracking-widest uppercase">
                        Monitoring
                    </span>
                 </div>
            </div>
        </div>
    </div>
);