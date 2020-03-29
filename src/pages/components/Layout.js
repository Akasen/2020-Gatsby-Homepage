import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div class="container">
      <Navbar></Navbar>
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
