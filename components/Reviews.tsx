import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "רועי א.",
    rating: 5,
    text: "אשכרה הפסקתי להתעורר מהנחירות של עצמי. אשתי מודה לכם כל בוקר מחדש. מוצר חובה.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "קרן ל.",
    rating: 5,
    text: "המסכה לעיניים מושלמת, אני נרדמת הרבה יותר מהר. הכל מרגיש סופר איכותי ויוקרתי.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "לירן ג.",
    rating: 5,
    text: "הערכה נראית מתנה יוקרתית, לקחתי גם לאבא שלי והוא מבסוט עליה מאוד. משלוח מהיר.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 4,
    name: "דניאל ש.",
    rating: 5,
    text: "ניסיתי המון פתרונות לנחירות, זה היחיד שלא הציק לי באף והצליח להפחית את הרעש.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 5,
    name: "מיכל פ.",
    rating: 5,
    text: "איכות ברמה אחרת. הקופסה המגנטית נוחה מאוד לנסיעות. שווה כל שקל.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Display 1 on mobile, 3 on desktop
  const itemsToShow = isMobile ? 1 : 3;
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length - (itemsToShow - 1)));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">מה הלקוחות אומרים?</h2>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#C5A059] text-[#C5A059]" />)}
              <span className="text-gray-400 mr-2">4.9/5 ממוצע דירוג</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`p-3 rounded-full border border-gray-700 transition-colors ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059]'}`}
            >
              <ChevronRight />
            </button>
            <button 
              onClick={nextSlide}
              disabled={activeIndex >= reviews.length - itemsToShow}
              className={`p-3 rounded-full border border-gray-700 transition-colors ${activeIndex >= reviews.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059]'}`}
            >
              <ChevronLeft />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(${activeIndex * (100 / itemsToShow)}%)` }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-[calc(33.333%-16px)]'}`}
              >
                <div className="bg-black p-8 rounded-2xl border border-neutral-800 h-full relative group hover:border-[#C5A059] transition-colors">
                  <Quote className="absolute top-6 left-6 text-neutral-800 w-12 h-12 group-hover:text-[#C5A059]/20 transition-colors" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10 min-h-[80px]">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059]"
                    />
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-xs text-gray-500">לקוח מאומת</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};