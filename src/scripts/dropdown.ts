// Client-side only code
export function setupDropdowns() {
  if (typeof document === 'undefined') return;

  document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-button');
    const content = dropdown.querySelector('.dropdown-content');
    
    if (!button || !content) return;
    
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', (!isExpanded).toString());
      content.classList.toggle('hidden');
      
      // Close other dropdowns
      document.querySelectorAll('[data-dropdown]').forEach(other => {
        if (other !== dropdown) {
          const otherButton = other.querySelector('.dropdown-button');
          const otherContent = other.querySelector('.dropdown-content');
          if (otherButton && otherContent) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherContent.classList.add('hidden');
          }
        }
      });
    });
  });
  
  // Close when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-button');
      const content = dropdown.querySelector('.dropdown-content');
      if (button && content) {
        button.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
      }
    });
  });
  
  // Close when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const content = dropdown.querySelector('.dropdown-content');
        if (button && content) {
          button.setAttribute('aria-expanded', 'false');
          content.classList.add('hidden');
        }
      });
    }
  });
}
