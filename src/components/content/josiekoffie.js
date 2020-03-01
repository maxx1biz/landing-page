import React, { useState } from "react"
import { Link } from "gatsby"

import info from "../../../static/images/info.svg"

import Modal from "../modal"
import josie from "../../../static/images/josie.jpg"
import checkLight from "../../../static/images/check-square.svg"
import cordyceps from "../../../static/images/cordyceps.png"
import ginseng from "../../../static/images/ginseng.png"
import guarana from "../../../static/images/guarana.png"
import tongkatAli from "../../../static/images/tongkat-ali.png"
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

const JosieKoffie = ({ official }) => {
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

            <h3 style={{ margin: "20px 0 0 0", textAlign: "center" }}>
              Apa saja Komposisi Josie Kofie ?
            </h3>

            <div className="row ingridients">
              <div className="col-3">
                <img alt="ingridients" src={cordyceps} />
                <p>Cordyceps</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={ginseng} />
                <p>Panax Ginseng</p>
              </div>
              <div className="col-3 bberry">
                <img alt="ingridients" src={guarana} />
                <p>Guarana</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={tongkatAli} />
                <p>Tongkat Ali</p>
              </div>
            </div>

            <p style={{ fontSize: 13, marginTop: 28 }}>
              <img
                alt="info"
                src={info}
                style={{ height: 12, margin: "0 10px 0 26px" }}
              />
              <Link
                to="/komposisi"
                style={{ color: "#333", textDecoration: "underline" }}
              >
                Detail khasiat komposisi produk
              </Link>
            </p>

            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              {official === "official" ? "Tersedia di" : "Harga Produk"}
            </h3>

            <div className="olshop">
              {official === "official" ? (
                <>
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
                </>
              ) : (
                <h1>Rp. 295.000,-</h1>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default JosieKoffie
