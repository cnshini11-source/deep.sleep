import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "רועי א.",
    rating: 5,
    text: "אשכרה הפסקתי להתעורר מהנחירות של עצמי. אשתי מודה לכם כל בוקר מחדש. מוצר חובה לכל מי שסובל מזה.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "קרן ל.",
    rating: 5,
    text: "המסכה לעיניים מושלמת, אני נרדמת הרבה יותר מהר. הכל מרגיש סופר איכותי ויוקרתי, אריזה מהממת.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "לירן ג.",
    rating: 5,
    text: "הערכה נראית מתנה יוקרתית, לקחתי גם לאבא שלי והוא מבסוט עליה מאוד. משלוח מהיר ושירות מעולה.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 4,
    name: "דניאל ש.",
    rating: 5,
    text: "ניסיתי המון פתרונות לנחירות, זה היחיד שלא הציק לי באף והצליח להפחית את הרעש בצורה משמעותית.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 5,
    name: "מיכל פ.",
    rating: 5,
    text: "איכות ברמה אחרת. הקופסה המגנטית נוחה מאוד לנסיעות. שווה כל שקל למי שחשובה לו השינה.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 6,
    name: "יוסי ב.",
    rating: 5,
    text: "פשוט עובד. הלילה הראשון היה קצת מוזר אבל מהלילה השני אני ישן כמו תינוק. מומלץ בחום.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Dragging State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    checkMobile();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : 3;
  const maxIndex = reviews.length - itemsToShow;

  // Touch/Mouse Handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // Minimum drag distance to trigger slide change
    
    if (dragOffset < -threshold) {
      // Swiped Left -> Next
      if (activeIndex < maxIndex) setActiveIndex(prev => prev + 1);
    } else if (dragOffset > threshold) {
      // Swiped Right -> Prev
      if (activeIndex > 0) setActiveIndex(prev => prev - 1);
    }
    
    setDragOffset(0);
  };

  // Event Listeners for Mouse/Touch
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => isDragging && handleEnd();

  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  const nextSlide = () => {
    if (activeIndex < maxIndex) setActiveIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-950 overflow-hidden relative select-none">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-right w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">סיפורי הצלחה</h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-[#C5A059] text-[#C5A059]" />)}
              </div>
              <span className="text-gray-400 font-medium border-r border-gray-700 pr-3 mr-3">
                4.9/5 מתוך מאות ביקורות
              </span>
            </div>
          </div>
          
          <div className="flex gap-4 hidden md:flex">
            <button 
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`p-4 rounded-full border border-gray-800 transition-all duration-300 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed text-gray-600' : 'hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] text-white'}`}
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={activeIndex >= maxIndex}
              className={`p-4 rounded-full border border-gray-800 transition-all duration-300 ${activeIndex >= maxIndex ? 'opacity-30 cursor-not-allowed text-gray-600' : 'hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] text-white'}`}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-visible"
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className={`flex transition-transform ease-out gap-6 ${isDragging ? 'duration-0 cursor-grabbing' : 'duration-500 cursor-grab'}`}
            style={{ 
              transform: `translateX(calc(${activeIndex * (100 / itemsToShow)}% + ${dragOffset}px))` 
            }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className={`flex-shrink-0 ${isMobile ? 'w-full' : 'w-[calc(33.333%-16px)]'}`}
              >
                <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-neutral-800 h-full relative group hover:border-[#C5A059]/50 transition-all duration-500 shadow-2xl">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 left-6 text-neutral-800 group-hover:text-[#C5A059]/10 transition-colors duration-500">
                    <Quote size={60} className="transform rotate-180" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed relative z-10 font-light min-h-[90px]">
                    "{review.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 border-t border-neutral-900 pt-6 relative z-10">
                    <div className="relative">
                       <div className="absolute inset-0 bg-[#C5A059] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                       <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-neutral-800 group-hover:border-[#C5A059] transition-colors relative z-10"
                       />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{review.name}</h4>
                      <p className="text-xs text-[#C5A059] font-medium tracking-wide flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                        רכישה מאומתת
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#C5A059]' : 'bg-gray-700'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};