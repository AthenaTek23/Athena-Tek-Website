import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white/[0.02] border-white/[0.05]',
  featured: 'bg-gradient-to-br from-primary-500/10 to-primary-500/[0.02] border-primary-500/20',
  dark: 'bg-gradient-to-br from-primary-500 to-primary-600 border-transparent',
  glass: 'bg-white/[0.03] backdrop-blur-sm border-white/[0.08]',
};

const sizes = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export default function Card({
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
  const hoverClasses = hover ? 'hover:bg-white/[0.04] hover:border-white/[0.08]' : '';
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
}

// Subcomponents for structured card layouts
Card.Header = function CardHeader({ children, className = '' }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({ children, className = '' }) {
  return <h3 className={`text-xl font-bold text-white ${className}`}>{children}</h3>;
};

Card.Description = function CardDescription({ children, className = '' }) {
  return <p className={`text-sm text-dark-400 ${className}`}>{children}</p>;
};

Card.Content = function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }) {
  return <div className={`mt-4 pt-4 border-t border-white/5 ${className}`}>{children}</div>;
};
