import { showToast } from './toast/toast';
    import type { ToastType } from './types';

    export async function copyToClipboard(text: string, type: ToastType = 'emoji') {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        console.error('Clipboard API not supported in this browser.');
        return;
      }
      
      try {
        await navigator.clipboard.writeText(text);
        showToast({ type });
      } catch (error) {
        console.error('Failed to copy text:', error);
      }
    }
