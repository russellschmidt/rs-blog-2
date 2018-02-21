import Typography from "typography";
import parnassusTheme from "typography-theme-parnassus";

parnassusTheme.baseFontSize = `15px` // default 17px

parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    boxShadow: `none`,
    color: `#d0d000`
  },
  'a:hover': {
    color: `#ff0`
  },
  'h1, h2, h3, h4, h5, h6': {
    color: `#eee`,
    marginTop: rhythm(1)
  }
})

const typography = new Typography(parnassusTheme);

export default typography;
