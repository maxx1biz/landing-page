import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import snowAlgae from "../../static/images/snow-algae.webp"
import appleStem from "../../static/images/apple-stem-cell.png"
import blueberry from "../../static/images/blueberry.png"
import marine from "../../static/images/marine-collagen.png"
import solarVitis from "../../static/images/solar-vitis.png"
import vitC from "../../static/images/vit-c.png"
import redBeet from "../../static/images/red-beet.png"
import glutathione from "../../static/images/glutathione.png"
import cordyceps from "../../static/images/cordyceps.png"
import ginseng from "../../static/images/ginseng.png"
import guarana from "../../static/images/guarana.png"
import tongkatAli from "../../static/images/tongkat-ali.png"

export default function Komposisi() {
  return (
    <Layout>
      <SEO title="Komposisi Product" />

      <div className="container">
        <h1>KOMPOSISI PRODUCT</h1>

        <div>
          <h2
            style={{
              margin: "70px 0 40px 0",
              textAlign: "center",
            }}
          >
            Komposisi yang terdapat pada Maxxi Young
          </h2>

          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="snowalgae" src={snowAlgae} />
              <h3>Snow Algae</h3>
              <p>
                Alga salju yang mampu tumbuh di gletser dan salju permanen. Snow
                Algae menstimulasi Gen Kothlo yang berumur panjang dan
                mengaktifkan AMPK (Sebuah saklar utama dalam pertahanan sel dan
                sistem energi).
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="apllestemcell" src={appleStem} />
              <h3>PhytoCellTec - Malus Domestica</h3>
              <p>
                Apel Stemcell berasal dari 'Uttwiler Spätlauber', sebuah
                varietas apel Swiss yang langka. Apel Stemsel ini kaya akan
                faktor epigenetik dan metabolit, yang menjamin panjang umur
                sel-sel kulit. Apel Stemsel telah terbukti melindungi sel induk
                kulit dan juga menunda penuaan pada folikel rambut.
              </p>
            </div>
          </div>

          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="blueberry" src={blueberry} />
              <h3>Blueberry</h3>
              <p>
                Mengandung senyawa tanaman yang disebut anthocyanin. Ini memberi
                blueberry warna biru. Blueberry dapat membantu kesehatan
                jantung, kekuatan tulang, kesehatan kulit, tekanan darah,
                manajemen diabetes, pencegahan kanker, dan kesehatan mental.
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="marine" src={marine} />
              <h3>Marine Collagen</h3>
              <p>
                Diektraksi dari daging atau sisik ikan laut dingin dan terutama
                tipe I dan tipe II kolagen. Marine Collagen telah terbukti
                memiliki "bioavailabilitas" unggul, dibandingkan dengan sumber
                hewan lainya.
              </p>
            </div>
          </div>

          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="red-beet" src={redBeet} />
              <h3>Red Beet</h3>
              <p>
                Red Beet adalah sumber unik Phytonutrien yang disebut betalain.
                Betanin dan Vulgaxanthin adalah dua betalain yang dipelajari
                terbaik dari red beet, dan keduanya telah terbukti memberikan
                antioksidan, anti-inflamasi, dan dukungan detoksifikasi.
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="vitamin-c" src={vitC} />
              <h3>Vitamin C</h3>
              <p>
                Vitamin C (juga dikenal sebagai asam askorbat) berlimpah dalam
                sayuran dan buah-buahan. Vitamin yang larut dalam air dan
                antioksidan kuat, membantu tubuh membentuk dan memelihara
                jaringan ikat, termasuk tulang, pembuluh darah, dan kulit.
              </p>
            </div>
          </div>

          <div className="row komposisi-detail">
            <div className="col-6 kompo">
              <img alt="glutathione" src={glutathione} />
              <h3>Glutathione</h3>
              <p>
                Adalah kombinasi dai tiga blok protein atau asam amino yang
                sederhana - sistein, glisin, dan glutamin. Biasa juga disebut
                "The Mother of Atioxidans".
              </p>
            </div>
            <div className="col-6 kompo">
              <img alt="solarvitis" src={solarVitis} />
              <h3>PhytoCellTec - Solar Vitis</h3>
              <p>
                Anggur Stemsel yang berasal dari kurtival anggur langka dengan
                kadar tannin yang tinggi. Anggur stemsel melindungi dan menjaga
                aktivitas sel-sel induk epidermal - bahkan dalam kasus stres
                yang disebabkan oleh UV.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2
            style={{
              margin: "70px 0 40px 0",
              textAlign: "center",
            }}
          >
            Komposisi yang terdapat pada Koffie Jossie
          </h2>

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
