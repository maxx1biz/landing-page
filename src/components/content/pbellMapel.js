import React, { useState } from "react"

import Modal from "../modal"
import pBellMangoApple from "../../../static/images/pbell-mangoapple.jpg"
import checkLight from "../../../static/images/check-light.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const komposisi = [
  "Serat Jagung",
  "Kolagen Ikan",
  "Serat Gandum",
  "Vitamin C",
  "Mangga Bubuk (3%)",
  "Ekstrak Tebu",
  "Minyak Ikan (Antioksidan)",
  "Kalsium dan Ekstrak Ganggang Laut",
  "L-Glutation",
  "Apel Bubuk (1%)",
  "Kunyit Bubuk",
  "Premiks Vitamin dan Mineral",
  "Anggur Bubuk",
  "Pengatur Keasaman Asam Sitrat",
]

const PbellMapel = ({ official }) => {
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
            <h2>P-Bell - Mangga Apel</h2>
            <p>
              Suplemen untuk kesehatan tulang, gigi, sendi dan pencernaan
              kualitas terbaik, dengan komposisi alami seperti Corn Fiber, Wheat
              Fiber, Vitamin C, L-Glutathione dan lainya serta memiliki rasa
              buah mangga & apel.
            </p>
          </div>
        </div>

        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Board"} src={pBellMangoApple} />
          </div>
        </div>
      </div>
      <div className="row mapel-details">
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal}>Selengkapnya</button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="PBell Mangga Apel">
          <div className="modal">
            <h2>Apa Rahasia PBell Mangga Apel?</h2>
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
                      href="https://www.tokopedia.com/maxx1biz/pbell-rasa-mangga-apel-minuman-serbuk-collagen-100-original-produk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="tokopedia" src={tokopedia} className="tokped" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://shopee.co.id/maxx1bizzofficial/3121804361"
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

export default PbellMapel
