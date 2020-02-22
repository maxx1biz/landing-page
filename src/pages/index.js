import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import maxxiYoung from "../../static/images/maxxi-young.jpg"
import pBellMangoApple from "../../static/images/pbell-mangoapple.jpg"
import pBellStrawberry from "../../static/images/pbell-strawberry.jpg"
import pBellEyeRain from "../../static/images/pbell-eyerain.jpg"
import alboost from "../../static/images/alboost.jpg"
// import gloweren from "../../static/images/gloweren.jfif"
import championBooster from "../../static/images/champion-booster.jpg"
import aishi from "../../static/images/aishi.jpg"
import josie from "../../static/images/josie.jpg"

import mui from "../../static/images/mui.png"
import iso from "../../static/images/iso.png"
import haccp from "../../static/images/haccp.png"
import gmp from "../../static/images/gmp.png"
import Provides from "../components/provides"

const IndexPage = () => (
  <Layout>
    <SEO title="Your Bussiness Partner" />

    <div className={"page-header home"}>
      <h1>Your Bussiness Partner</h1>
      <p>
        Maxx1Biz adalah sebuah perusahaan Smart Retailing berbasis aplikasi yang
        dijalankan dengan secara online.
        <br />
        Maxx1Biz memberi kesempatan kepada siapapun yang ingin bekerja untuk
        mencapai mimpi.
      </p>
      <div className={"mail-form"}>
        <form>
          <input type="email" placeholder="Masukan email kamu" />
          <button>Daftar!</button>
        </form>
      </div>
    </div>

    <Provides />

    <div className={"future-bg"}>
      <div className={"container features"}>
        <div className={"feature__item"}>
          <h1 className={"product-title"}>Our Best Products</h1>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={maxxiYoung} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Maxxi Young - Suplemen kecantikan</h2>
                <p>
                  Maxxi Young adalah Micronutrient yang memberikan nutrisi untuk
                  sel-sel pada tubuh kita. Micronutrient sangat dibutuhkan oleh
                  tubuh dalam pembentukan hormon, mengatur fungsi sistem imun &
                  sistem reproduksi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>P-Bell - Mangga Apel</h2>
                <p>
                  Suplemen untuk kesehatan tulang & sendi kualitas terbaik,
                  dengan komposisi alami seperti Corn Fiber, Wheat Fiber,
                  Vitamin C, L-Glutathione dan lainya serta memiliki rasa buah
                  mangga & apel.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={pBellMangoApple} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={pBellStrawberry} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>P-Bell - Strawberry</h2>
                <p>
                  Minuman serbuk rasa buah strawberry yang memiliki kandungan
                  collagen, glutation, dan trace mineral dari bahan alami,
                  kandungan tersebut membuat kulit cerah dan mengurangi penuaan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>P-Bell - Eyerain</h2>
                <p>
                  Minuman serbuk rasa buah-buahan dan sayuran yang terbuat dari
                  100% bahan alami untuk menutrisi mata dan otak, mengurangi
                  mines/plus/silinder pada mata, dan membantu untuk lebih
                  fokus/konsentrasi.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={pBellEyeRain} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={alboost} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>AlBoost - Kapsul Extrak Ikan Gabus</h2>
                <p>
                  kapsul ekstrak ikan Kutuk / Gabus yang kaya akan protein
                  bermaanfaat untuk tubuh, dapat mengatur tekanan osmosis &
                  volume darah sehingga mempertahankan volume darah.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Gloweren - Facial dan Body Peeling</h2>
                <p>
                  Pemutih dan pencerah kulit dan wajah berbahan aktif lumpur
                  laut mati yang bermanfat untuk mengangkat kotoran dan sel
                  kulit mati dari kulit, membersihkan kulit sampai ke pori-pori
                  yang paling dalam, memberikan nutrisi bagi kulit, serta
                  manfaat lainya yang baik untuk kulit.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={maxxiYoung} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={championBooster} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Champion Booster</h2>
                <p>
                  Cairan khusus yang dibuat untuk menaikan oktan banan bakar
                  minyak sehingga kerja mesin menjadi lebih optimal dan ramah
                  lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Jossie Koffie</h2>
                <p>
                  kopi herbal stamina yang terbuat dari 100% bahan herbal alami
                  dan diperoleh dari biji kopi pilihan berkualitas terbaik,
                  membantu menguatkan stamina dan daya tahan tubuh.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={josie} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={aishi} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>AISI - Hydrogen Water</h2>
                <p>
                  Maxxi Young adalah Micronutrient yang memberikan nutrisi untuk
                  sel-sel pada tubuh kita. Micronutrient sangat dibutuhkan oleh
                  tubuh dalam pembentukan hormon, mengatur fungsi sistem imun &
                  sistem reproduksi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={" testi-video"}>
      <h1>REAL USER TESTIMONIAL</h1>
      <div className={"testi-row row"}>
        <div className="embed-container col-4">
          <iframe
            title="testi1"
            src="https://www.youtube.com/embed/Z9HUOOD-LP0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-container col-4">
          <iframe
            title="testi2"
            src="https://www.youtube.com/embed/fvcA8BmMKUY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-container col-4">
          <iframe
            title="testi3"
            src="https://www.youtube.com/embed/QgcRQheaWcg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className={"certificate"}>
      <div className={"container"}>
        <h1>Certificates</h1>
        <div className={"cerfified-list"}>
          <div className={""}>
            <img alt={"mui"} src={mui} />
          </div>
          <div className={""}>
            <img alt={"iso"} src={iso} />
          </div>
          <div className={""}>
            <img alt={"haccp"} src={haccp} />
          </div>
          <div className={""}>
            <img alt={"gmp"} src={gmp} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
