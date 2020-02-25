import React, { useState } from "react"

import Modal from "../modal"
import josie from "../../../static/images/josie.jpg"
// import josiekoffie from "../../../static/images/josiekoffie.jpg"
import checkLight from "../../../static/images/check-square.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

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

const JosieKoffie = () => {
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
            <h2>Jossie Koffie</h2>
            <p>
              kopi herbal stamina yang terbuat dari 100% bahan herbal alami dan
              diperoleh dari biji kopi pilihan berkualitas terbaik, membantu
              menguatkan stamina, daya tahan tubuh dan vitalitas serta baik
              dikonsumsi baik pria maupun wanita.
            </p>
          </div>
        </div>

        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Josie"} src={josie} />
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
        <Modal show={show} close={closeModal} product="Josie Koffie">
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

            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              Tersedia di
            </h3>

            <div className="olshop">
              <div>
                <a
                  href="https://www.tokopedia.com/maxx1biz/josie-koffie-kopi-herbal-stamina-100-bahan-alami-berkualitas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="tokopedia" src={tokopedia} className="tokped" />
                </a>
              </div>
              <div>
                <a
                  href="https://shopee.co.id/maxx1bizzofficial/3300690996"
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

export default JosieKoffie
