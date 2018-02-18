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
    height={`100vh`}
    background={`#4b4b4b`}
    background={`-moz-linear-gradient(top, #4b4b4b 0%, #000000 50%)`}
    background={`-webkit-linear-gradient(top, #4b4b4b 0%,#000000 50%)`}
    background={`-o-linear-gradient(top, #4b4b4b 0%,#000000 50%)`}
    background={`linear-gradient(to bottom, #4b4b4b 0%,#000000 50%)`}
    filter={`progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b4b4b', endColorstr='#000000',GradientType=0 )`}
  >
    <Helmet
      title="rusl.io: Russell Schmidt's Portfolio and Blog"
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
