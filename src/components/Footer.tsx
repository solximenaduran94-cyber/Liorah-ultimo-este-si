import React from 'react';
import { Instagram, MessageCircle, ChevronDown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFDF9] text-[#1A1A1A] pt-12 pb-16 border-t border-[#E5D7C5] font-ui">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 pb-12 border-b border-[#E5D7C5]">
          {/* Column 1: Categorías & Navegación */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5D7C5]/60 sm:border-none sm:pb-0">
              <h3 className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                CATEGORÍAS
              </h3>
              <ChevronDown className="w-4 h-4 text-[#A39589] sm:hidden" />
            </div>

            <ul className="space-y-2 text-xs text-[#6B5E54]">
              <li>
                <a href="/" className="hover:text-[#C5A059] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#mas-elegidos" className="hover:text-[#C5A059] transition-colors">
                  Productos & Invitaciones Web
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#C5A059] transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#tabla-comparativa" className="hover:text-[#C5A059] transition-colors">
                  Propuestas & Precios
                </a>
              </li>
              <li>
                <a href="#clientes-felices" className="hover:text-[#C5A059] transition-colors">
                  Opiniones de clientes
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#C5A059] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Contacto */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5D7C5]/60 sm:border-none sm:pb-0">
              <h3 className="font-prestige text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                CONTACTÁNOS
              </h3>
              <ChevronDown className="w-4 h-4 text-[#A39589] sm:hidden" />
            </div>

            <ul className="space-y-2 text-xs text-[#6B5E54]">
              <li>
                <a
                  href="https://wa.me/5491123456789?text=Hola%20LIORAH%20STUDIO!%20Quisiera%20consultar%20por%20una%20invitación%20personalizada"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+54 9 11 2345 6789</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@liorah.site"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  contacto@liorah.site
                </a>
              </li>
              <li>
                <a
                  href="mailto:jimenagloop.ad@gmail.com"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  jimenagloop.ad@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>@liorah.site</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Consumer Rights matching Page 6 */}
        <div className="pt-8 text-center text-[11px] text-[#A39589] space-y-2">
          <p>
            Copyright Liorah Studio - 27317569543 - 2026. Todos los derechos reservados.
          </p>
          <p>
            Defensa de las y los consumidores.{' '}
            <a
              href="https://autogestion.produccion.gob.ar/consumidores"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#1A1A1A]"
            >
              Para reclamos ingresá acá.
            </a>
          </p>
          <p>
            <button
              type="button"
              onClick={() => alert('Para ejercer tu derecho de arrepentimiento, escribinos por WhatsApp o a contacto@liorah.site con tu número de pedido.')}
              className="underline text-[#6B5E54] hover:text-[#1A1A1A] cursor-pointer"
            >
              Botón de arrepentimiento
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};
