import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import styled from "styled-components"

const Section = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 3rem auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
  }
`

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products:</Link>
        <h1>single product: {title} </h1>
      </div>
      <Section>
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3> ${price} </h3>
          <p> {info} </p>
          <button>add to cart</button>
        </article>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
