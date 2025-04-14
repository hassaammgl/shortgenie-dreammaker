
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground transition-all" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-all" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
