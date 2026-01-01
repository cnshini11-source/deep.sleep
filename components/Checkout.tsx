import React, { useState } from 'react';
import { Button } from './Button';
import { ShieldCheck, Truck, RefreshCw, Banknote } from 'lucide-react';

export const Checkout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const price = 199;
  
  const PRODUCT_IMAGE_URL = "https://i.imgur.com/R4A8pSJ.png";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Adding order details to the form data sent to Formspree
    formData.append('פריט', 'Shini Deep Sleep Pro - ערכת שינה');
    formData.append('כמות', quantity.toString());
    formData.append('סהכ_לתשלום', `${price * quantity} ש"ח`);

    try {
      const response = await fetch("https://formspree.io/f/mdanwgeg", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('ארעה שגיאה בשליחת ההזמנה. נסו שנית.');
      }
    } catch (error) {
      alert('ארעה שגיאה בשליחת ההזמנה. נסו שנית.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Product Summary */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
             <div className="text-center lg:text-right">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">הזמנה עם שליח עד הבית</h2>
                <p className="text-gray-400">ההזמנה תגיע עד אליך, ותשלום יתבצע במזומן בעת מסירה.</p>
             </div>

             <div className="bg-black p-4 md:p-6 rounded-2xl border border-neutral-800 flex flex-row gap-4 md:gap-6 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                   <img 
                      src={PRODUCT_IMAGE_URL}
                      alt="Shini Deep Sleep Pro" 
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex-1 text-right">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Shini Deep Sleep Pro</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-3">ערכת שינה מלאה: מכשיר חכם, כיסוי עיניים, פותחי נחירות.</p>
                    
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center bg-neutral-900 border border-gray-700 rounded-lg">
                            <button 
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition text-lg w-10 h-8 flex items-center justify-center"
                              type="button"
                              aria-label="הפחת כמות"
                            >-</button>
                            <span className="px-3 py-1 text-white font-mono w-8 text-center">{quantity}</span>
                            <button 
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition text-lg w-10 h-8 flex items-center justify-center"
                              type="button"
                              aria-label="הוסף כמות"
                            >+</button>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#C5A059]">
                           ₪{price * quantity}
                        </div>
                    </div>
                </div>
             </div>

             {/* Modern Trust Badges Grid */}
             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-5 rounded-2xl bg-neutral-800/30 border border-white/5 hover:border-[#C5A059]/30 hover:bg-neutral-800/50 transition-all duration-300 group text-center backdrop-blur-sm">
                   <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                      <ShieldCheck className="text-[#C5A059]" size={22} />
                   </div>
                   <span className="text-sm font-bold text-gray-200">אחריות יצרן מלאה</span>
                </div>
                
                <div className="flex flex-col items-center p-5 rounded-2xl bg-neutral-800/30 border border-white/5 hover:border-[#C5A059]/30 hover:bg-neutral-800/50 transition-all duration-300 group text-center backdrop-blur-sm">
                   <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                       <Truck className="text-[#C5A059]" size={22} />
                   </div>
                   <span className="text-sm font-bold text-gray-200">משלוח מהיר</span>
                   <span className="text-xs text-gray-500 mt-1 font-mono">2-4 ימי עסקים</span>
                </div>

                <div className="flex flex-col items-center p-5 rounded-2xl bg-neutral-800/30 border border-white/5 hover:border-[#C5A059]/30 hover:bg-neutral-800/50 transition-all duration-300 group text-center backdrop-blur-sm">
                   <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                      <Banknote className="text-[#C5A059]" size={22} />
                   </div>
                   <span className="text-sm font-bold text-gray-200">תשלום במזומן</span>
                   <span className="text-xs text-gray-500 mt-1">אצל השליח</span>
                </div>

                <div className="flex flex-col items-center p-5 rounded-2xl bg-neutral-800/30 border border-white/5 hover:border-[#C5A059]/30 hover:bg-neutral-800/50 transition-all duration-300 group text-center backdrop-blur-sm">
                   <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#C5A059]/20 transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                      <RefreshCw className="text-[#C5A059]" size={22} />
                   </div>
                   <span className="text-sm font-bold text-gray-200">מדיניות החזרים</span>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-black p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-[0_0_50px_rgba(197,160,89,0.05)] order-2 lg:order-2">
            
            {!submitted ? (
                <>
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">פרטי משלוח (תשלום במזומן)</h3>
                    
                    <form 
                        id="deliveryForm" 
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-gray-400 font-bold">שם מלא</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="שם_מלא" 
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600"
                                required 
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="address" className="text-sm text-gray-400 font-bold">כתובת למשלוח</label>
                            <input 
                                type="text" 
                                id="address" 
                                name="כתובת" 
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600"
                                placeholder="עיר, רחוב, מספר בית"
                                required 
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm text-gray-400 font-bold">טלפון ליצירת קשר</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="טלפון" 
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600"
                                dir="ltr"
                                style={{ textAlign: 'right' }}
                                required 
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-400 font-bold">אימייל (לא חובה)</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="אימייל" 
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600"
                                dir="ltr"
                                style={{ textAlign: 'right' }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="notes" className="text-sm text-gray-400 font-bold">פרטי הזמנה / הערות</label>
                            <textarea 
                                id="notes" 
                                name="הערות" 
                                rows={4}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all h-24 resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-800">
                            <Button type="submit" disabled={isSubmitting} className="w-full text-xl py-4 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                {isSubmitting ? 'שולח...' : `שלח הזמנה - ₪${price * quantity}`}
                            </Button>
                        </div>
                    </form>
                </>
            ) : (
                <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                        <ShieldCheck size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">תודה! ההזמנה שלך נקלטה בהצלחה.</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        שליח שלנו יצור איתך קשר לפני המסירה כדי לאשר את ההזמנה.
                    </p>
                    <Button 
                        onClick={handleReset} 
                        variant="outline"
                        className="text-sm px-8 py-2 h-auto border-neutral-700 hover:bg-neutral-800 hover:text-white hover:border-neutral-600"
                    >
                        חזרה להזמנה
                    </Button>
                </div>
            )}
          </div>
        </div>

        {/* SEO Text Section */}
        <div className="max-w-4xl mx-auto text-center border-t border-neutral-800 pt-16">
            <h2 className="text-3xl font-bold text-white mb-6">למה לבחור בשיני?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                המכשיר <strong>שיני</strong> מסייע להפחתת נחירות, לשינה רגועה יותר, ולשיפור איכות החיים של כל בני הבית. בטוח לשימוש, נוח וקל לניקוי.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-right max-w-2xl mx-auto">
                <div className="bg-neutral-800/50 p-4 rounded-xl flex items-center gap-3 border border-neutral-700">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full shrink-0"></div>
                    <span className="text-gray-200">הפחתת נחירות משמעותית</span>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-xl flex items-center gap-3 border border-neutral-700">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full shrink-0"></div>
                    <span className="text-gray-200">שימוש קל ונוח</span>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-xl flex items-center gap-3 border border-neutral-700">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full shrink-0"></div>
                    <span className="text-gray-200">שליח עד הבית ותשלום במזומן</span>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-xl flex items-center gap-3 border border-neutral-700">
                    <div className="w-2 h-2 bg-[#C5A059] rounded-full shrink-0"></div>
                    <span className="text-gray-200">מותג איכותי ואמין – שיני</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};