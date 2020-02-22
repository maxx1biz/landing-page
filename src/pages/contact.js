import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Contact</h1>
        </div>

        <div className={"row"}>
          <div className={"col-7"}>
            <h2>PT. MAXX1BIZ INDONESIA BERJAYA</h2>
            <p>
              Kompleks Ruko Mutiara Taman Palem Blok A2 No.35 <br /> Cengkareng
              – Jakarta Barat 11730 <br />
              Phone : +62 21 – 5431 4966 <br />
              JAKARTA – INDONESIA
            </p>
          </div>

          <div className={"col-5"}>
            <div className={"contact-items"}>
              <p>Anda dapat menghubungi kami via email</p>
              <h3>maxx1biz.indonesia@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
