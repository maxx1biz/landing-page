import React, { useState } from "react"

import Modal from "../modal"
import pBellEyeRain from "../../../static/images/pbell-eyerain.jpg"
import checkLight from "../../../static/images/check-light.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const komposisi = [
  "Dextrosa",
  "L-Glutation",
  "L-Arginin",
  "Strawberry Bubuk",
  "Ekstrak tebu",
  "Kalsium dan Ekstrak Ganggang Laut",
  "PewarnaMerah Beet",
  "Vitamin C",
  "Ekstrak Billberry",
  "Tomat Bubuk (1%)",
  "Premiks Vitamin dan Mineral",
  "Daun Kelor",
  "Minyak Ikan",
  "Perisa Sintetik Papermint",
  "Wortel Bubuk (0,5 %)",
  "Apel Bubuk (0,5 %)",
  "Anggur Bubuk (0,5 %)",
]

const PbellEyeRain = ({ official }) => {
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div
      className={"feature__item product-top"}
      style={{ border: show ? "2px solid #888" : "none" }}
    >
      <div className={"row"}>
        <div className={"col-6"}>
          <div className={"feature__content"}>
            <h2>P-Bell - Eyerain</h2>
            <p>
              Minuman serbuk rasa buah-buahan dan sayuran yang terbuat dari 100%
              bahan alami untuk menutrisi mata dan otak, mengurangi
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
      <div className="row eyerain-details">
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal}>Selengkapnya</button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="PBell Eyerain">
          <div className="modal">
            <h2>Apa Rahasia PBell Eyerain?</h2>
            <p>
              PBell mengandung
              <span> Calcium Laut (Aquamin). Calcium </span>yang diperoleh dari
              ekstraksi ganggang merah yang tumbuh dilautan dalam Islandia, dan
              terdapat 74 macam mineral trace didalamnya
            </p>

            <p style={{ marginTop: 20 }}>Komposisi :</p>

            <ul className="komposisi-list">
              {komposisi.map((item, index) => (
                <li key={index}>
                  <img alt="CheckLight" src={checkLight} />
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              {official === "official" ? "Tersedia di" : "Harga Produk"}
            </h3>

            <div className="olshop">
              {official === "official" ? (
                <>
                  <div>
                    <a
                      href="https://www.tokopedia.com/maxx1biz/pbell-eyerain-suplemen-kesehatan-mata-dan-otak-100-original"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="tokopedia" src={tokopedia} className="tokped" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://shopee.co.id/maxx1bizzofficial/6110864607"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="shopee" src={shopee} className="shopee" />
                    </a>
                  </div>
                </>
              ) : (
                <h1>Rp. 250.000,-</h1>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default PbellEyeRain
