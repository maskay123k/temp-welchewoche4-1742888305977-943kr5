interface SearchResult {
      title: string;
      description: string;
      url: string;
      type: 'emoji' | 'text-styler' | 'lenny-face' | 'pagefind';
    }

    declare global {
      interface Window {
        pagefind: any;
      }
    }

    export async function searchContent(query: string, language: string): Promise<SearchResult[]> {
      query = query.toLowerCase();
      
      try {
        // Load Pagefind if not already loaded
        if (!window.pagefind) {
          await loadPagefind();
        }
        
        // Search with Pagefind
        const search = await window.pagefind.search(query);
        
        if (!search?.results?.length) {
          return await searchCustomContent(query, language);
        }
        
        // Transform and filter results
        const results = await Promise.all(
          search.results
            .map(async (result: any) => {
              const data = await result.data();
              
              // Check if this result is for the current language
              const resultLang = data.filters?.language;
              if (resultLang && resultLang !== language) {
                return null;
              }
              
              return {
                title: data.meta?.title || '',
                description: data.excerpt || '',
                url: data.url || '',
                type: 'pagefind'
              };
            })
        );
        
        // Filter out null results and combine with custom search
        const validResults = results.filter((r): r is SearchResult => r !== null);
        const customResults = await searchCustomContent(query, language);
        
        return [...validResults, ...customResults];
      } catch (error) {
        console.error('Search error:', error);
        return searchCustomContent(query, language);
      }
    }

    async function loadPagefind(): Promise<void> {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = '/pagefind/pagefind.js';
        script.onload = () => {
          if (window.pagefind) {
            resolve();
          } else {
            reject(new Error('Failed to load Pagefind'));
          }
        };
        script.onerror = () => reject(new Error('Failed to load Pagefind script'));
        document.head.appendChild(script);
      });
    }

    async function searchCustomContent(query: string, language: string): Promise<SearchResult[]> {
      // Custom search results with language filtering
      const results: SearchResult[] = [
        {
          title: 'Calendar Week',
          description: 'View the current calendar week',
          url: `/${language}/kalenderwoche`,
          type: 'lenny-face'
        }
      ];
      
      return results.filter(
        result =>
          result.title.toLowerCase().includes(query) ||
          result.description.toLowerCase().includes(query)
      );
    }
