import React, { useState } from "react"

import Modal from "../modal"
import aishi from "../../../static/images/aishi.jpg"
import aishiBottle from "../../../static/images/aishi-bottle.jpg"
import checkLight from "../../../static/images/check-square.svg"

const komposisi = [
  "Melancarkan peredaran darah",
  "Membantu menguatkan stamina tubuh",
  "Membantu menguatkan daya tahan tubuh",
  "Membantu menurunkan kadar kolesterol",
  "Membantu mengatasi diabetes tipe 2",
  "Membantu melancarkan metabolisme",
  "Meningkatkan kadar Testosteron & produksi Sperma",
  "Mencegah gangguan pada Prostat",
  "Meningkatkan gairan, ketahanan & performa seksual",
  "Membantu melancarkan Haid",
  "Membantu menunda masa menopause pada wanita",
  "Membantu meningkatkan kualitas & keharmonisan hubungan suami-istri",
]

const AishiHydrogen = () => {
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
        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Aishi"} src={aishi} />
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
      <div className="row alboost-details">
        <Modal show={show} close={closeModal} product="Aishi - Hydrogen Water">
          <div className="alboostbox">
            <img alt="AishiHydrogen" src={aishiBottle} />
          </div>
          <div className="modal">
            <h2>Dongkrak Stamina dan Vitalitas Anda</h2>
            <p>
              Josie Koffie adalah kopi kesehatan premium yang meningkatkan
              Stamina dan Vitalitas. Terbuat dari bahan-bahan herbal berkualitas
              seperti CordyCeps, Guarana, Panax-Ginseng, L-Arginin, & Eurycoma.
            </p>

            <p style={{ marginTop: 20 }}>
              Berbagai manfaat minuman kesehatan Josie Koffie :
            </p>

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
            <button onClick={showModal} style={{ float: "right" }}>
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AishiHydrogen
