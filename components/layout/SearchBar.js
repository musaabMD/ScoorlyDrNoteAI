import { Search } from 'lucide-react';

/**
 * SearchBar - Reusable search input component
 * 
 * Features:
 * - Configurable styling (light/dark variants)
 * - Consistent search icon
 * - Customizable placeholder text
 * - Handles input change
 *
 * @param {Object} props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Function to handle search input changes
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.variant - Visual style variant ('default', 'hero', 'transparent')
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search...",
  variant = "default",
  className = ""
}) {
  // Style variants
  const variants = {
    default: {
      container: "relative w-full",
      icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5",
      input: "w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    },
    hero: {
      container: "relative w-full",
      icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5",
      input: "w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
    },
    transparent: {
      container: "relative w-full",
      icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5",
      input: "w-full pl-10 pr-4 py-3 bg-transparent rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    }
  };
  
  const styles = variants[variant] || variants.default;
  
  return (
    <div className={`${styles.container} ${className}`}>
      <Search className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}