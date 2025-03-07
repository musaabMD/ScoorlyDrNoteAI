import Header from '@/components/Header';

export default function AppsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
} 