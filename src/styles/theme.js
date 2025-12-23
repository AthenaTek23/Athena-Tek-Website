// Theme constants for Athena-Tek website
// Use these for consistent styling across components

export const colors = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#0a0f1a',
  },
  accent: {
    amber: '#f59e0b',
    indigo: '#6366f1',
    red: '#ef4444',
  },
};

export const spacing = {
  section: {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32',
  },
  container: {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  },
};

export const typography = {
  display: {
    xl: 'text-5xl md:text-6xl lg:text-7xl font-extrabold',
    lg: 'text-4xl md:text-5xl font-bold',
    md: 'text-3xl md:text-4xl font-bold',
    sm: 'text-2xl md:text-3xl font-bold',
  },
  body: {
    lg: 'text-lg text-dark-400',
    md: 'text-base text-dark-400',
    sm: 'text-sm text-dark-500',
  },
};

export const transitions = {
  fast: 'transition-all duration-150',
  base: 'transition-all duration-200',
  slow: 'transition-all duration-300',
};

// Navigation items
export const navItems = [
  { path: '/', label: 'Home' },
  { path: '/network', label: 'Network' },
  { path: '/ted', label: 'TED' },
  { path: '/training', label: 'Live Training' },
  { path: '/te', label: 'T&E' },
  { path: '/ai', label: 'AI Ecosystem' },
  //{ path: '/partners', label: 'Partners' }, //RichNote: Commenting out this line removes the Partners from the main navigation.
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About' },
  { path: '/news', label: 'Newsroom' },
];

// Company information
export const companyInfo = {
  name: 'Athena-Tek',
  tagline: 'Network Focused. Solution Driven.',
  email: 'info@athena-tek.com',
  //pressEmail: 'press@athena-tek.com',
  location: 'Orlando, FL',
  founded: '2010',
};

export default {
  colors,
  spacing,
  typography,
  transitions,
  navItems,
  companyInfo,
};
