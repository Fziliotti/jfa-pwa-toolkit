"use strict";var assets=[PWA_CONFIG.sw.offline_route,CONFIG_DIR+"pwa.config.js",MANIFEST_DIR+"manifest.json",ROOT_DIR+"sw.js"];workbox.precaching.precacheAndRoute(assets.concat(PWA_CONFIG.precache.routes));