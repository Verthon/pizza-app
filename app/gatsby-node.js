const path = require('path');

async function generateDetailPages({ graphql, actions }) {
  const template = path.resolve("./src/templates/Pizza.tsx");
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: template,
      context: {
        slug: pizza.slug.current
      }
    })
  });
}

async function createPages(params) {
  await generateDetailPages(params)
}

module.exports = {
  createPages
}