import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "רונן כהן",
    rating: 5,
    text: "תשמעו הייתי סקפטי רצח. אשתי כבר איימה שאני אשן בסלון. הזמנתי את זה כמוצא אחרון, שמתי בלילה הראשון - שקט. פשוט שקט. היא קמה בבוקר שאלה אם אני חי. הצלתם לי את הזוגיות.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "דנית לוי",
    rating: 5,
    text: "בתור אחת שיש לה שינה קלה, בעלי היה פשוט טרקטור בלילה. קניתי לו את הערכה, המכשיר הקטן הזה פשוט גאוני. הוא לא מרגיש את זה, ואני סוף סוף ישנה לילה רצוף. שווה כל שקל.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "אביב מ.",
    rating: 5,
    text: "וואלה עובד. ניסיתי מדבקות, ניסיתי תרסיסים, כלום לא עזר. זה הדבר היחיד שבאמת משתיק את הנחירות. הכיסוי עיניים שמגיע עם זה זה בונוס נחמד לאללה.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 4,
    name: "יגאל ש.",
    rating: 5,
    text: "מוצר הצגה. מגיע ארוז יפה, המכשיר נטען, שם את זה מתחת לסנטר וזהו. לא מציק, לא לוחץ. קמתי בבוקר פחות עייף מהרגיל. מבסוט עליכם.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 5,
    name: "מירי גולן",
    rating: 5,
    text: "הזמנתי לבעלי, הגיע תוך יומיים עם שליח. הוא משתמש בזה כבר שבוע והשינוי מטורף. אין יותר 'ניסורים' באמצע הלילה. ממליצה בחום למי שרוצה לישון בשקט.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 6,
    name: "יוסי ב.",
    rating: 5,
    text: "תכלס? הופתעתי לטובה. זה קטן, לא מורגש וכנראה עושה את העבודה כי אשתי הפסיקה לבעוט בי בלילה. אחלה מכשיר.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

export const Reviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-950 relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-right w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">מה אנשים באמת חושבים?</h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#C5A059] text-[#C5A059]" />)}
              </div>
              <span className="text-gray-400 font-medium border-r border-gray-700 pr-3 mr-3">
                4.9/5 מתוך מאות ביקורות מאומתות
              </span>
            </div>
          </div>
          
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-800 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <ChevronRight size={24} />
            </button>
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-800 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

        {/* CSS Scroll Snap Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] snap-center md:snap-start"
            >
              <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-neutral-800 h-full relative group hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl flex flex-col">
                {/* Decorative Quote */}
                <div className="absolute top-6 left-6 text-neutral-800 group-hover:text-[#C5A059]/10 transition-colors duration-500">
                  <Quote size={50} className="transform rotate-180" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light flex-grow mb-6">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-neutral-900 pt-6 relative z-10 mt-auto">
                  <div className="relative">
                     <img 
                      src={review.avatar} 
                      alt={review.name}
                      loading="lazy"
                      decoding="async"
                      width="48"
                      height="48"
                      className="w-12 h-12 rounded-full object-cover border border-neutral-700 group-hover:border-[#C5A059] transition-colors"
                     />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-[#C5A059] font-medium tracking-wide flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                      רכישה מאומתת
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="w-1 flex-shrink-0"></div>
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden text-center text-gray-600 text-sm mt-2 flex items-center justify-center gap-2">
            <ChevronRight size={14} className="animate-pulse" />
            החלק לצפייה בעוד
            <ChevronLeft size={14} className="animate-pulse" />
        </div>

      </div>
    </section>
  );
};