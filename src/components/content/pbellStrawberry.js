import React, { useState } from "react"

import Modal from "../modal"
import pBellStrawberry from "../../../static/images/pbell-strawberry.jpg"
// import pBellBerry from "../../../static/images/p-bell-berry.jpg"
import checkLight from "../../../static/images/check-light.svg"

const komposisi = [
  "Serat Jagung",
  "Psylium Husk",
  "Serat Gandum",
  "Vitamin C",
  "Strawberry Bubuk (12,48%)",
  "Ekstrak Kopi Hijau",
  "Ekstrak Jeruk",
  "Ekstrak tebu",
  "Kalsium dan Ekstrak Ganggang Laut",
  "L-Glutation",
  "Bit Merah Bubuk",
  "Apel Bubuk",
  "Mangga Bubuk",
  "Premiks Vitamin dan Mineral",
  "L-Arginin",
  "Arcelora Bubuk",
  "Lidah Buaya Bubuk",
  "Pengatur Keasaman Asam Sitrat",
]

const PbellStrawBerry = () => {
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
        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Event"} src={pBellStrawberry} />
          </div>
        </div>

        <div className={"col-6"}>
          <div className={"feature__content"}>
            <h2>P-Bell - Strawberry</h2>
            <p>
              Minuman serbuk rasa buah strawberry yang mengandung fiber atau
              serat & nutrisi. Mengandung 74 macam Vitamin & mineral yang
              membantu sistem pencernaan, mempperlancar BAB & membakar lemak.
              Sehingga dapat membantu pola hidup sehat
            </p>
          </div>
        </div>
      </div>
      <div className="row strawberry-details">
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal} style={{ float: "right" }}>
                Selengkapnya
              </button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="PBell Strawberry">
          <div className="modal">
            <h2>Apa Rahasia PBell Strawberry?</h2>
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
      </div>
    </div>
  )
}

export default PbellStrawBerry
