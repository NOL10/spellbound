import { HTMLAttributes } from 'react';

interface ProjectHeroImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  title?: string;
}

/**
 * ProjectHeroImage Component
 * 
 * Optimized hero image display with:
 * - Perfect aspect ratio (16:9) for cinematic feel
 * - Smooth loading transitions
 * - Hover scale effect
 * - Proper spacing and borders
 * - Mobile responsive
 */
export function ProjectHeroImage({ src, alt, title, className = '', ...props }: ProjectHeroImageProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/30 bg-muted group cursor-pointer" {...props}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={src}
          alt={alt}
          title={title}
          loading="eager"
          decoding="async"
          className={`
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
            ${className}
          `}
        />

        {/* Subtle overlay for depth */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-transparent via-transparent to-black/10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />

        {/* Shine effect on hover */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none
            translate-x-[-100%] group-hover:translate-x-[100%]
          "
          style={{
            animation: 'none',
          }}
        />
      </div>
    </div>
  );
}
