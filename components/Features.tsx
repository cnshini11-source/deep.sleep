import React from 'react';
import { Moon, Eye, Wind, Package, CheckCircle2 } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <Moon className="w-8 h-8 text-[#C5A059]" />,
    title: 'מכשיר נגד נחירות',
    description: 'פותח את דרכי האוויר ומפחית נחירות באופן מיידי.'
  },
  {
    icon: <Eye className="w-8 h-8 text-[#C5A059]" />,
    title: 'כיסוי עיניים פרימיום',
    description: 'מחשיך את החדר, מרגיע את העיניים ומעודד מלטונין.'
  },
  {
    icon: <Wind className="w-8 h-8 text-[#C5A059]" />,
    title: 'פותחי נחירות',
    description: 'מגיעים בכמה גדלים להתאמה מושלמת לאף.'
  },
  {
    icon: <Package className="w-8 h-8 text-[#C5A059]" />,
    title: 'קופסת פרימיום מגנטית',
    description: 'נראית מתנה יוקרתית, קומפקטית ונוחה לנשיאה.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">מה יש בערכה?</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">ארבעה מוצרי פרימיום בערכה אחת מושלמת</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl hover:border-[#C5A059] transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 group-hover:border-[#C5A059]/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="bg-black border border-neutral-800 rounded-3xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent pointer-events-none"></div>
           
           <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 md:p-16 space-y-8">
                 <div>
                    <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase mb-2 block">טכנולוגיה מתקדמת</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">הכירו את המכשיר שמשנה את כללי המשחק</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                       בניגוד למדבקות אף חיצוניות או התקנים מסורבלים לפה, מכשיר ה-Deep Sleep Pro פועל בטכנולוגיית הרחבה עדינה מתוך הנחיר. המבנה הארגונומי תוכנן לשבת בתוך דרכי הנשימה ולמנוע את קריסת הרקמות הרכות בזמן השאיפה - הגורם מספר 1 לנחירות.
                    </p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-start gap-4">
                       <div className="mt-1"><CheckCircle2 className="text-[#C5A059]" size={20} /></div>
                       <div>
                          <h4 className="text-white font-bold text-lg">סיליקון רפואי רך במיוחד</h4>
                          <p className="text-sm text-gray-500">חומר היפואלרגני שמתאים את עצמו לחום הגוף ואינו גורם לגירוי, גם בשימוש ממושך.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="mt-1"><CheckCircle2 className="text-[#C5A059]" size={20} /></div>
                       <div>
                          <h4 className="text-white font-bold text-lg">זרימת אוויר מקסימלית</h4>
                          <p className="text-sm text-gray-500">עיצוב הטורבינה הייחודי מגדיל את כמות החמצן הנכנסת לריאות ומפחית את המאמץ הנשימתי בשינה.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="mt-1"><CheckCircle2 className="text-[#C5A059]" size={20} /></div>
                       <div>
                          <h4 className="text-white font-bold text-lg">כמעט בלתי מורגש</h4>
                          <p className="text-sm text-gray-500">בזכות המשקל המזערי (3 גרם בלבד), תוך לילות ספורים תשכחו שאתם ישנים איתו.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="h-full min-h-[400px] bg-neutral-900 relative group overflow-hidden">
                 {/* Placeholder for Device Close Up */}
                 <img 
                    src="https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=1000" 
                    alt="Device Technology Close Up"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 right-8 left-8">
                    <div className="inline-block bg-[#C5A059] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                       פטנט ייחודי
                    </div>
                    <p className="text-white font-medium">עיצוב ארגונומי המותאם לאנטומיה האנושית</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};