import React from 'react';
import { Cpu, Zap, Activity, Mic2, CheckCircle2, Info, Smartphone } from 'lucide-react';

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
    { label: "התאמה", text: "מקמו את המכשיר במרכז הסנטר מתחת ללסת להצמדה מלאה." },
    { label: "הפעלה", text: "לחצו לחיצה ארוכה (3 שניות) על כפתור ההפעלה." },
    { label: "שינה", text: "לכו לישון. המכשיר עובד אוטומטית ובשקט מוחלט." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none"></div>

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
                <div className="bg-gradient-to-br from-neutral-900/80 to-black border border-[#C5A059]/20 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Smartphone size={120} className="text-white" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-center md:text-right md:w-1/3">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">איך משתמשים נכון?</h3>
                            <p className="text-gray-400">פשוט, מהיר ואפקטיבי. פחות מ-30 שניות ואתם מוכנים לשינה שקטה.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-2/3">
                            {usageSteps.map((step, idx) => (
                                <div key={idx} className="bg-black/40 border border-white/5 p-6 rounded-2xl group hover:border-[#C5A059]/30 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-[#C5A059] text-black flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <h4 className="font-bold text-white text-lg">{step.label}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
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
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Orbit Rings */}
        <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute inset-12 border border-neutral-700/20 border-dashed rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
        
        {/* Central Component */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 bg-black rounded-[3rem] border border-neutral-800 shadow-[0_0_60px_rgba(59,130,246,0.1)] flex flex-col items-center justify-center z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black"></div>
            
            {/* Radar Scan */}
            <div className="absolute inset-0 opacity-20 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.4)_360deg)] animate-[spin_5s_linear_infinite]"></div>
            
            <Activity size={56} className="text-blue-400 relative z-20 group-hover:scale-110 transition-transform duration-700" />
            <div className="mt-4 flex flex-col items-center relative z-20">
                <span className="text-[11px] text-blue-500 font-mono tracking-widest uppercase">Smart EMS™</span>
                <span className="text-[9px] text-gray-500 font-mono mt-1">ACTIVE MONITORING</span>
            </div>
            
            {/* The Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_#3b82f6] animate-scan z-30"></div>
        </div>
        
        {/* External nodes */}
        <div className="absolute top-4 right-1/4 w-3 h-3 rounded-full bg-blue-500/40 animate-ping"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-purple-500/40 animate-ping [animation-delay:1.5s]"></div>
    </div>
);