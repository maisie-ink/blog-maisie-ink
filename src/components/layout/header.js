import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import ThemeToggleButton from "./theme-toggle-button";

import * as styles from "./header.module.css";

const Header = ({ className, minimal }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          firstName
          lastName
          shortDescription
          twitterUrl
          githubUrl
          aboutMeUrl
        }
      }
      bioImage: file(relativePath: { eq: "maisie-johnson.jpg" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const {
    firstName,
    lastName,
    shortDescription,
    twitterUrl,
    githubUrl,
    aboutMeUrl,
  } = data.site.siteMetadata;

  return (
    <header className={className}>
      <div className={styles.siteTitle}>
        <Link to="/" className={styles.siteTitleLink}>
          <span className={styles.firstName}>
            <span className={styles.circleBackground}></span>
            <span className={styles.text}>{firstName}</span>
          </span>{" "}
          <span className={styles.lastName}>
            <span className={styles.circleBackground}></span>
            <span className={styles.text}>{lastName}</span>
          </span>
        </Link>
      </div>

      {!minimal && (
        <div className={styles.bio}>
          <Img
            className={styles.bioImage}
            fixed={data.bioImage.childImageSharp.fixed}
          />
          <div>
            <div>
              {shortDescription} / <ThemeToggleButton />
            </div>
            <div className={styles.bioInfoLineLinks}>
              <a href={aboutMeUrl}>About me</a> /{" "}
              <a href={twitterUrl}>Twitter</a> / <a href={githubUrl}>GitHub</a>{" "}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
