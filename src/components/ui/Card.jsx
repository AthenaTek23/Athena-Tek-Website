import { memo } from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white border-light-300 shadow-sm',
  featured: 'bg-gradient-to-br from-primary-navy/5 to-white border-primary-navy/20 shadow-sm',
  dark: 'bg-gradient-to-br from-primary-navy to-primary-navy/90 border-transparent text-white',
  glass: 'bg-white/90 backdrop-blur-sm border-light-300 shadow-sm',
};

const sizes = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const Card = memo(function Card({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  className = '',
  onClick,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div;

  const baseClasses = 'border rounded-2xl transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-md hover:border-light-400' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <Component
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
});

// Subcomponents for structured card layouts
Card.Header = function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({ children, className = '' }) {
  return <h3 className={`text-xl font-bold text-light-900 ${className}`}>{children}</h3>;
};

Card.Description = function CardDescription({ children, className = '' }) {
  return <p className={`text-sm text-light-600 ${className}`}>{children}</p>;
};

Card.Content = function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }) {
  return <div className={`mt-4 pt-4 border-t border-light-200 ${className}`}>{children}</div>;
};

export default Card;
