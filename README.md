# DevFestDC 2016 PWA

This is the source code for the DevFestDC 2016
[Progressive Web App](https://www.devfestdc.rocks).

# Development

It was built using [Polymer](https://www.polymer-project.org/1.0/) with the goal 
of providing a fast and offline-capable source for DevFestDC conference information.

## Run the App

If you don't have the Polymer CLI installed, you can install it with `npm install polymer-cli`

- `polymer serve` or use your favorite web server.

## Build the App

- `cd app`
- `bower install`
- `polymer build`

This will create a `build` folder with an unbundled version for HTTP/2 + Server Push
and a bundled version for older HTTP servers.

# Contributing

Feel free to submit a PR for bugs or enhancements.

# License

The MIT License (MIT)
