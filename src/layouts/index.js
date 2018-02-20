import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from "react-helmet";

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
    minHeight={`100vh`}
    height={`100%`}
    background={`#000000`}
    background={`-moz-linear-gradient(top, #000000 0%, #4b4b4b 200%)`}
    background={`-webkit-linear-gradient(top, #000000 0%,#4b4b4b 200%)`}
    background={`-o-linear-gradient(top, #000000 0%,#4b4b4b 200%)`}
    background={`linear-gradient(to bottom, #000000 0%,#4b4b4b 200%)`}
    filter={`progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#4b4b4b',GradientType=0 )`}
  >
    <Helmet
      title="russellschmidt.net: Russell Schmidt's Portfolio and Blog"
      meta={[
        { name: "description", content: "This is the blog and app portfolio website for Russell Schmidt, a Los Angeles-based developer." },
        { name: "keywords", content: "developer, Russell Schmidt, Los Angeles, React, Ruby on Rails, JavaScript, jQuery, HTML, CSS, SASS, JS, Gatsby, Node, Yarn, Webpack, NPM, web app, React Native, mobile app" }
      ]}
    />
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
          russellschmidt.net
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
