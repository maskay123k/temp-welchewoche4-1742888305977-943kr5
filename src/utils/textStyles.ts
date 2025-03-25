import { textStyles } from './textTransformers';
import { copyToClipboard } from './clipboard';

export function setupTextStyler() {
  const input = document.getElementById('text-input') as HTMLTextAreaElement;
  const previewsContainer = document.getElementById('style-previews');
  const styleElements = document.querySelectorAll('.style-preview');

  if (!input || !styleElements.length) return;

  function updatePreviews(text: string) {
    styleElements.forEach(element => {
      const styledText = element.querySelector('.styled-text');
      if (!styledText) return;

      const styleName = element.querySelector('.text-sm')?.textContent;
      if (!styleName) return;

      // Find the style definition
      const style = textStyles
        .flatMap(category => category.styles)
        .find(s => s.name === styleName);

      if (style) {
        try {
          const transformed = style.transform(text);
          styledText.textContent = transformed;
        } catch (error) {
          console.error(`Error applying style ${styleName}:`, error);
          styledText.textContent = text;
        }
      }
    });
  }

  // Set up copy buttons
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const preview = (button as HTMLElement).closest('.style-preview');
      if (!preview) return;

      const text = preview.querySelector('.styled-text')?.textContent;
      if (text) {
        copyToClipboard(text, button as HTMLElement);
      }
    });
  });

  // Set up input handling
  let debounceTimeout: number;
  input.addEventListener('input', (e) => {
    const target = e.target as HTMLTextAreaElement;
    clearTimeout(debounceTimeout);
    debounceTimeout = window.setTimeout(() => {
      updatePreviews(target.value);
    }, 150);
  });

  // Initial preview with placeholder text
  updatePreviews(input.value || input.placeholder || 'Type something...');
}
