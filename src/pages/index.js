import React from "react";
import Helmet from "react-helmet";
import Link from 'gatsby-link';
import { css } from "glamor";

const heroImage = css({
  width: `100vw`
});

export default () => (
  <div>
    <img className={heroImage} src="https://s3.amazonaws.com/russell-personal/rs/anothercityispossible_comp1.jpg" title="truth" alt="another city is possible"/>
  </div>
);
