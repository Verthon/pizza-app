export default {
  name: "ourservice",
  title: "Our Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Service name",
      type: "string",
      description: "What is the name of the service?"
    },
    {
      name: "description",
      title: "Service description",
      type: "string",
      description: "What is the description of the service?"
    },
    {
      name: "link",
      title: "Service link",
      type: 'url',
      description: "Where should be the link of the service lead to?",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: "icon",
      title: "Service icon",
      type: "string",
      description: "Icon for the service",
      options: {
        list: ["quality", "order", "delivery"],
        layout: "dropdown"
      }
    }
  ],
  preview: {
    select: {
      title: "name",
    },
  }
}