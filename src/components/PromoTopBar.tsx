import React, { useState } from 'react';
import { Sparkles, X, Heart, Gift } from 'lucide-react';

interface PromoTopBarProps {
  onOpenPromoInfo: () => void;
}

export const PromoTopBar: React.FC<PromoTopBarProps> = ({ onOpenPromoInfo }) => {
  return (
    <div className="bg-[#FFFDF9] border-b border-[#E5D7C5] text-[#1A1A1A] py-2 px-3 text-center text-[11px] sm:text-xs font-ui tracking-wide shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
        <span className="text-amber-500">✨</span>
        <span className="font-semibold tracking-wider uppercase text-[10px] sm:text-[11px] bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#E5D7C5]">
          CYBER PROMO
        </span>
        <span className="text-[#6B5E54]">|</span>
        <span className="font-medium text-[#1A1A1A]">
          <strong>10% OFF</strong> con transferencia + cartel de bienvenida digital de regalo | Del 2 al 4/11.
        </span>
        <button
          type="button"
          onClick={onOpenPromoInfo}
          className="font-bold underline text-[#C5A059] hover:text-[#1A1A1A] transition-colors cursor-pointer inline-flex items-center gap-1 ml-1"
        >
          <span>¡Hacé click ACÁ para más info!</span>
          <span>💌</span>
        </button>
      </div>
    </div>
  );
};
