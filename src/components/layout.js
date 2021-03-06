import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo-maxx1biz-2.png"
import iconFacebook from "../../static/images/fb.png"
import iconTwitter from "../../static/images/twitter.png"
import iconInstagram from "../../static/images/ig.png"
import whatsapp from "../../static/images/whatsapp.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-5"}>
                <div className={"widget__item"}>
                  <div className={"logo"}>
                    <Link to="/" title={"Maxx1Bizz"}>
                      <img alt={"Logo"} src={logo} style={{ height: 70 }} />
                    </Link>
                  </div>

                  <div className={"about"}>
                    <p>
                      Maxx1Biz memiliki tujuan untuk membantu semua mitra untuk
                      memiliki kehidupan yang lebih baik dengan mempunyai Rumah,
                      Kendaraan, Penghasilan, Wisata ke luar negeri, dan wisata
                      Religi.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <ul className={"links"}>
                    <h4>Maxx1Biz</h4>
                    <ul>
                      <li>
                        <a href={"https://www.tokopedia.com/maxx1biz"}>
                          Tokopedia
                        </a>
                      </li>
                      <li>
                        <a href={"https://shopee.co.id/maxx1bizzofficial"}>
                          Shopee
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className={"col-2"}>
                <div className={"widget__item"}>
                  <div className={"links"}>
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <Link to="/contact" title={"Contact Us"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title={"Privacy Policy"}>
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link to="/terms" title={"Terms and Conditions"}>
                          Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={"col-3"}>
                <div className={"widget__item"}>
                  <div className={"social"}>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282137772815&text=Halo%20mau%20order%20produk%20maxx1biz%20dong"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      title={"Whatsapp"}
                    >
                      <img alt={"WhatsApp"} src={whatsapp} height="30" />
                    </a>
                    <a
                      href="https://www.facebook.com/Maxx1BizIndonesia/s"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      title={"Facebook"}
                    >
                      <img alt={"Facebook"} src={iconFacebook} height="30" />
                    </a>
                    <a
                      href="https://twitter.com/maxx1biz"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      title={"Twitter"}
                    >
                      <img alt={"Twitter"} src={iconTwitter} height="30" />
                    </a>
                    <a
                      href="https://www.instagram.com/maxx1biz.ig/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      title={"Instagram"}
                    >
                      <img alt={"Instagram"} src={iconInstagram} height="30" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"copyright"}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{" "}
                <a href="/" title={"Maxx1Biz"}>
                  Maxx1Biz
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
