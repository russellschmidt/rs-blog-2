import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

const blogPostsFlexbox = css({
  display: `flex`,
  flexFlow: `row wrap`,
  width: `100%`,
  justifyContent: `space-around`,
});

const blogPostPreview = css({
  width: `32%`,
  padding: `20px`,
  minWidth: 320,
  margin: `0 auto`,
});

const blogPostTitle = css({

});

const blogLinkStyle = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {color: `#fff`}
});

const blogPostDate = css({

});

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet title={`Blog posts: Russell Schmidt`} />
      <div className={blogPostsFlexbox}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={blogPostPreview} key={post.id}>
              <Link className={blogLinkStyle} to={post.frontmatter.path}>
                <h1 className={blogPostTitle}>

                    {post.frontmatter.title}

                </h1>
                <h2 className={blogPostDate}>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
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
          }
        }
      }
    }
  }
`;
