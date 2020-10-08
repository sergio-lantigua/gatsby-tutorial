import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import image from "../images/img-4.jpg"
import styled from "styled-components"

const Section = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1fr;
  }
`

const Article = styled.article`
  border: 3px solid red;
  padding: 1rem 0;
`

const getImage = graphql`
  {
    fixed: file(relativePath: { eq: "img-4.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImage)

  return (
    <Section>
      <Article>
        <h3>Basic image</h3>
        <img src={image} width="100%" alt="imagen bonita" />
      </Article>
      <Article>
        <h3>fixed image</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} alt="imagen bonita" />
      </Article>
      <Article>
        <h3>fluid image</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} alt="imagen bonita" />
      </Article>
    </Section>
  )
}

export default Images
