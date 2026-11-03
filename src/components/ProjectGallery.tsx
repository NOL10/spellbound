import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

/**
 * ProjectGallery Component
 * 
 * Features:
 * - Responsive masonry grid that adapts to content
 * - Perfect aspect ratio handling
 * - Smooth hover effects and transitions
 * - Mobile-optimized layout
 * - Proper image sizing and spacing
 */
export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  // Define layout patterns for different screen sizes
  const getGridLayout = (index: number, total: number) => {
    // Mobile: single column
    // Tablet: 2 columns with varied heights
    // Desktop: 3 columns with varied heights and a featured large first image
    
    if (total === 1) return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1';
    if (total === 2) return index === 0 ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2' : 'col-span-1 md:col-span-2 lg:col-span-1 row-span-2';
    
    // For 3+ images: featured layout
    if (index === 0) return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2';
    if (index === 1) return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
    if (index === 2) return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
    
    // Remaining images: equal distribution
    return 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1';
  };

  return (
    <section className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-eyebrow text-accent mb-3 uppercase tracking-wider">Visual Work</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight">
            Design in <span className="text-accent">action</span>
          </h2>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[280px] md:auto-rows-[300px] lg:auto-rows-[320px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`
                group relative overflow-hidden rounded-xl bg-muted border border-border/30
                transition-all duration-500 cursor-pointer
                hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20
                ${getGridLayout(idx, images.length)}
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
                    group-hover:scale-110
                  "
                />

                {/* Overlay Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/40 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* Image Counter Badge */}
                <div
                  className="
                    absolute top-4 right-4
                    bg-background/80 backdrop-blur-md
                    text-accent text-xs font-mono
                    px-3 py-1 rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  {idx + 1} of {images.length}
                </div>
              </div>

              {/* Decorative Border Glow on Hover */}
              <div
                className="
                  absolute inset-0 pointer-events-none
                  rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br from-accent/30 to-transparent
                  mix-blend-overlay
                "
              />
            </div>
          ))}
        </div>

        {/* Gallery Info */}
        <div className="mt-12 md:mt-16 flex items-center justify-between text-sm text-muted-foreground border-t border-border/30 pt-8">
          <p>
            Showcasing <span className="text-foreground font-medium">{images.length}</span> project moments
          </p>
          <p className="text-xs uppercase tracking-widest opacity-60">
            Hover to explore
          </p>
        </div>
      </div>
    </section>
  );
}
