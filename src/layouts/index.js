import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { rhythm } from "../utils/typography";

const linkStyle = css({
  '@media (max-width: 768px)': {
    display: `none`,
  },
  float: `right`,
  textDecoration: `none`,
  boxShadow: `none`,
  marginRight: `1rem`,
  color: `#ccc`,
  "&:hover": {color: `#fff`},
});

const mobileNavStyle = css({
  '@media (min-width: 769px)': {
    display: `none`,
  },
  position: `fixed`,
  height: `2rem`,
  width: `100%`,
  bottom: `0`,
  paddingBottom: `5px`,
  left: 0,
  display: `flex`,
  flexFlow: `row nowrap`,
  justifyContent: `space-around`,
  "&:hover": {color: `#fff`},
  backgroundColor: `#333`
});

const mobileLinkStyle = css({
  color: `#ccc`,
  flexGrow: 1,
  textAlign: `center`,
  borderTop: `1px dotted #666`
});

const outerDivStyle = css({
  color:`#ccc`,
  background:`#333`,
  minHeight:`100vh`,
  height:`100%`,
  background:`#000000`,
  background:`-moz-linear-gradient(top, #000000 0%, #4b4b4b 200%)`,
  background:`-webkit-linear-gradient(top, #000000 0%,#4b4b4b 200%)`,
  background:`-o-linear-gradient(top, #000000 0%,#4b4b4b 200%)`,
  background:`linear-gradient(to bottom, #000000 0%,#4b4b4b 200%)`,
  filter:`progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#4b4b4b',GradientType=0 )`,
});

const innerDivStyle = css({
  margin:`0 auto`,
  width:`90vw`,
  maxWidth:`1280px`,
  padding:rhythm(2),
  paddingTop:rhythm(1.5),
  '@media (max-width: 769px)': {
    width: `100vw`,
    height: `calc(100% - 2rem)`,
    padding: rhythm(1),
  },
});


export default ({ children }) => (
  <div className={outerDivStyle}>
    <Helmet
      title="russellschmidt.net: Russell Schmidt's Portfolio and Blog"
      meta={[
        { name: "description", content: "This is the blog and app portfolio website for Russell Schmidt, a Los Angeles-based developer." },
        { name: "keywords", content: "developer, Russell Schmidt, Los Angeles, React, Ruby on Rails, JavaScript, jQuery, HTML, CSS, SASS, JS, Gatsby, Node, Yarn, Webpack, NPM, web app, React Native, mobile app" }
      ]}
    />
    <div className={innerDivStyle}>
      <nav>
        <Link to={`/`}>
          <g.H3
            marginTop={`0`}
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
      </nav>
      <nav className={mobileNavStyle}>
        <Link className={mobileLinkStyle} to={`/portfolio/`}>
          Portfolio
        </Link>
        <Link className={mobileLinkStyle} to={`/blog/`}>
          Blog
        </Link>
        <Link className={mobileLinkStyle} to={`/about/`}>
          About
        </Link>
        <Link className={mobileLinkStyle} to={`/contact/`}>
          Contact
        </Link>
      </nav>
      {children()}
    </div>
  </div>
);
