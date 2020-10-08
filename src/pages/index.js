import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  background-color: blue;
  color: red;
`

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1>Home page</h1>
      </Container>
    </Layout>
  )
}
