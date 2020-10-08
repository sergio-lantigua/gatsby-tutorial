const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const results = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  results.data.products.nodes.forEach(product => {
    actions.createPage({
      path: `products/${product.slug}`,
      component: path.resolve("src/templates/product-template.js"),
      context: { slug: product.slug },
    })
  })
}
