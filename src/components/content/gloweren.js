import React, { useState } from "react"

import Modal from "../modal"
import gloweren from "../../../static/images/aishi.jpg"
import alBoostBottle from "../../../static/images/alboost-bottle.jpg"
import checkLight from "../../../static/images/check-light.svg"

const komposisi = [
  "Mengangkat Kotoran dan Sel Kulit mati",
  "Mencerahkan Kulit dalam Waktu Singkat",
  "Membersihkan Kulit sampai ke Pori-pori yang paling dalam",
  "Menghaluskan Kulit",
  "Menghilangkan Flek/Noda Hitam",
  "Menyembuhkan Penyakit Kulit Ringan",
  "Melembabkan Kulit",
  "Memberikan Nutrisi bagi Kulit",
]

const Gloweren = () => {
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
            <h2>Gloweren - Facial dan Body Peeling</h2>
            <p>
              Pemutih dan pencerah kulit dan wajah berbahan aktif lumpur laut
              mati yang bermanfat untuk mengangkat kotoran dan sel kulit mati
              dari kulit, membersihkan kulit sampai ke pori-pori yang paling
              dalam, memberikan nutrisi bagi kulit, serta manfaat lainya yang
              baik untuk kulit.
            </p>
          </div>
        </div>

        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Board"} src={gloweren} />
          </div>
        </div>
      </div>
      <div className="row alboost-details">
        <Modal show={show} close={closeModal} product="Gloweren">
          <div className="alboostbox">
            <img alt="Gloweren" src={alBoostBottle} />
          </div>
          <div className="modal">
            <h2>Bikin kulit makin Glowing</h2>
            <p>
              Gloweren Facial & Body Peeling digunakan untuk Wajah dan Tubuh dan
              bisa digunakan oleh Pria maupun Wanita. Dipakai beberapa hari
              sekali atau saat mau Facial.
            </p>

            <p style={{ marginTop: 20 }}>
              Ini dia manfaan Gloweren untuk kulit :
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
            <button onClick={showModal}>Selengkapnya</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gloweren
