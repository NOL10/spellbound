/**
 * Image optimization utilities
 * Provides utilities for optimal image loading performance
 */

export const imageLoadingConfig = {
  // Use native lazy loading for below-the-fold images
  lazy: true,
  // Use async decoding to prevent blocking main thread
  async: true,
};

/**
 * Generate optimized image attributes for better performance
 */
export function getOptimizedImageProps(alt: string, options?: {
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  width?: number;
  height?: number;
}) {
  return {
    alt,
    loading: options?.loading ?? 'lazy',
    decoding: options?.decoding ?? 'async',
    ...(options?.width && { width: options.width }),
    ...(options?.height && { height: options.height }),
  };
}

/**
 * CSS for blur-up placeholder effect
 * Add this class to image containers for better perceived performance
 */
export const blurUpStyle = `
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

/**
 * Get color palette from image for placeholder
 * Returns a simple solid background color as fallback
 */
export function getPlaceholderColor(projectName: string): string {
  const colors: Record<string, string> = {
    rara: '#f5f5f5',
    donnaCucina: '#fef3e2',
    lakehouse: '#e8f0e8',
    greySoul: '#f0f0f0',
    jambajice: '#fff8f0',
    husnaRahman: '#f5f5f5',
    chaitanya: '#f8f8f8',
    mrda: '#f0f0f0',
    ciu: '#f5f5f5',
  };
  
  return colors[projectName] || '#f8f8f8';
}
