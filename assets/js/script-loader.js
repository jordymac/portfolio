/**
 * Script Template System
 * Manages common scripts across all pages
 * 
 * USAGE:
 * 1. In HTML head: <script src="assets/js/head-scripts.js"></script>
 * 2. Before closing body: <script src="assets/js/script-loader.js"></script>
 * 
 * TO ADD NEW SCRIPTS:
 * 1. For head scripts: Edit head-scripts.js
 * 2. For other scripts: Add to the appropriate array below:
 *    - headScripts: loaded in <head>
 *    - navigationScripts: loaded after nav 
 *    - footerScripts: loaded before closing </body>
 * 
 * SCRIPT CONFIG FORMAT:
 * External: { type: 'external', src: 'path/to/script.js', async: true }
 * Inline: { type: 'inline', content: 'javascript code here' }
 * 
 * EXAMPLE - Adding a new script:
 * ScriptLoader.addScript('footerScripts', {
 *   type: 'external',
 *   src: 'https://example.com/new-script.js',
 *   async: true
 * });
 */

const ScriptLoader = {
  // Head scripts - loaded in <head>
  headScripts: [
    // Google Tag Manager
    {
      type: 'inline',
      content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MFB4R9H');`
    },
    // Wistia Player
    {
      type: 'external',
      src: 'https://fast.wistia.net/player.js',
      async: true
    }
  ],

  // Navigation scripts - loaded after nav
  navigationScripts: [
    {
      type: 'external',
      src: '/assets/js/nav.js'
    }
  ],

  // Footer scripts - loaded before closing body
  footerScripts: [
    {
      type: 'external',
      src: '/assets/js/jquery.min.js'
    },
    {
      type: 'external', 
      src: '/assets/js/jquery.scrolly.min.js'
    },
    {
      type: 'external',
      src: '/assets/js/browser.min.js'
    },
    {
      type: 'external',
      src: '/assets/js/breakpoints.min.js'
    },
    {
      type: 'external',
      src: '/assets/js/util.js'
    },
    {
      type: 'external',
      src: '/assets/js/main.js'
    }
  ],

  // Helper function to create script element
  createScript(scriptConfig, basePath = '') {
    const script = document.createElement('script');
    
    if (scriptConfig.type === 'external') {
      script.src = scriptConfig.src.startsWith('/') ? scriptConfig.src : basePath + scriptConfig.src;
      if (scriptConfig.async) script.async = true;
      if (scriptConfig.defer) script.defer = true;
    } else if (scriptConfig.type === 'inline') {
      script.innerHTML = scriptConfig.content;
    }
    
    return script;
  },

  // Load head scripts
  loadHeadScripts(basePath = '') {
    const head = document.head;
    this.headScripts.forEach(scriptConfig => {
      head.appendChild(this.createScript(scriptConfig, basePath));
    });
  },

  // Load navigation scripts  
  loadNavigationScripts(basePath = '') {
    this.navigationScripts.forEach(scriptConfig => {
      document.body.appendChild(this.createScript(scriptConfig, basePath));
    });
  },

  // Load footer scripts sequentially to ensure dependencies load in order
  loadFooterScripts(basePath = '') {
    let loadedCount = 0;
    const totalScripts = this.footerScripts.length;
    
    const loadNextScript = (index) => {
      if (index >= totalScripts) return;
      
      const scriptConfig = this.footerScripts[index];
      const script = this.createScript(scriptConfig, basePath);
      
      if (scriptConfig.type === 'external') {
        script.onload = () => {
          loadedCount++;
          loadNextScript(index + 1);
        };
        script.onerror = () => {
          console.warn(`Failed to load script: ${scriptConfig.src}`);
          loadNextScript(index + 1);
        };
      } else {
        // For inline scripts, just move to next
        setTimeout(() => loadNextScript(index + 1), 0);
      }
      
      document.body.appendChild(script);
    };
    
    loadNextScript(0);
  },

  // Add a new script to any section
  addScript(section, scriptConfig) {
    if (this[section]) {
      this[section].push(scriptConfig);
    }
  }
};

// Auto-detect base path based on current page location
const getBasePath = () => {
  const path = window.location.pathname;
  return path.includes('/case-studies/') ? '../' : '';
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const basePath = getBasePath();
    ScriptLoader.loadNavigationScripts(basePath);
    ScriptLoader.loadFooterScripts(basePath);
  });
} else {
  const basePath = getBasePath();
  ScriptLoader.loadNavigationScripts(basePath);
  ScriptLoader.loadFooterScripts(basePath);
}

// Export for manual use
window.ScriptLoader = ScriptLoader;