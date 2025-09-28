// Performance optimization utilities

// Check if device has reduced motion preference
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get animation config based on user preference
export const getAnimationConfig = (defaultConfig: any) => {
  if (prefersReducedMotion()) {
    return {
      ...defaultConfig,
      duration: 0.01,
      transition: { duration: 0.01 }
    };
  }
  return defaultConfig;
};

// Debounce function to limit function calls
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function to limit function calls
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Batch DOM operations to prevent layout thrashing
export const batchDOMOperations = (operations: (() => void)[]) => {
  requestAnimationFrame(() => {
    operations.forEach(operation => operation());
  });
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Lazy load non-critical CSS
export const loadCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    link.media = 'all';
  };
  document.head.appendChild(link);
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize scroll performance
export const optimizeScroll = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Batch scroll-related DOM updates here
    ticking = false;
  };
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
  
  return onScroll;
};

// Detect mobile device
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Optimize touch events for mobile
export const optimizeTouchEvents = () => {
  if (isMobileDevice()) {
    // Add passive event listeners for better scroll performance
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
  }
};

// Intersection Observer with mobile optimizations
export const createOptimizedObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
  const defaultOptions = {
    rootMargin: isMobileDevice() ? '50px' : '100px',
    threshold: isMobileDevice() ? 0.1 : 0.3,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Optimize images for mobile
export const getOptimizedImageSrc = (src: string, isMobile: boolean = false) => {
  if (isMobile && src.includes('pexels.com')) {
    // Use smaller image sizes for mobile
    return src.replace('w=1920', 'w=800').replace('w=1200', 'w=600');
  }
  return src;
};