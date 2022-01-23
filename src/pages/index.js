import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
      bioImage: file(relativePath: { eq: "maisie-johnson.jpg" }) {
        childImageSharp {
          fixed(width: 512, height: 512) {
            src
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Seo image={data.bioImage.childImageSharp.fixed.src} path="/" />
      <div className="blog-posts">
        <h1>Recent Posts</h1>
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h2>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <div className="blog-post-date">{post.frontmatter.date}</div>
                <p>{post.frontmatter.description}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default IndexPage;
