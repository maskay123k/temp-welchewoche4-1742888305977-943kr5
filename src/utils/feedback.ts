export function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  
  setTimeout(() => {
    toast.style.transform = 'translateY(100%)';
    toast.style.opacity = '0';
  }, 2000);
}

export function showCopySuccess(button: HTMLElement) {
  button.classList.add('text-[var(--color-success)]');
  setTimeout(() => {
    button.classList.remove('text-[var(--color-success)]');
  }, 1000);
}
