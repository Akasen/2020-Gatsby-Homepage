import React from "react"

import Layout from "./components/Layout"
import Main from "./components/Main"

const NotFoundPage = () => (
  <Layout>
    <Main>
      <div className="showcase">
        <h1>A MISSING PAGE!?</h1>
        <p>
          You've either tried to manually enter a page that doesn't exist,
          clicked a link to something deleted, or I forgot to update something
        </p>
      </div>
    </Main>
  </Layout>
)

export default NotFoundPage
