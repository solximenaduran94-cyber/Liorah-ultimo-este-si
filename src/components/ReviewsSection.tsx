import React from 'react';
import { Heart, Instagram } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        '“Quedó hermosa, tal cual la imaginábamos. Todos nos dijeron lo linda y práctica que estaba. ¡Gracias por tanta onda y dedicación!”',
      names: 'JULIETA Y MARIANO',
      event: 'Nuestra Boda',
    },
    {
      quote:
        '“Gracias por la paciencia, el amor en cada detalle y la velocidad. La invitación quedó 100% soñada, a la altura de una noche única.”',
      names: 'ROCÍO & SEBASTIÁN',
      event: 'Casamiento',
    },
    {
      quote:
        '“Los invitados quedaron fascinados con el mapa interactivo y la música de fondo al abrirla. Una genialidad total, gracias Jimena!”',
      names: 'FAMILIA MARTÍNEZ',
      event: 'Mis XV Años · Valentina',
    },
  ];

  return (
    <section id="clientes-felices" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#E5D7C5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Title matching Page 6 */}
        <div className="text-center mb-14">
          <h2 className="font-romantic text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-wide">
            Clientes Felices
          </h2>
          <div className="w-10 h-[1px] bg-[#C5A059] mx-auto mt-2.5" />
        </div>

        {/* Testimonials in delicate warm editorial typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between text-center bg-[#FAF6F0] p-6 sm:p-8 rounded-3xl border border-[#E5D7C5]/70 shadow-xs"
            >
              <p className="font-romantic italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed mb-6">
                {item.quote}
              </p>

              <div>
                <div className="w-6 h-[1px] bg-[#C5A059] mx-auto mb-2" />
                <h4 className="font-prestige text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">
                  {item.names}
                </h4>
                <p className="font-ui text-[10px] uppercase tracking-wider text-[#A39589] mt-0.5">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout matching Page 6 */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 p-3 rounded-full hover:bg-[#FAF6F0] text-[#1A1A1A] transition-colors"
            aria-label="Instagram de Liorah Studio"
          >
            <Instagram className="w-6 h-6 stroke-[1.5]" />
            <span className="font-ui text-xs font-semibold tracking-wider text-[#6B5E54]">
              @liorah.site
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
