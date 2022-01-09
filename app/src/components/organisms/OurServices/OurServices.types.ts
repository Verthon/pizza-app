export type OurService = {
  description: string
  icon: "quality" | "order" | "delivery"
  link: string
  name: string
}

export type OurServicesResponse = {
  allSanityOurservice: {
    nodes: [
      OurService,
      OurService,
      OurService
    ]
  }
}
