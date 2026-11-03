import { HTMLAttributes } from 'react';

interface ProjectHeroImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  title?: string;
}

/**
 * ProjectHeroImage Component
 * 
 * Premium hero image with:
 * - Optimal sizing for impact
 * - 16:9 cinematic aspect ratio on desktop
 * - Responsive sizing across all devices
 * - Beautiful hover and transition effects
 */
export function ProjectHeroImage({ src, alt, title, className = '', ...props }: ProjectHeroImageProps) {
  return (
    <div 
      className="overflow-hidden rounded-lg md:rounded-2xl border border-border/30 bg-muted group cursor-pointer active:scale-95 md:active:scale-100 transition-transform" 
      {...props}
    >
      <div 
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '16 / 9',
          minHeight: '320px'
        }}
      >
        <img
          src={src}
          alt={alt}
          title={title}
          loading="eager"
          decoding="async"
          className={`
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            md:group-hover:scale-105
            active:scale-105 md:active:scale-100
            ${className}
          `}
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

        {/* Premium glow border on hover */}
        <div
          className="
            absolute inset-0 pointer-events-none
            rounded-lg md:rounded-2xl
            opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-br from-accent/40 to-transparent
            mix-blend-overlay
            hidden md:block
          "
        />
      </div>
    </div>
  );
}
