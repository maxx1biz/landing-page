import React, { useState } from "react"

import Modal from "../modal"
import gloweren from "../../../static/images/gloweren.jpg"
import checkLight from "../../../static/images/check-light.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

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
    <div
      className={"feature__item product-top"}
      style={{ border: show ? "2px solid #888" : "none" }}
    >
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
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal}>Selengkapnya</button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="Gloweren">
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

            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              Tersedia di
            </h3>

            <div className="olshop">
              <div>
                <a
                  href="https://www.tokopedia.com/maxx1biz/gloweren-facial-dan-body-peeling-pemutih-dan-pencerah-kulit-wajah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="tokopedia" src={tokopedia} className="tokped" />
                </a>
              </div>
              <div>
                <a
                  href="https://shopee.co.id/maxx1bizzofficial/4914337819"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="shopee" src={shopee} className="shopee" />
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Gloweren
