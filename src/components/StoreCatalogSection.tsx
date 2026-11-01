import React, { useState } from 'react';
import { StoreProductCard, StoreProductItem } from './StoreProductCard';
import { StoreCategory } from './StoreCategoriesNav';
import { LiorahPackageTier } from '../types';
import { SupportedCurrency } from '../utils/currency';

interface StoreCatalogSectionProps {
  selectedCategory: StoreCategory;
  currency?: SupportedCurrency;
  onBuyProduct: (product: StoreProductItem, tier: LiorahPackageTier) => void;
  onOpenLiveDemo: (product: StoreProductItem) => void;
}

export const STORE_PRODUCTS: StoreProductItem[] = [
  // 1. Greenery (Page 1 in InvitArte - Premium)
  {
    id: 'prod-greenery',
    name: 'Greenery',
    category: 'Boda',
    price: 70000,
    celebrant: 'Karen y Joaquín',
    date: '28.11.2026',
    coverImage: '/images/invitation_wedding_botanical_1793110946314.jpg',
    phoneImage: '/images/invitation_wedding_botanical_1793110946314.jpg',
    styleTag: 'Follaje botánico eucalipto con tipografía manuscrita y detalles dorados.',
    isBestseller: true,
  },

  // 4. Official Live Site: Celeste XV (Premium)
  {
    id: 'prod-celeste-xv',
    name: 'Celeste XV',
    category: '15 años',
    price: 70000,
    celebrant: 'Celeste',
    date: '20.12.2026',
    coverImage: '/images/sample_celeste_blue_quince_1793112043361.jpg',
    phoneImage: '/images/sample_celeste_blue_quince_1793112043361.jpg',
    liveUrl: 'https://misxv.celeste.liorah.site/',
    styleTag: 'Celeste real con destellos de nieve y cristal, ambientación de cuento de hadas.',
    isBestseller: true,
  },
  // 5. Official Live Site: Ariel & Cecilia (Premium)
  {
    id: 'prod-ariel-cecilia',
    name: 'Ariel & Cecilia',
    category: 'Boda',
    price: 70000,
    celebrant: 'Ariel & Cecilia',
    date: '14.02.2027',
    coverImage: '/images/sample_cecilia_ariel_wedding_1793112044080.jpg',
    phoneImage: '/images/sample_cecilia_ariel_wedding_1793112044080.jpg',
    liveUrl: 'https://arielycecilia.liorah.site/',
    styleTag: 'Follaje natural, tipografía romántica y confirmación personalizada de boda.',
    isBestseller: true,
  },
  // 9. Official Live Site: Xiomara XV (Premium)
  {
    id: 'prod-xiomara-xv',
    name: 'Xiomara XV',
    category: '15 años',
    price: 70000,
    celebrant: 'Xiomara',
    date: '05.12.2026',
    coverImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    phoneImage: '/images/sample_xiomara_emerald_quince_1793112043538.jpg',
    liveUrl: 'https://xiomara.misxv.liorah.site/',
    styleTag: 'Esmeralda imperial con corona en relieve de oro, elegancia nocturna y glamour.',
  },
  // 10. Official Live Site: Dariel (Premium)
  {
    id: 'prod-dariel',
    name: 'Dariel',
    category: 'Cumpleaños / Bautismo',
    price: 70000,
    celebrant: 'Dariel',
    date: '24.10.2026',
    coverImage: '/images/sample_darel_invitation_1793130335040.jpg',
    phoneImage: '/images/sample_darel_invitation_1793130335040.jpg',
    liveUrl: 'https://dariel.liorah.site/',
    styleTag: 'Azul navy profundo con tipografía en oro líquido y detalles de gala.',
  },
  // 11. Official Live Site: Olivia (Premium)
  {
    id: 'prod-olivia',
    name: 'Olivia',
    category: '15 años',
    price: 70000,
    celebrant: 'Olivia',
    date: '12.09.2026',
    coverImage: '/images/sample_olivia_invitation_1793130348223.jpg',
    phoneImage: '/images/sample_olivia_invitation_1793130348223.jpg',
    liveUrl: 'https://olivia.liorah.site/',
    styleTag: 'Acuarelas florales suaves en rosa pastel con reproductor y álbum de fotos.',
  },
  // 12. Official Live Site: Alma XV (Premium)
  {
    id: 'prod-alma-xv',
    name: 'Alma XV',
    category: '15 años',
    price: 70000,
    celebrant: 'Alma',
    date: '08.11.2026',
    coverImage: '/images/sample_alma_xv_invitation_1793130391587.jpg',
    phoneImage: '/images/sample_alma_xv_invitation_1793130391587.jpg',
    liveUrl: 'https://almaxv.liorah.site/',
    styleTag: 'Glamour en magenta vibrante y destellos de oro, estilo alta costura.',
  },
];

export const StoreCatalogSection: React.FC<StoreCatalogSectionProps> = ({
  selectedCategory,
  currency = 'ARS',
  onBuyProduct,
  onOpenLiveDemo,
}) => {
  // Read previously uploaded custom thumbnails from localStorage
  const [customThumbnails] = useState<Record<string, string>>(() => {
    try {
      const saved =
        localStorage.getItem('liorah_custom_thumbnails') ||
        localStorage.getItem('custom_thumbnails') ||
        localStorage.getItem('aura_custom_thumbnails');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Error reading saved custom thumbnails from localStorage', e);
      return {};
    }
  });

  // Filter products by selected category
  const filteredProducts = STORE_PRODUCTS.filter((p) => {
    if (selectedCategory === 'todos') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="mas-elegidos" className="py-14 sm:py-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title matching Page 1 */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-romantic text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-wide">
            Los más elegidos
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-3" />
        </div>

        {/* 2 or 3-Column Product Grid matching Page 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {filteredProducts.map((prod) => (
            <StoreProductCard
              key={prod.id}
              product={prod}
              currency={currency}
              customImage={customThumbnails[prod.id]}
              onBuy={onBuyProduct}
              onOpenDemo={onOpenLiveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
