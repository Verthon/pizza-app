export default {
  name: "topping",
  title: "Topping",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Topping name",
      type: "string",
      description: "What is the name of the topping?"
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "Is topping vegetarian",
      options: {
        layout: "checkbox"
      }
    }
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? "🌱" : ""}`
    })
  }
}