import { memo } from 'react';

const Skeleton = memo(function Skeleton({
  className = '',
  variant = 'default',
  width,
  height,
}) {
  const variants = {
    default: 'rounded',
    circle: 'rounded-full',
    card: 'rounded-2xl',
    text: 'rounded h-4',
    heading: 'rounded h-8',
  };

  const style = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`animate-pulse bg-white/5 ${variants[variant]} ${className}`}
      style={style}
    />
  );
});

// Preset skeleton components for common use cases
Skeleton.Text = function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
};

Skeleton.Card = function SkeletonCard({ className = '' }) {
  return (
    <div className={`p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl ${className}`}>
      <Skeleton variant="circle" className="w-12 h-12 mb-4" />
      <Skeleton variant="heading" className="w-3/4 mb-4" />
      <Skeleton.Text lines={3} />
    </div>
  );
};

Skeleton.Avatar = function SkeletonAvatar({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  return <Skeleton variant="circle" className={`${sizes[size]} ${className}`} />;
};

Skeleton.Image = function SkeletonImage({ aspectRatio = '16/9', className = '' }) {
  return (
    <div
      className={`w-full animate-pulse bg-white/5 rounded-xl ${className}`}
      style={{ aspectRatio }}
    />
  );
};

export default Skeleton;
