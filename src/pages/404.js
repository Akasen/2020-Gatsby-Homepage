import React from "react"

import Layout from "./components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>A MISSING PAGE!?</h1>
    <p>
      You've either tried to manually enter a page that doesn't exist, clicked a
      link to something deleted, or I forgot to update something
    </p>
  </Layout>
)

export default NotFoundPage
