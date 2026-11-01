import React, { useState } from 'react';
import { Menu, Search, User, ShoppingBag, X, Heart, MessageCircle } from 'lucide-react';

interface StoreHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCustomerPortal: () => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenCustomerPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E5D7C5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Left: Menu & Search */}
            <div className="flex items-center gap-3 sm:gap-4 w-1/3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6 stroke-[1.5]" />
              </button>
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Buscar invitaciones"
              >
                <Search className="h-5 w-5 stroke-[1.75]" />
                <span className="hidden md:inline font-ui text-xs text-[#6B5E54]">Buscar...</span>
              </button>
            </div>

            {/* Center: Script Logo Wordmark (InvitArte style) */}
            <div className="flex items-center justify-center w-1/3 text-center">
              <a href="/" className="inline-block group py-1">
                <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-normal leading-none select-none block transition-transform group-hover:scale-[1.02]">
                  Liorah Studio
                </span>
                <span className="font-prestige text-[9px] uppercase tracking-[0.25em] text-[#C5A059] block -mt-1 font-semibold">
                  Invitaciones Digitales
                </span>
              </a>
            </div>

            {/* Right: Account & Cart Bag */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 w-1/3">
              <button
                type="button"
                onClick={onOpenCustomerPortal}
                className="p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer"
                aria-label="Mi Cuenta o Contacto"
                title="Atención personalizada y pedidos"
              >
                <User className="h-5 w-5 stroke-[1.75]" />
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2 text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer flex items-center"
                aria-label="Bolsa de compras"
              >
                <ShoppingBag className="h-5 w-5 stroke-[1.75]" />
                {cartCount > 0 ? (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[10px] font-bold text-[#FFFDF9]">
                    {cartCount}
                  </span>
                ) : (
                  <span className="text-[11px] font-ui font-medium text-[#6B5E54] ml-1 hidden sm:inline">
                    0
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#FFFDF9] py-6 px-6 shadow-2xl border-r border-[#E5D7C5] z-10">
            <div className="flex items-center justify-between border-b border-[#E5D7C5] pb-4">
              <div>
                <span className="font-script text-2xl text-[#1A1A1A]">Liorah Studio</span>
                <p className="font-ui text-[10px] uppercase tracking-wider text-[#C5A059]">
                  Menú Principal
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#6B5E54] hover:text-[#1A1A1A] cursor-pointer rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-3 font-ui text-xs font-medium uppercase tracking-[0.14em] text-[#1A1A1A]">
              <a
                href="#mas-elegidos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Los más elegidos</span>
                <span className="text-[#C5A059]">♥</span>
              </a>
              <a
                href="#que-podes-sumar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>¿Qué podés sumar?</span>
                <span className="text-xs text-stone-400">12 funciones</span>
              </a>
              <a
                href="#tabla-comparativa"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Propuestas & Precios</span>
                <span className="text-xs text-[#C5A059] font-bold">$50k / $70k</span>
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>¿Cómo funciona?</span>
                <span className="text-xs text-stone-400">3 pasos</span>
              </a>
              <a
                href="#novedades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Novedades & Muestras en Vivo</span>
                <span className="text-[10px] bg-[#FAF6F0] text-[#C5A059] px-2 py-0.5 rounded-full border border-[#E5D7C5]">
                  8 Activos
                </span>
              </a>
              <a
                href="#clientes-felices"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-[#FAF6F0] flex items-center justify-between transition-colors"
              >
                <span>Clientes Felices</span>
                <span className="text-xs text-[#C5A059]">★★★★★</span>
              </a>
            </nav>

            <div className="mt-auto border-t border-[#E5D7C5] pt-6 space-y-3 font-ui text-xs">
              <a
                href="https://wa.me/5491123456789?text=Hola%20LIORAH%20STUDIO!%20Deseo%20consultar%20por%20una%20invitación%20personalizada"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center gap-2 font-semibold hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
                <span>Escribinos al WhatsApp</span>
              </a>
              <p className="text-center text-[10px] text-[#6B5E54]">
                Atención directa con Jimena y equipo de diseño
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
