
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/m9/tegeiweb/tegei.github.io/src/pages/404.js")),
  "component---src-pages-works-components-background-js": preferDefault(require("/Users/m9/tegeiweb/tegei.github.io/src/pages/works/components/Background.js")),
  "component---src-pages-works-components-image-gallery-js": preferDefault(require("/Users/m9/tegeiweb/tegei.github.io/src/pages/works/components/ImageGallery.js")),
  "component---src-pages-works-components-video-gallery-js": preferDefault(require("/Users/m9/tegeiweb/tegei.github.io/src/pages/works/components/VideoGallery.js")),
  "component---src-pages-works-index-js": preferDefault(require("/Users/m9/tegeiweb/tegei.github.io/src/pages/works/index.js"))
}

