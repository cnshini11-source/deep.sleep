import React from 'react';
import { Moon, Glasses, Wind, Package } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <Moon className="w-8 h-8 text-[#C5A059]" />,
    title: 'מכשיר נגד נחירות',
    description: 'פותח את דרכי האוויר ומפחית נחירות באופן מיידי.'
  },
  {
    icon: <Glasses className="w-8 h-8 text-[#C5A059]" />,
    title: 'כיסוי עיניים 3D פרימיום',
    description: 'עיצוב תלת-ממדי ארגונומי שלא לוחץ על העפעפיים, מאפשר מצמוץ חופשי וחוסם אור ב-100% לשינה עמוקה ואיכותית.'
  },
  {
    icon: <Wind className="w-8 h-8 text-[#C5A059]" />,
    title: 'מכשיר לפתיחת הנשימה',
    description: 'מרחיב בעדינות את הנחיריים כדי לאפשר זרימת אוויר חלקה ומוגברת, מונע גודש ומקל על הנשימה באופן מיידי.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      </div>
    </section>
  );
};