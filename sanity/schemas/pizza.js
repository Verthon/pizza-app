export default {
  name: "pizza",
  title: "Pizzas",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Pizza name",
      type: "string",
      description: "Name of your pizza"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the pizza in cents",
      validation: Rule => Rule.min(1000).max(50000)
    },
    {
      name: "hot",
      title: "Is top this week ?",
      type: "boolean",
      description: "Pizzas that are promoted this week",
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }]
    },
    {
      name: "shortDescription",
      title: "Short description",
      type: "string",
      description: "Short description for the pizza will be visible on homepage and menu pages."
    },
    {
      name: "longDescription",
      title: "Long description",
      type: "string",
      description: "Long description for the pizza will be visible on pizza details pages."
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is topping vegetarian",
      options: {
        layout: "checkbox"
      }
    },
    {
      name: "sliceCalories",
      title: "Calories per slice",
      type: "number",
      description: "Number of calories for one slice",
      validation: Rule => Rule.min(50).max(1000)
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
      vegetarian: "vegetarian",
    },
    prepare: ({ title, vegetarian }) => ({
      title: `${title} ${vegetarian ? "🌱" : ""}`
    })
  },
}
