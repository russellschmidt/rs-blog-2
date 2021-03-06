# russellschmidt.net
Based on the bare bones Gatsby scaffolding.

Russell Schmidt's portfolio and blog.

## Off and running:
* `$ gatsby develop`
* `$ gatsby build`
* `$ gatsby deploy`

## Plugins
* gatsby-plugin-glamor: for CSS-in-JS
* gatsby-plugin-typography: some great base typography styling
* typography-theme-irving: my typography theme of choice
* gatsby-plugin-react-helmet: for custom metadata in `<head>`
* gatsby-transformer-remark: this translates blog posts written in markdown files into HTML for rendering
* gatsby-source-filesystem: allows you to manipulate data in files on your  file system.
* gatsby-plugin-catch-links: Intercepts local links from markdown and other non-react pages, and does a client-side pushState to avoid the browser having to refresh the page (definition stolen from [here](https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481))
* gh-pages: for simple deployment to Github Pages
* gatsby-plugin-google-analytics: to make sure the blood sacrifice is made to the GoogleGod (and get Google Analytics data to work)
* gatsby-image: image processing, preloading, fuzzy placeholder while image loads.
* gatsby-transformer-sharp: Weezy made me. (required for gatsby-image)
* gatsby-plugin-sharp: Weezy made me. (required for gatsby-image)

#### Future Plugins
* gatsby-plugin-google-analytics

