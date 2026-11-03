import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

/**
 * ProjectGallery Component
 * 
 * Features:
 * - Advanced masonry layout with intelligent positioning
 * - Beautiful alternating patterns
 * - Optimal image sizing and proportions
 * - Full responsive support
 */
export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  // Advanced layout logic for better visual composition
  const getImageLayout = (index: number, total: number) => {
    // Mobile: single column
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return {
        mobile: 'col-span-1 h-64 sm:h-56',
        tablet: '',
        desktop: ''
      };
    }

    // Tablet: 2 columns
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      if (index === 0) return { mobile: '', tablet: 'md:col-span-2 md:h-96', desktop: '' };
      if (index === 1) return { mobile: '', tablet: 'md:col-span-2 md:h-80', desktop: '' };
      return { mobile: '', tablet: 'md:col-span-1 md:h-72', desktop: '' };
    }

    // Desktop: Advanced masonry
    // Pattern: large image (1st), then 2 small, then 2 medium, then fills
    if (total === 1) {
      return {
        mobile: '',
        tablet: '',
        desktop: 'lg:col-span-6 lg:row-span-2 lg:h-[540px]'
      };
    }
    
    if (total === 2) {
      if (index === 0) return { mobile: '', tablet: '', desktop: 'lg:col-span-4 lg:row-span-2 lg:h-[540px]' };
      return { mobile: '', tablet: '', desktop: 'lg:col-span-2 lg:row-span-2 lg:h-[540px]' };
    }

    // 3+ images: sophisticated layout
    if (index === 0) return { mobile: '', tablet: '', desktop: 'lg:col-span-4 lg:row-span-2 lg:h-[540px]' }; // Large hero
    if (index === 1) return { mobile: '', tablet: '', desktop: 'lg:col-span-2 lg:row-span-1 lg:h-[260px]' }; // Small top
    if (index === 2) return { mobile: '', tablet: '', desktop: 'lg:col-span-2 lg:row-span-1 lg:h-[260px]' }; // Small top
    if (index === 3) return { mobile: '', tablet: '', desktop: 'lg:col-span-3 lg:row-span-1 lg:h-[260px]' }; // Medium
    if (index === 4) return { mobile: '', tablet: '', desktop: 'lg:col-span-3 lg:row-span-1 lg:h-[260px]' }; // Medium
    if (index === 5) return { mobile: '', tablet: '', desktop: 'lg:col-span-2 lg:row-span-1 lg:h-[260px]' }; // Small
    if (index === 6) return { mobile: '', tablet: '', desktop: 'lg:col-span-4 lg:row-span-1 lg:h-[260px]' }; // Large
    
    // Remaining: cycle through 2-col, 3-col, 2-col pattern
    const pattern = (index - 7) % 3;
    if (pattern === 0) return { mobile: '', tablet: '', desktop: 'lg:col-span-2 lg:row-span-1 lg:h-[260px]' };
    if (pattern === 1) return { mobile: '', tablet: '', desktop: 'lg:col-span-3 lg:row-span-1 lg:h-[260px]' };
    return { mobile: '', tablet: '', desktop: 'lg:col-span-1 lg:row-span-1 lg:h-[260px]' };
  };

  const getMobileHeight = (index: number) => {
    return index === 0 ? 'h-64' : 'h-56';
  };

  const getTabletHeight = (index: number, total: number) => {
    if (index === 0) return 'md:col-span-2 md:h-96';
    if (index === 1) return 'md:col-span-2 md:h-80';
    return 'md:col-span-1 md:h-72';
  };

  const getDesktopLayout = (index: number, total: number) => {
    if (total === 1) return 'lg:col-span-6 lg:row-span-2 lg:h-[540px]';
    if (total === 2) return index === 0 ? 'lg:col-span-4 lg:row-span-2 lg:h-[540px]' : 'lg:col-span-2 lg:row-span-2 lg:h-[540px]';
    
    // 3+ images pattern
    if (index === 0) return 'lg:col-span-4 lg:row-span-2 lg:h-[540px]';
    if (index === 1) return 'lg:col-span-2 lg:row-span-1 lg:h-[260px]';
    if (index === 2) return 'lg:col-span-2 lg:row-span-1 lg:h-[260px]';
    if (index === 3) return 'lg:col-span-3 lg:row-span-1 lg:h-[260px]';
    if (index === 4) return 'lg:col-span-3 lg:row-span-1 lg:h-[260px]';
    if (index === 5) return 'lg:col-span-2 lg:row-span-1 lg:h-[260px]';
    if (index === 6) return 'lg:col-span-4 lg:row-span-1 lg:h-[260px]';
    
    // Cycling pattern for remaining images
    const pattern = (index - 7) % 3;
    if (pattern === 0) return 'lg:col-span-2 lg:row-span-1 lg:h-[260px]';
    if (pattern === 1) return 'lg:col-span-3 lg:row-span-1 lg:h-[260px]';
    return 'lg:col-span-1 lg:row-span-1 lg:h-[260px]';
  };

  return (
    <section className="border-t border-border/60 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-full lg:max-w-[1800px] px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-10 md:mb-16 lg:mb-20">
          <p className="text-eyebrow text-accent mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">Visual Work</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
            Design in <span className="text-accent">action</span>
          </h2>
        </div>

        {/* Advanced Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 auto-rows-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`
                group relative overflow-hidden rounded-lg md:rounded-xl bg-muted border border-border/30
                transition-all duration-500 active:scale-95 md:active:scale-100 cursor-pointer
                md:hover:border-accent/60 md:hover:shadow-xl md:hover:shadow-accent/30
                ${getMobileHeight(idx)}
                ${getTabletHeight(idx, images.length)}
                ${getDesktopLayout(idx, images.length)}
              `}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
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

                {/* Image Counter Badge */}
                <div
                  className="
                    absolute top-2 md:top-4 right-2 md:right-4
                    bg-background/90 md:bg-background/80 backdrop-blur-md
                    text-accent text-xs font-mono
                    px-2 md:px-3 py-1 rounded-full
                    opacity-100 md:opacity-0 md:group-hover:opacity-100
                    transition-opacity duration-300
                    z-10
                  "
                >
                  {idx + 1}/{images.length}
                </div>
              </div>

              {/* Decorative Border Glow on Hover */}
              <div
                className="
                  absolute inset-0 pointer-events-none
                  rounded-lg md:rounded-xl
                  opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br from-accent/40 to-transparent
                  mix-blend-overlay
                  hidden md:block
                "
              />
            </div>
          ))}
        </div>

        {/* Gallery Info */}
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
