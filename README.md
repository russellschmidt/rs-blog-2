# rusl.io
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

#### Future Plugins
* gatsby-plugin-google-analytics

