/**
 * Head Scripts Template
 * Include this file in <head> to load all common head scripts
 */

// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MFB4R9H');

// Wistia Player - async load
(function() {
  var script = document.createElement('script');
  script.src = 'https://fast.wistia.net/player.js';
  script.async = true;
  document.head.appendChild(script);
})();

// Vector Analytics
!function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
vector.load("4432ab11-2feb-418d-9cf9-7a2323ef74b6");

// Reb2b Analytics
!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("W6Z57HQ44XOX");

// CookieYes Banner
(function() {
  var script = document.createElement('script');
  script.id = 'cookieyes';
  script.type = 'text/javascript';
  script.src = 'https://cdn-cookieyes.com/client_data/8ac890abfa9f79f3ad1cb2c3/script.js';
  document.head.appendChild(script);
})();