// Navigation utilities
export function handleCategoryScroll() {
  function scrollToCategory() {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  // Scroll on initial load
  scrollToCategory();

  // Scroll when hash changes
  window.addEventListener('hashchange', scrollToCategory);
}

export function createCategoryLink(category: string, language: string, type: 'emoji' | 'text-style'): string {
  const base = `/${language}`;
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  
  if (type === 'text-style') {
    return `${base}/text-styler#${slug}`;
  }
  
  return `${base}#${slug}`;
}

export function getCategoryFromHash(hash: string): string | null {
  return hash ? hash.slice(1) : null;
}
