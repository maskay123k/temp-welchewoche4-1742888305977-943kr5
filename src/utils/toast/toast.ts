import { toastConfig } from './config';
    import type { ToastOptions } from './types';

    export function showToast(options: ToastOptions = {}) {
      const toast = document.getElementById('toast');
      if (!toast) {
        console.error('Toast element not found.');
        return;
      }
      
      console.log('showToast called');
      
      const { duration = toastConfig.duration } = options;
      
      // Show toast
      toast.classList.remove(...toastConfig.classes.hidden.split(' '));
      toast.classList.add(...toastConfig.classes.visible.split(' '));
      
      // Hide toast after duration
      setTimeout(() => {
        toast.classList.remove(...toastConfig.classes.visible.split(' '));
        toast.classList.add(...toastConfig.classes.hidden.split(' '));
      }, duration);
    }
