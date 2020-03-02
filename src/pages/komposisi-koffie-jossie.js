import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import cordyceps from "../../static/images/cordyceps.png"
import ginseng from "../../static/images/ginseng.png"
import guarana from "../../static/images/guarana.png"
import tongkatAli from "../../static/images/tongkat-ali.png"

export default function KomposisiMaxxiyoung() {
  return (
    <Layout>
      <SEO title="Komposisi Produk Koffie Jossie" />

      <div className="container">
        <h1>Komposisi Koffie Jossie</h1>

        <div>
          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="glutathione" src={cordyceps} />
              <h3>Cordyceps</h3>
              <p>
                Memerangi sel kanker dan tumor, menambah stamina, meringankan
                gangguan pernapasan.
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="solarvitis" src={ginseng} />
              <h3>Panax Ginseng</h3>
              <p>
                Bermanfaat bagi daya taha tubuh, anti disfungsi erekse dan
                meningkatkan jumlah sperma.
              </p>
            </div>
          </div>

          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="glutathione" src={guarana} />
              <h3>Guarana</h3>
              <p>
                Superfood berkafein tinggi ini efektif menambah energi, gairah
                (terutama pria) dan menurunkan kolesterol.
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="solarvitis" src={tongkatAli} />
              <h3>Tongkat Ali</h3>
              <p>
                Telah lama diknal untuk meningkatkan libido, stamina seksual dan
                kesuburan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
