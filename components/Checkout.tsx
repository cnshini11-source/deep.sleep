import React, { useState } from 'react';
import { Button } from './Button';
import { ShieldCheck, Truck, RefreshCw, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const price = 299;
  
  const PRODUCT_IMAGE_URL = "https://i.imgur.com/R4A8pSJ.png";

  return (
    <section className="min-h-screen pt-32 pb-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Product Summary */}
          <div className="space-y-8">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">השלימו את ההזמנה</h2>
                <p className="text-gray-400">הצטרפו לאלפי לקוחות שישנים טוב יותר בלילה.</p>
             </div>

             <div className="bg-black p-6 rounded-2xl border border-neutral-800 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                   <img 
                      src={PRODUCT_IMAGE_URL}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1629363079979-456cb3c6838c?auto=format&fit=crop&q=80&w=200";
                      }}
                      alt="Product Thumbnail" 
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex-1 text-center md:text-right">
                    <h3 className="text-xl font-bold text-white mb-2">Shini Deep Sleep Pro – ערכת שינה מלאה</h3>
                    <p className="text-gray-400 text-sm mb-4">כולל: מכשיר נגד נחירות, כיסוי עיניים, פותחי נחירות, קופסה מגנטית.</p>
                    
                    <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
                        <div className="flex items-center border border-gray-700 rounded-lg">
                            <button 
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition"
                            >-</button>
                            <span className="px-4 py-1 text-white font-mono">{quantity}</span>
                            <button 
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition"
                            >+</button>
                        </div>
                        <div className="text-2xl font-bold text-[#C5A059]">
                           ₪{price * quantity}
                        </div>
                    </div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                   <ShieldCheck className="text-[#C5A059]" />
                   <span>אחריות לשנה</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                   <Truck className="text-[#C5A059]" />
                   <span>משלוח מהיר עד הבית</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                   <Lock className="text-[#C5A059]" />
                   <span>תשלום מאובטח SSL</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                   <RefreshCw className="text-[#C5A059]" />
                   <span>מדיניות החזרים הוגנת</span>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-black p-8 rounded-2xl border border-[#C5A059]/30 shadow-[0_0_50px_rgba(197,160,89,0.05)]">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">פרטי משלוח ותשלום</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm text-gray-400">שם מלא</label>
                   <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" placeholder="ישראל ישראלי" required />
                </div>
                <div className="space-y-2">
                   <label className="text-sm text-gray-400">טלפון</label>
                   <input type="tel" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" placeholder="050-0000000" required />
                </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400">אימייל</label>
                 <input type="email" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" placeholder="email@example.com" required />
              </div>

              <div className="grid grid-cols-3 gap-4">
                 <div className="col-span-2 space-y-2">
                    <label className="text-sm text-gray-400">עיר</label>
                    <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" required />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm text-gray-400">מס' בית</label>
                    <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" required />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400">כתובת (רחוב)</label>
                 <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors" required />
              </div>

               <div className="space-y-2">
                 <label className="text-sm text-gray-400">הערות לשליח (אופציונלי)</label>
                 <textarea className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors h-24"></textarea>
              </div>

              <div className="pt-4">
                 <div className="text-sm text-gray-400 mb-2">אמצעי תשלום (יבוצע במעמד החיוב)</div>
                 <div className="flex gap-3 mb-6">
                    {['כרטיס אשראי', 'Bit', 'PayPal'].map((method) => (
                      <div 
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`flex-1 py-3 rounded-lg text-center text-sm border cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                          paymentMethod === method 
                            ? 'bg-[#C5A059]/10 border-[#C5A059] text-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.2)]' 
                            : 'bg-neutral-800 border-neutral-700 text-gray-300 hover:border-[#C5A059] hover:bg-neutral-800/80 hover:text-white hover:shadow-[0_4px_12px_rgba(197,160,89,0.1)]'
                        }`}
                      >
                        {method}
                      </div>
                    ))}
                 </div>

                 <Button className="w-full text-lg shadow-lg">
                    רכשו עכשיו - ₪{price * quantity}
                 </Button>

                 <p className="text-xs text-center text-gray-500 mt-4">
                    קנייה מאובטחת • אחריות 12 חודשים • החזר כספי בהתאם למדיניות
                 </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};