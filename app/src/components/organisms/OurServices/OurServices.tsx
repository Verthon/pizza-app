import { useStaticQuery, graphql } from "gatsby"

import { OurServiceBox } from "../../molecules/OurServiceBox/OurServiceBox"

import { Styled } from "./OurServices.styles"
import type { OurServicesResponse } from "./OurServices.types"

export const OurServices = () => {
  const data = useStaticQuery<OurServicesResponse>(graphql`
    {
      allSanityOurservice(sort: {fields: name}) {
        nodes {
          icon
          description
          name
          link
        }
      }
    }
  `)

  return (
    <Styled.Container>
      <OurServiceBox name={data.allSanityOurservice.nodes[0].name} description={data.allSanityOurservice.nodes[0].description} link={data.allSanityOurservice.nodes[0].link} icon={data.allSanityOurservice.nodes[0].icon} />
      <OurServiceBox name={data.allSanityOurservice.nodes[1].name} description={data.allSanityOurservice.nodes[1].description} link={data.allSanityOurservice.nodes[1].link} icon={data.allSanityOurservice.nodes[1].icon} />
      <OurServiceBox name={data.allSanityOurservice.nodes[2].name} description={data.allSanityOurservice.nodes[2].description} link={data.allSanityOurservice.nodes[2].link} icon={data.allSanityOurservice.nodes[2].icon} />
    </Styled.Container>

  )
}
