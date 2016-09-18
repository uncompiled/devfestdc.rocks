const os = require('os')
const cluster = require('cluster')
const express = require('express')
const netjet = require('netjet')

const root = '/www/build/bundled'
const port = 80

const deps = [
  /* TODO: Figure out how to get to visually complete faster with Safari.
  '</bower_components/polymer/polymer.html>; rel=preload; as=document',
  '</bower_components/app-route/app-location.html>; rel=preload; as=document',
  '</bower_components/app-route/app-route.html>; rel=preload; as=document',
  '</bower_components/app-layout/app-scroll-effects/app-scroll-effects.html>; rel=preload; as=document',
  '</bower_components/app-layout/app-drawer-layout/app-drawer-layout.html>; rel=preload; as=document',
  '</bower_components/app-layout/app-header-layout/app-header-layout.html>; rel=preload; as=document',
  '</bower_components/app-layout/app-header/app-header.html>; rel=preload; as=document',
  '</bower_components/paper-icon-button/paper-icon-button.html>; rel=preload; as=document',
  '</bower_components/iron-pages/iron-pages.html>; rel=preload; as=document',
  '</bower_components/iron-selector/iron-selector.html>; rel=preload; as=document',
  '</src/view-home.html>; rel=preload; as=document',
  '</src/app-icons.html>; rel=preload; as=document',
  */
  '</images/logo.png; rel=preload; as=image',
  '</images/gdg-dc.png; rel=preload; as=image'
]

// When we serve the appShell, push resources for faster rendering.
// Note that HTML will be parsed by netjet, so inline resources will get pushed.
const appShell = function (req, res) {
  res
    .set({Link: deps})
    .set({'Cache-Control': 'public, max-age=86400'})
    .status(200)
    .sendFile(root + '/index.html')
}

// Start a cluster of node processes
if (cluster.isMaster) {
  const cpuCount = os.cpus().length
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  express()
    .use(netjet({cache: {max: 100}}))
    .get('/', appShell)
    .use(express.static(root, {maxAge: '7d'}))
    .use(appShell)
    .listen(port)
}
