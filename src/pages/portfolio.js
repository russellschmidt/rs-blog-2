import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

const portfolioLinkStyle = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Portfolio</h1>
      <Helmet title={`Portfolio Projects: Russell Schmidt`} />
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div key={post.id}>
              <h3>
                <Link className={portfolioLinkStyle}
                  to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <h4>{post.frontmatter.date}</h4>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/.*\\.md$/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            type
          }
        }
      }
    }
  }
`;
