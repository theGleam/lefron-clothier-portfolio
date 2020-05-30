const path = require('path')

module.exports = {
  pathPrefix: "/theGleam",
  siteMetadata: {
    title: `Lefron Clothier | Professional Fashion Designing Company Enugu.`,
    description: `Lefron Clothier is a fashion designing company that makes bespoke female outfits well tailored to suit you. I am located in Enugu state.`,
    author: `@thegleam_josh`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Collections',
        link: '/collections'
      }
    ],
    socialLinks: [
      {
        name: 'fb',
        link: 'https://www.facebook.com/lefronclothier'
      },
      {
        name: 'linkedin',
        link: 'https://ng.linkedin.com/in/chidinma-alimi-88a238109/'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/lefron_clothier/'
      },
      {
        name: 'phone',
        link: 'tel:08124402222'
      },
      {
        name: 'gmail',
        link: 'mailto:chichi.alimi@lefron.com.ng'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        '@components': path.join(__dirname, 'src/components'),
        '@assets': path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-fashion-portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#524443`,
        theme_color: `#b42e23`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
