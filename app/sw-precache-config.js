module.exports = {
  staticFileGlobs: [
    '/images/**/*',
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/maps\.googleapis\.com\//,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 50,
          name: 'maps-cache'
        }
      }
    },
    {
      urlPattern: /^https:\/\/(.*)\.gstatic\.com\//,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 50,
          name: 'gstatic-cache'
        }
      }
    },
    {
      urlPattern: /\/data\//,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 5,
          name: 'data-cache'
        }
      }
    }
  ]
}
