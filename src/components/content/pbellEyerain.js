import React, { useState } from "react"

import Modal from "../modal"
import pBellEyeRain from "../../../static/images/pbell-eyerain.jpg"
import pBellEye from "../../../static/images/p-bell-eyerain.jpg"
import checkLight from "../../../static/images/check-light.svg"

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

const PbellEyeRain = () => {
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className={"feature__item"}>
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
        <Modal show={show} close={closeModal} product="PBell Eyerain">
          <div className="eyerainbox">
            <img alt="PBell Berry" src={pBellEye} />
          </div>
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
          </div>
        </Modal>
        <div className="col-12">
          <div className="show-modal">
            <button onClick={showModal}>Selengkapnya</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PbellEyeRain
