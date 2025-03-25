// Client-side only code
const THEME_KEY = 'preferred-theme';

type Theme = 'light' | 'dark';

export const themeStore = {
  get(): Theme {
    if (typeof window === 'undefined') return 'light';
    
    // Check localStorage
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored) return stored;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  },
  
  set(theme: Theme): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(THEME_KEY, theme);
    this.applyTheme(theme);
  },
  
  toggle(): void {
    const current = this.get();
    const next = current === 'light' ? 'dark' : 'light';
    this.set(next);
  },
  
  applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;
    
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  },
  
  initialize(): void {
    if (typeof window === 'undefined') return;
    
    // Apply theme on load
    const theme = this.get();
    this.applyTheme(theme);
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};
