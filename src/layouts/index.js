import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const linkStyle = css({
  float: `right`,
  textDecoration: `none`,
  marginRight: `1rem`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

export default ({ children }) => (
  <g.Body
    color={`#ccc`}
    background={`#333`}
    height={`100vh`}
    background={`#6b6b6b`} // Old browsers
    background={`-moz-linear-gradient(top, #6b6b6b -25%, #000000 100%)`} //FF3.6-15
    background={`-webkit-linear-gradient(top, #6b6b6b -25%,#000000 100%)`} // Chrome10-25,Safari5.1-6
    background={`linear-gradient(to bottom, #6b6b6b -25%,#000000 100%)`} // W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    filter={`progid:DXImageTransform.Microsoft.gradient( startColorstr='#6b6b6b', endColorstr='#000000',GradientType=0 )`} // IE6-9
  >
    <g.Div
      margin={`0 auto`}
      width={`90vw`}
      maxWidth={`1280px`}
      padding={rhythm(2)}
      paddingTop={rhythm(1.5)}
    >
      <Link to={`/`}>
        <g.H3
          marginBottom={rhythm(2)}
          display={`inline-block`}
          fontStyle={`normal`}
          color={`#dd0`}
        >
          rusl.io
        </g.H3>
      </Link>
      <Link className={linkStyle} to={`/contact/`}>
        Contact
      </Link>
      <Link className={linkStyle} to={`/about/`}>
        About
      </Link>
      <Link className={linkStyle} to={`/blog/`}>
        Blog
      </Link>
      <Link className={linkStyle} to={`/portfolio/`}>
        Portfolio
      </Link>

      {children()}
    </g.Div>
  </g.Body>
);
