module.exports = {
  siteMetadata: {
    title: "Maisie Johnson's blog",
    description: "thoughts about software development and javascript",
    author: "Maisie Johnson",
    firstName: "Maisie",
    lastName: "Johnson",
    shortDescription: "maisie's blog with thoughts & non-thoughts",
    rootUrl: "https://blog.maisie.ink",
    twitterUrl: "https://twitter.com/maisieink",
    githubUrl: "https://github.com/maisieink",
    aboutMeUrl: "https://maisie.ink/",
    repoRootUrl: "https://github.com/maisieink/blog-maisie-ink",
    repoMainTree: "/tree/main",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    // metadata plugins
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Maisie Johnson's blog",
        short_name: "Maisie Johnson",
        start_url: "/",
        background_color: "#ffffff",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",

    // performance plugins
    "gatsby-plugin-catch-links",

    // styling plugins
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },

    "gatsby-plugin-image",

    // markdown blog post plugins
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-copy-linked-files",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        plugins: [
          {
            // duplicated by gatsbyRemarkPlugins
            // workaround https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 760,
              backgroundColor: "var(--body-background-color)",
            },
          },
          {
            // duplicated by gatsbyRemarkPlugins
            // workaround https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "autolink-header",
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 760,
              backgroundColor: "var(--body-background-color)",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "autolink-header",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
        ],
      },
    },
  ],
};
