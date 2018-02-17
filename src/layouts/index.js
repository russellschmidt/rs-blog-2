import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const linkStyle = css({ 
  float: `right`, 
  textDecoration: `none`, 
  marginRight: `1rem`,
  color: `#dd8`,
  "&:hover": {color: `#ee0`}
});

export default ({ children }) => (
  <g.Body
    color={`#FFF`}
    background={`#000`}
  >
    <g.Div
      margin={`0 auto`}
      maxWidth={`90%`}
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