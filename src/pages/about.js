import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "glamor";

const flexContainer = css({
  display: `flex`,
  flexFlow: `row wrap`,
  width: `100%`,
  justifyContent: `space-around`
});

const flexBaby = css({
  padding: `5px 10px`,
  width: `22%`,
  minWidth: 320,
  flexGrow: 1,
  margin: `0 auto`,
  textAlign: `left`
});

const flexChild = css({
  padding: `5px 10px`,
  width: `50%`,
  minWidth: 320,
  flexGrow: 2,
  margin: `0 auto`,
  textAlign: `left`
});

const flexBabyList = css({
  listStyleType: `none`
});

export default () => (
  <div>
    <Helmet title={`About: Russell Schmidt`} />
    <h1>About Me</h1>
    <div className={flexContainer}>

      <article className={flexBaby}>
        <h2>Web Developer</h2>
        <p>I make websites. Let's make something cool together. Email me <a href="mailto:mail@russellschmidt.net?subject=Website%20Inquiry">mail@russellschmidt.net</a></p>
        <p>Check out my <Link to="/portfolio/">portfolio</Link> to learn more about some of the things I make.</p>
      </article>

      <article className={flexBaby}>
        <h2>Human Languages</h2>
        <p>I speak English and I am re-learning Spanish.</p>
        <p>I have a life goal to learn French, Hebrew, Icelandic, and Mandarin. The latter three langauges take about a year each to master.</p>
      </article>

      <article className={flexBaby}>
        <h2>Design Inspiration</h2>
        <ul className={flexBabyList}>
          <li><a href="https://activetheory.net/home" target="_blank">Active Theory</a></li>
          <li><a href="http://www.alanfletcherarchive.com/" target="_blank">Alan Fletcher Archive</a></li>
          <li><a href="http://curvy.dk/beagle/site/" target="_blank">Beagle</a></li>
          <li><a href="http://www.bobgilletc.com/" target="_blank">Bob Gill</a></li>
          <li><a href="https://www.epic.net/" target="_blank">Epic Agency</a></li>
          <li><a href="http://www.fabrica.it/" target="_blank">Fabrica</a></li>
          <li><a href="https://www.good.is/" target="_blank">Good</a></li>
          <li><a href="https://www.ibm.com/design/language/" target="_blank">IBM Design</a></li>
          <li><a href="http://kare.com/" _target="_blank">Susan Kare</a></li>
          <li><a href="https://www.ludlowkingsley.com/" target="_blank">Ludlow Kingsley</a></li>
          <li><a href="https://www.apple.com/mac-pro/" target="_blank">Mac Pro</a></li>
          <li><a href="https://material.io/guidelines/" target="_blank">Material Design</a></li>
          <li><a href="http://midoriaoyama.jp/" target="_blank">Midori Aoyama</a></li>
          <li><a href="http://www.miltonglaser.com/" target="_blank">Milton Glaser</a></li>
          <li><a href="https://www.nasa.gov/sites/default/files/atoms/files/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf" target="_blank">NASA 1976 Design Guide (pdf)</a></li>
          <li><a href="http://ondo.tv/1st/" target="_blank">Ondo</a></li>
          <li><a href="https://philosophie.is/" target="_blank">Philosophie</a></li>
          <li><a href="http://placesofintimacy.skyn.com/en" target="_blank">Places of Intimacy</a></li>
          <li><a href="http://www.robinpayot.com/" target="_blank">Robin Payot Portfolio</a></li>
          <li><a href="http://sagmeisterwalsh.com/" target="_blank">Sagmeister &amp; Walsh</a></li>
          <li><a href="http://springsummer.dk/" target="_blank">Spring/Summer</a></li>
        </ul>
      </article>

      <article className={flexChild}>
        <h2>Programming Languages</h2>
        <p>Please have a look through my <Link to="/portfolio/">portfolio</Link> to learn more about what I have made and maintain.</p>
        <dl>
          <dt>JavaScript</dt>
          <dd>
            <p>Having learned JavaScript early on in my programming journey if only to make things spin and animate and glow, I am thrilled to see JS thive. It is a fun language to write in and provides a ton of flexibility for different projects.
            </p>
            <p>I had some exposure to Angular 1 in the Bloc curriculum, and have a few Angular projects floating around. However, I am most actively working on React, Node, and Gatsby, in which this site is written.</p>
            <p> I also have a couple of React Native projects and hope to be making more native apps soon!</p>
          </dd>
          <dt>Ruby</dt>
          <dd>
            <p>My first love is Ruby and I really learned to program using Ruby on Rails to make sites. Later on, I learned even more Ruby at Bloc.io and in a class I took at General Assembly. Later on at Bloc I was able to use Ruby as a scripting language and to build my own Rails clone complete with Object Relational Model (ORM) to mimic ActiveRecord. After Bloc, I built some sites in Rails, including [this one](http://www.climatecents.org). Then I started experimenting with Jekyll, which is a fun, lightweight static site generator.
            </p>
          </dd>
          <dt>PHP</dt>
          <dd>
            <p>The very first time I tried to make an interactive website, I was determined to build something from scratch. I bought a giant book on PHP and started putting together bizarre sites to amuse my friends. Eventually I became proficient enough to make a production site with it.</p>
            <p>Now, years later, I have a fan of spinning up a WordPress site on AWS and creating a new site quickly. I have professionally created and maintain several WordPress sites and tinker in PHP all the time.</p>
          </dd>
        </dl>
      </article>

    </div>
  </div>
);
