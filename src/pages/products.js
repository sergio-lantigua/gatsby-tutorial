import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Image from "gatsby-image"

const Section = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  text-transform: capitalize;

  & span {
    margin-left: 2rem;
    color: grey;
  }

  & article {
    margin: 2rem 0;
  }

  & .gatsby-image-wrapper {
    height: 15rem;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <Section>
        {products.map(product => {
          return (
            <article key={product.key}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {" "}
                {product.title} <span>{product.price}</span>{" "}
              </h3>
              <Link to={`/products/${product.slug}`}> more details... </Link>
            </article>
          )
        })}
      </Section>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default products
