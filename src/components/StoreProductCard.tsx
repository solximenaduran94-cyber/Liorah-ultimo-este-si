import React from 'react';
import { ExternalLink, Play, Sparkles, Check, Heart, Smartphone, Camera, RotateCcw } from 'lucide-react';
import { LiorahPackageTier } from '../types';
import { WebPageScreenMockup } from './WebPageScreenMockup';

export interface StoreProductItem {
  id: string;
  name: string;
  category: 'Boda' | '15 años' | 'Cumpleaños / Bautismo';
  price: number;
  celebrant: string;
  date: string;
  coverImage?: string;
  phoneImage?: string;
  liveUrl?: string;
  isBestseller?: boolean;
  styleTag: string;
  paletteColors?: string[];
}

interface StoreProductCardProps {
  product: StoreProductItem;
  customImage?: string;
  onBuy: (product: StoreProductItem, tier: LiorahPackageTier) => void;
  onOpenDemo: (product: StoreProductItem) => void;
  onUploadThumbnail?: (productId: string, fileDataUrl: string) => void;
  onResetThumbnail?: (productId: string) => void;
}

export const StoreProductCard: React.FC<StoreProductCardProps> = ({
  product,
  customImage,
  onBuy,
  onOpenDemo,
  onUploadThumbnail,
  onResetThumbnail,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl && onUploadThumbnail) {
        onUploadThumbnail(product.id, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="group flex flex-col justify-between text-center bg-[#FFFDF9] rounded-2xl p-4 transition-all duration-300 hover:shadow-md border border-transparent hover:border-[#E5D7C5]">
      {/* Mockup Presentation Container: Dual Mockup / Smartphone presentation */}
      <div
        onClick={() => onOpenDemo(product)}
        className="relative bg-[#F9F6F0] rounded-2xl p-4 sm:p-6 mb-4 flex items-center justify-center min-h-[360px] sm:min-h-[420px] cursor-pointer overflow-hidden group/mockup"
      >
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-radial from-white/80 via-transparent to-transparent opacity-60" />

        {/* Dual Phone / Envelope Composition (InvitArte style) */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 z-10 w-full max-w-[340px]">
          {/* Left Element: Envelope or Opening screen with wax seal */}
          <div className="hidden sm:flex flex-col items-center justify-center w-[130px] h-[240px] bg-[#FFFDF9] rounded-2xl border border-[#E5D7C5] shadow-md p-3 relative -rotate-3 transition-transform duration-300 group-hover/mockup:-rotate-6 group-hover/mockup:scale-105">
            {/* Top botanical/floral hint */}
            <div className="w-full h-12 rounded-lg bg-[#FAF6F0] overflow-hidden mb-auto flex items-center justify-center relative">
              {product.coverImage ? (
                <img
                  src={product.coverImage}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <span className="text-lg">🌿</span>
              )}
            </div>

            {/* Wax seal / stamp center with celebrant monogram */}
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#D4AF37] border-2 border-[#D4AF37] flex items-center justify-center shadow-md my-auto">
              <span className="font-script text-sm font-bold">
                {product.id === 'prod-greenery'
                  ? 'K&J'
                  : product.id === 'prod-ariel-cecilia'
                  ? 'A&C'
                  : product.celebrant.split(' ')[0]}
              </span>
            </div>

            {/* Envelope text */}
            <div className="text-center mt-auto w-full pt-1">
              <p className="font-romantic text-[10px] text-[#6B5E54] italic">
                Hacé click para abrir
              </p>
              <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mt-1" />
            </div>
          </div>

          {/* Right Element: Main Smartphone showing the invitation inside */}
          <div className="relative w-[190px] sm:w-[200px] h-[370px] sm:h-[390px] bg-[#1A1A1A] rounded-[36px] p-2.5 shadow-xl border-4 border-[#333] transition-transform duration-300 group-hover/mockup:scale-105">
            {/* Phone Speaker Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-[#1A1A1A] rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A] mr-1.5" />
              <div className="w-5 h-1 bg-[#333] rounded-full" />
            </div>

            {/* Phone Screen: Authentic Web Page Miniature */}
            <div className="w-full h-full bg-[#FFFDF9] rounded-[28px] overflow-hidden relative border border-stone-200 shadow-inner">
              <WebPageScreenMockup product={product} customImage={customImage} />
            </div>
          </div>
        </div>

        {/* Custom Thumbnail Upload Controls */}
        <div
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          <label className="inline-flex items-center gap-1 bg-[#FFFDF9]/95 hover:bg-[#FFFDF9] text-[#1A1A1A] px-2.5 py-1 rounded-full text-[10px] font-semibold border border-[#E5D7C5] shadow-xs cursor-pointer transition-all hover:border-[#C5A059]">
            <Camera className="w-3 h-3 text-[#C5A059]" />
            <span>{customImage ? 'Cambiar foto' : 'Subir foto'}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {customImage && (
            <button
              type="button"
              onClick={() => onResetThumbnail?.(product.id)}
              className="p-1 rounded-full bg-[#FFFDF9] border border-[#E5D7C5] text-[#A39589] hover:text-red-500 shadow-xs cursor-pointer"
              title="Restaurar diseño web original"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Live URL badge if it's an official active site */}
        {product.liveUrl && (
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-xs px-2.5 py-1 text-[9px] font-semibold text-[#D4AF37] border border-[#D4AF37]/30 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sitio Activo</span>
            </span>
          </div>
        )}
      </div>

      {/* Info & Title */}
      <div className="space-y-1.5">
        <h3 className="font-romantic text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug">
          Invitación Página Web | {product.name}
        </h3>

        {/* Price display in InvitArte format: $45.000,00 or $60.000,00 */}
        <div className="py-1">
          <p className="font-ui text-sm sm:text-base font-semibold text-[#1A1A1A]">
            ${product.price.toLocaleString('es-AR')},00
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-[#A39589] font-ui mt-0.5">
            <span>JPG $10k</span>
            <span>·</span>
            <span>PDF $25k</span>
            <span>·</span>
            <span>Video $34k</span>
          </div>
          {product.price >= 60000 && (
            <p className="text-[10px] text-[#C5A059] font-medium mt-1">
              ★ Incluye video de portada para ingresar a la web
            </p>
          )}
        </div>

        {/* Action Button: COMPRAR (InvitArte style clean uppercase) */}
        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onBuy(product, 'interactive')}
            className="w-full py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C5A059] border-b border-[#1A1A1A] hover:border-[#C5A059] transition-all cursor-pointer text-center"
          >
            COMPRAR
          </button>

          {/* Secondary Live Demo Button */}
          <button
            type="button"
            onClick={() => onOpenDemo(product)}
            className="text-[11px] font-ui text-[#6B5E54] hover:text-[#1A1A1A] transition-colors flex items-center justify-center gap-1 cursor-pointer pt-0.5"
          >
            <ExternalLink className="w-3 h-3 text-[#C5A059]" />
            <span>Ver demo interactiva</span>
          </button>
        </div>
      </div>
    </div>
  );
};
