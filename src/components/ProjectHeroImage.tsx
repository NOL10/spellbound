import { HTMLAttributes } from 'react';

interface ProjectHeroImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  title?: string;
}

/**
 * ProjectHeroImage Component
 * 
 * Optimized for all devices:
 * - Mobile: 3:2 aspect ratio (wider) for better mobile viewing
 * - Desktop: 16:9 aspect ratio for cinematic feel
 * - Perfect loading and transitions
 * - Touch-friendly on mobile devices
 */
export function ProjectHeroImage({ src, alt, title, className = '', ...props }: ProjectHeroImageProps) {
  return (
    <div 
      className="overflow-hidden rounded-lg md:rounded-xl border border-border/30 bg-muted group cursor-pointer active:scale-95 md:active:scale-100 transition-transform" 
      {...props}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          title={title}
          loading="eager"
          decoding="async"
          className={`
            w-full h-auto object-cover
            transition-transform duration-700 ease-out
            md:group-hover:scale-105
            active:scale-105 md:active:scale-100
            ${className}
          `}
          style={{ 
            aspectRatio: 'auto',
            minHeight: '280px'
          }}
        />

        {/* Subtle overlay for depth - visible on mobile */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-transparent via-transparent to-black/20
            opacity-40 md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />

        {/* Shine effect on hover - desktop only */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            opacity-0 md:group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none
            hidden md:block
          "
        />
      </div>
    </div>
  );
}
