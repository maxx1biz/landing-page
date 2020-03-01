import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../../static/styles/main.scss"
import logo from "../../static/images/logo-maxx1biz-2.png"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className={"container"}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/" title={"Maxx1Biz"}>
              <img alt={"Logo"} src={logo} height="70" />
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className={"container"}>
          <div className={"copyright"}>
            <p>
              Copyright {new Date().getFullYear()}, {` `}
              <a href="/" title={"Maxx1Biz"}>
                Maxx1Biz
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
