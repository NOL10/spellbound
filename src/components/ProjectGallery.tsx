import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

/**
 * ProjectGallery Component
 * 
 * Features:
 * - Highly optimized mobile-first responsive grid
 * - Touch-friendly on mobile devices
 * - Perfect aspect ratio handling
 * - Smooth transitions and interactions
 * - Desktop masonry layout
 */
export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  // Define layout patterns for different screen sizes
  const getGridLayout = (index: number, total: number) => {
    // Mobile: all equal single column
    if (total === 1) return 'col-span-1';
    if (total === 2) return 'col-span-1';
    if (total <= 4) return 'col-span-1';
    
    // Tablet: 2 columns
    if (index < 2) return 'md:col-span-1';
    
    // Desktop: featured layout
    if (index === 0) return 'lg:col-span-2 lg:row-span-2';
    if (index === 1) return 'lg:col-span-1';
    if (index === 2) return 'lg:col-span-1';
    
    // Remaining images: equal distribution
    return 'col-span-1 md:col-span-1 lg:col-span-1';
  };

  const getMobileHeight = (index: number) => {
    // First image taller on mobile for better visual hierarchy
    return index === 0 ? 'h-64' : 'h-56';
  };

  const getTabletHeight = (index: number) => {
    // Alternating heights for visual interest on tablet
    if (index === 0) return 'md:h-80';
    return 'md:h-72';
  };

  return (
    <section className="border-t border-border/60 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-10">
        {/* Section Header - Mobile Optimized */}
        <div className="mb-10 md:mb-16 lg:mb-20">
          <p className="text-eyebrow text-accent mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">Visual Work</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
            Design in <span className="text-accent">action</span>
          </h2>
        </div>

        {/* Mobile-First Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 auto-rows-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`
                group relative overflow-hidden rounded-lg md:rounded-xl bg-muted border border-border/30
                transition-all duration-500 active:scale-95 md:active:scale-100 cursor-pointer
                md:hover:border-accent/60 md:hover:shadow-lg md:hover:shadow-accent/20
                ${getGridLayout(idx, images.length)}
                ${getMobileHeight(idx)}
                ${getTabletHeight(idx)}
              `}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setTouchedIndex(idx)}
              onTouchEnd={() => setTouchedIndex(null)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={img}
                  alt={`${projectTitle} gallery image ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    md:group-hover:scale-110
                    active:scale-110 md:active:scale-100
                  "
                />

                {/* Overlay Gradient - Always visible on mobile */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/50 via-black/20 to-transparent
                    opacity-40 md:opacity-0 md:group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* Image Counter Badge - Always visible */}
                <div
                  className="
                    absolute top-2 md:top-4 right-2 md:right-4
                    bg-background/90 md:bg-background/80 backdrop-blur-md
                    text-accent text-xs font-mono
                    px-2 md:px-3 py-1 rounded-full
                    opacity-100 md:opacity-0 md:group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  {idx + 1}/{images.length}
                </div>
              </div>

              {/* Decorative Border Glow on Hover - Desktop only */}
              <div
                className="
                  absolute inset-0 pointer-events-none
                  rounded-lg md:rounded-xl
                  opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br from-accent/30 to-transparent
                  mix-blend-overlay
                  hidden md:block
                "
              />
            </div>
          ))}
        </div>

        {/* Gallery Info - Mobile Optimized */}
        <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground border-t border-border/30 pt-6 md:pt-8">
          <p className="text-foreground font-medium">
            <span className="text-accent">{images.length}</span> project{images.length !== 1 ? 's' : ''}
          </p>
          <p className="hidden md:block uppercase tracking-widest opacity-60 text-xs">
            Hover to explore
          </p>
          <p className="md:hidden text-xs opacity-60">
            Tap images to interact
          </p>
        </div>
      </div>
    </section>
  );
}
