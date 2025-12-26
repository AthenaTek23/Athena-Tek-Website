import { memo, useState } from 'react';
import { motion } from 'framer-motion';

const overlayVariants = {
  none: '',
  subtle: 'banner-overlay-subtle',
  default: 'banner-overlay',
};

const BannerImage = memo(function BannerImage({
  src,
  alt,
  overlay = 'none',
  className = '',
  imageClassName = '',
  loading = 'lazy',
  priority = false,
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`banner-container bg-dark-950 ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-dark-800" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
          <span className="text-dark-500 text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`banner-image ${imageClassName}`}
      />

      {/* Optional overlay */}
      {overlay !== 'none' && <div className={overlayVariants[overlay]} />}
    </div>
  );
});

export default BannerImage;
