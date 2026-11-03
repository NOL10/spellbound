import { ImgHTMLAttributes } from 'react';
import { getOptimizedImageProps } from '@/lib/image-utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding'> {
  src: string;
  alt: string;
  priority?: boolean;
  placeholderColor?: string;
}

/**
 * OptimizedImage component for best performance
 * 
 * Features:
 * - Native lazy loading for off-screen images
 * - Async image decoding to prevent main thread blocking
 * - Placeholder color support for perceived performance
 * - Auto-sized based on available props
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  placeholderColor = '#f5f5f5',
  className = '',
  ...props
}: OptimizedImageProps) {
  const imageProps = getOptimizedImageProps(alt, {
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
  });

  return (
    <img
      src={src}
      alt={alt}
      {...imageProps}
      className={className}
      style={{
        backgroundColor: placeholderColor,
        ...props.style,
      }}
      {...props}
    />
  );
}
