import React from "react"

import Layout from "./components/Layout"
import Main from "./components/Main"

const NotFoundPage = () => (
  <Layout>
    <Main>
      <div className="showcase">
        <h1>404 -A MISSING PAGE!?</h1>
        <p>
          You've either tried to manually enter a page that doesn't exist,
          clicked a link to something deleted, or I forgot to update something
        </p>
        <p>
          I also want to write a funny quip about "If you're not seeing this
          page but instead a generic 404 message", but that's dumb
        </p>
      </div>
    </Main>
  </Layout>
)

export default NotFoundPage
