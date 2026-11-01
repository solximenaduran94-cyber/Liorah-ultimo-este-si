import React from 'react';
import { Play, Sparkles, MapPin, Clock, MessageCircle, Heart, Lock } from 'lucide-react';
import { StoreProductItem } from './StoreProductCard';

interface WebPageScreenMockupProps {
  product: StoreProductItem;
  customImage?: string;
}

export const WebPageScreenMockup: React.FC<WebPageScreenMockupProps> = ({ product, customImage }) => {
  const getDomainLabel = () => {
    if (product.liveUrl) {
      try {
        const u = new URL(product.liveUrl);
        return u.hostname;
      } catch {
        return product.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
      }
    }
    return `liorah.site/${product.id.replace('prod-', '')}`;
  };

  // If a custom image was previously uploaded by the user:
  if (customImage) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-stone-900 flex flex-col justify-between select-none">
        <img
          src={customImage}
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 bg-black/60 backdrop-blur-xs py-1 px-2.5 border-b border-white/20 flex items-center justify-between text-[8px] text-white">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#D4AF37] font-bold uppercase">MINIATURA WEB</span>
        </div>
      </div>
    );
  }


  // 2. CELESTE XV (Celestial Ice Blue, crystal crown, live site misxv.celeste.liorah.site)
  if (product.id === 'prod-celeste-xv') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#EBF4FA] via-[#F5FAFD] to-[#E3EFF7] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#1A365D]">
        {/* Browser URL Bar */}
        <div className="bg-[#FFFDF9]/90 backdrop-blur-xs py-1 px-2.5 border-b border-[#CBD5E1] flex items-center justify-between text-[8px] text-[#4A5568]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#2B6CB0] font-bold uppercase">WEB EN VIVO</span>
        </div>

        {/* Shimmer header with crown */}
        <div className="relative pt-2 px-3">
          <div className="w-full h-12 rounded-xl overflow-hidden shadow-xs relative">
            <img
              src="/src/assets/images/sample_celeste_blue_quince_1793112043361.jpg"
              alt="Celeste"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#EBF4FA] via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="my-auto px-2 space-y-1">
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#2B6CB0] font-semibold block">
            Mis 15 Años
          </span>
          <h4 className="font-prestige text-2xl font-bold tracking-[0.16em] text-[#1A365D] uppercase">
            Celeste
          </h4>
          <p className="font-romantic italic text-[9px] text-[#4A5568] -mt-0.5">
            "Noche de estrellas & cuento de hadas"
          </p>
          <div className="w-6 h-[1px] bg-[#63B3ED] mx-auto my-1" />
          <p className="font-mono text-[8px] text-[#1A365D] font-bold">
            20 · 12 · 2026
          </p>
        </div>

        {/* Web Controls */}
        <div className="p-2 space-y-1.5 bg-[#FFFDF9]/80 border-t border-[#CBD5E1]">
          <div className="inline-flex items-center gap-1.5 bg-[#1A365D] text-white px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#63B3ED] text-[#63B3ED]" />
            <span>DALE PLAY!</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[7px] text-[#4A5568] font-ui">
            <span>Vals</span>
            <span>·</span>
            <span>Dress Code</span>
            <span>·</span>
            <span>Mesa de Regalos</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. ARIEL & CECILIA (Natural foliage, gold roman prestige, live site arielycecilia.liorah.site)
  if (product.id === 'prod-ariel-cecilia') {
    return (
      <div className="w-full h-full bg-[#FAF7F2] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#1A1A1A]">
        {/* Browser URL Bar */}
        <div className="bg-[#FFFDF9]/90 backdrop-blur-xs py-1 px-2.5 border-b border-[#E5D7C5] flex items-center justify-between text-[8px] text-[#6B5E54]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#C5A059] font-bold uppercase">WEB EN VIVO</span>
        </div>

        {/* Foliage Image */}
        <div className="relative pt-2 px-3">
          <div className="w-full h-12 rounded-xl overflow-hidden shadow-xs relative">
            <img
              src="/src/assets/images/sample_cecilia_ariel_wedding_1793112044080.jpg"
              alt="Ariel & Cecilia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="my-auto px-2 space-y-1">
          <span className="font-ui text-[8px] uppercase tracking-[0.25em] text-[#A39589] font-semibold block">
            ¡Nos Casamos!
          </span>
          <h4 className="font-prestige text-lg font-bold tracking-wide text-[#1A1A1A] leading-tight">
            Ariel & Cecilia
          </h4>
          <p className="font-romantic italic text-[9px] text-[#6B5E54]">
            "Celebrando nuestro gran amor"
          </p>
          <div className="w-6 h-[1px] bg-[#C5A059] mx-auto my-1" />
          <p className="font-mono text-[8px] font-semibold text-[#1A1A1A]">
            14 · 02 · 2027
          </p>
        </div>

        {/* Web Controls */}
        <div className="p-2 space-y-1.5 bg-[#FFFDF9]/80 border-t border-[#E5D7C5]">
          <div className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#D4AF37] px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#D4AF37]" />
            <span>DALE PLAY!</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[7px] text-[#6B5E54] font-ui">
            <span>Ceremonia</span>
            <span>·</span>
            <span>GPS Waze</span>
            <span>·</span>
            <span>Luna de Miel</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. GREENERY (Karen y Joaquín - Botanical leaves wreath, exactly as in PDF Page 1)
  if (product.id === 'prod-greenery') {
    return (
      <div className="w-full h-full bg-[#FAF8F5] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#1A1A1A]">
        {/* Browser URL Bar */}
        <div className="bg-[#FFFDF9]/90 backdrop-blur-xs py-1 px-2.5 border-b border-[#E5D7C5] flex items-center justify-between text-[8px] text-[#6B5E54]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#C5A059] font-bold uppercase">PÁGINA WEB</span>
        </div>

        {/* Botanical Garland Top Art */}
        <div className="relative pt-2 px-3">
          <div className="w-full h-12 rounded-xl overflow-hidden shadow-xs relative">
            <img
              src="/src/assets/images/invitation_wedding_botanical_1793110946314.jpg"
              alt="Greenery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
          </div>
        </div>

        {/* Exact text matching InvitArte Page 1 */}
        <div className="my-auto px-2 space-y-1">
          <p className="font-romantic italic text-[8px] text-[#6B5E54]">
            Sé parte de nuestra historia
          </p>
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#1A1A1A] font-bold block">
            ¡NOS CASAMOS!
          </span>
          <h4 className="font-script text-2xl sm:text-3xl text-[#1A1A1A] leading-tight">
            Karen y Joaquín
          </h4>
          <p className="font-ui text-[8px] tracking-widest text-[#6B5E54] font-medium">
            28 . 11 . 2026
          </p>
        </div>

        {/* Dale Play circular button */}
        <div className="p-2 space-y-1 bg-[#FFFDF9]/80 border-t border-[#E5D7C5]">
          <div className="inline-flex flex-col items-center gap-0.5">
            <div className="w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              <Play className="w-2.5 h-2.5 fill-[#C5A059] ml-0.5" />
            </div>
            <span className="font-ui text-[7px] uppercase tracking-widest font-bold text-[#1A1A1A]">
              DALE PLAY!
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 5. OLIVIA XV (Acuarelas florales en rosa pastel, live site olivia.liorah.site)
  if (product.id === 'prod-olivia') {
    return (
      <div className="w-full h-full bg-[#FFFDF9] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#1A1A1A]">
        {/* Browser URL Bar */}
        <div className="bg-[#FAF6F0]/90 backdrop-blur-xs py-1 px-2.5 border-b border-[#E5D7C5] flex items-center justify-between text-[8px] text-[#6B5E54]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#C5A059] font-bold uppercase">WEB EN VIVO</span>
        </div>

        {/* Top floral bunch */}
        <div className="pt-2 px-3">
          <div className="w-full h-12 rounded-xl overflow-hidden shadow-xs relative">
            <img
              src="/src/assets/images/sample_olivia_invitation_1793130348223.jpg"
              alt="Olivia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-transparent to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="my-auto px-2 space-y-1">
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#EC4899] font-semibold block">
            Mis 15 Años
          </span>
          <h4 className="font-script text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
            Olivia
          </h4>
          <p className="font-romantic italic text-[9px] text-[#6B5E54] -mt-1">
            "Acuarela floral & noche de ensueño"
          </p>
          <div className="w-6 h-[1px] bg-[#C5A059] mx-auto my-0.5" />
          <p className="font-ui text-[8px] font-mono tracking-widest text-[#6B5E54]">
            12 · 09 · 2026
          </p>
        </div>

        {/* Dale Play circular button */}
        <div className="p-2 space-y-1 bg-[#FAF6F0]/60 border-t border-[#E5D7C5]">
          <div className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-[#D4AF37] px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#D4AF37]" />
            <span>DALE PLAY!</span>
          </div>
        </div>
      </div>
    );
  }


  // 8. XIOMARA XV (Imperial emerald green, gold crown, live site xiomara.misxv.liorah.site)
  if (product.id === 'prod-xiomara-xv') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#0F291E] via-[#1C4532] to-[#0A1A13] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#FAF6F0]">
        <div className="bg-black/60 backdrop-blur-xs py-1 px-2.5 border-b border-[#C5A059]/30 flex items-center justify-between text-[8px] text-[#E5D7C5]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#D4AF37] font-bold uppercase">WEB EN VIVO</span>
        </div>

        <div className="my-auto px-2 space-y-1">
          <div className="w-8 h-8 rounded-full border border-[#D4AF37] mx-auto flex items-center justify-center text-[#D4AF37]">
            👑
          </div>
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold block">
            Mis XV Años
          </span>
          <h4 className="font-prestige text-2xl font-bold tracking-[0.16em] text-[#FFFDF9] uppercase">
            Xiomara
          </h4>
          <p className="font-romantic italic text-[9px] text-[#E5D7C5]">
            "Noche de gala & distinción esmeralda"
          </p>
          <p className="font-mono text-[8px] text-[#D4AF37]">
            05 · 12 · 2026
          </p>
        </div>

        <div className="p-2 space-y-1 bg-black/50 border-t border-[#C5A059]/30">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1A1A1A] px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#1A1A1A]" />
            <span>DALE PLAY!</span>
          </div>
        </div>
      </div>
    );
  }

  // 9. DARIEL (Navy & molten gold, live site dariel.liorah.site)
  if (product.id === 'prod-dariel') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0A0F1D] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#FAF6F0]">
        <div className="bg-black/60 backdrop-blur-xs py-1 px-2.5 border-b border-[#D4AF37]/30 flex items-center justify-between text-[8px] text-[#E5D7C5]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#D4AF37] font-bold uppercase">WEB EN VIVO</span>
        </div>

        <div className="my-auto px-2 space-y-1">
          <span className="text-sm">⭐</span>
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold block">
            Gran Noche de Gala
          </span>
          <h4 className="font-prestige text-2xl font-bold tracking-[0.16em] text-[#FFFDF9] uppercase">
            Dariel
          </h4>
          <p className="font-romantic italic text-[9px] text-[#94A3B8]">
            "Celebrando con quienes más amamos"
          </p>
          <p className="font-mono text-[8px] text-[#D4AF37]">
            24 · 10 · 2026
          </p>
        </div>

        <div className="p-2 space-y-1 bg-black/50 border-t border-[#D4AF37]/30">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1A1A1A] px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#1A1A1A]" />
            <span>DALE PLAY!</span>
          </div>
        </div>
      </div>
    );
  }

  // 10. ALMA XV (Haute couture magenta & gold, live site almaxv.liorah.site)
  if (product.id === 'prod-alma-xv') {
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#500724] via-[#831843] to-[#3B0718] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#FAF6F0]">
        <div className="bg-black/60 backdrop-blur-xs py-1 px-2.5 border-b border-[#D4AF37]/30 flex items-center justify-between text-[8px] text-[#FCE7F3]">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#D4AF37] font-bold uppercase">WEB EN VIVO</span>
        </div>

        <div className="my-auto px-2 space-y-1">
          <span className="text-sm">💖</span>
          <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#FBCFE8] font-semibold block">
            Mis Quince Años
          </span>
          <h4 className="font-script text-3xl sm:text-4xl text-[#D4AF37] leading-none">
            Alma
          </h4>
          <p className="font-romantic italic text-[9px] text-[#FCE7F3]">
            "Glamour, amigos & noche inolvidable"
          </p>
          <p className="font-mono text-[8px] text-[#D4AF37]">
            08 · 11 · 2026
          </p>
        </div>

        <div className="p-2 space-y-1 bg-black/50 border-t border-[#D4AF37]/30">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1A1A1A] px-3 py-1 rounded-full text-[8px] font-bold font-ui tracking-wider uppercase shadow-xs">
            <Play className="w-2.5 h-2.5 fill-[#1A1A1A]" />
            <span>DALE PLAY!</span>
          </div>
        </div>
      </div>
    );
  }

  // 11. GENERIC OR DEFAULT (Zoe, Olivia, etc.)
  return (
    <div className="w-full h-full bg-[#FAF6F0] flex flex-col justify-between text-center select-none relative overflow-hidden text-[#1A1A1A]">
      <div className="bg-[#FFFDF9]/90 py-1 px-2.5 border-b border-[#E5D7C5] flex items-center justify-between text-[8px] text-[#6B5E54]">
        <div className="flex items-center gap-1 font-mono truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          <span className="truncate">{getDomainLabel()}</span>
        </div>
        <span className="text-[7px] text-[#C5A059] font-bold uppercase">WEB EN VIVO</span>
      </div>

      <div className="my-auto px-2 space-y-1">
        <span className="font-ui text-[8px] uppercase tracking-[0.22em] text-[#A39589] font-semibold block">
          {product.category}
        </span>
        <h4 className="font-script text-3xl text-[#1A1A1A] leading-tight">
          {product.celebrant}
        </h4>
        <div className="w-6 h-[1px] bg-[#C5A059] mx-auto my-1" />
        <p className="font-mono text-[8px] text-[#6B5E54]">
          {product.date}
        </p>
      </div>

      <div className="p-2 space-y-1 bg-[#FFFDF9]/80 border-t border-[#E5D7C5]">
        <div className="inline-flex flex-col items-center gap-0.5">
          <div className="w-6 h-6 rounded-full bg-[#FAF6F0] border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
            <Play className="w-2.5 h-2.5 fill-[#C5A059] ml-0.5" />
          </div>
          <span className="font-ui text-[7px] uppercase tracking-widest font-bold text-[#1A1A1A]">
            DALE PLAY!
          </span>
        </div>
      </div>
    </div>
  );
};
