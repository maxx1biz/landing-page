import React, { useState } from "react"

import Modal from "../modal"
import alboost from "../../../static/images/alboost.jpg"
import checkLight from "../../../static/images/check-light.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const komposisi = [
  "Menambah masa otot agar badan lebih berisi bagi anak-anak",
  "Mempercepat penyembuhan luka dan operasi",
  "Mengandung protein yang baik untuk kecerdasan otak",
  "Meningkatkan daya than tubuh",
  "Terapi yang baik untuk penyembuhan luka bagi penderita diabebtes dan stroke",
  "Bagus untuk suplemen ibu hamil",
  "Mempercepat penyembuhan pasca melahirkan normal maupun sesar",
  "Tidak ada efek samping dan cocok untuk semua umur",
]

const AlBoost = () => {
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
            <img alt={"AlBoost"} src={alboost} />
          </div>
        </div>

        <div className={"col-6"}>
          <div className={"feature__content"}>
            <h2>AlBoost - Kapsul Extrak Ikan Gabus</h2>
            <p>
              kapsul ekstrak ikan Kutuk / Gabus yang kaya akan protein
              bermaanfaat untuk tubuh, dapat mengatur tekanan osmosis & volume
              darah sehingga mempertahankan volume darah.
            </p>
          </div>
        </div>
      </div>
      <div className="row alboost-details">
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal} style={{ float: "right" }}>
                Selengkapnya
              </button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="AlBoost">
          <div className="modal">
            <h2>The new future for boosting your Albumin levels</h2>
            <p>
              Suplemen suportif untuk meningkatkan kadar albumin plasma dan
              respon penyembuhan. Pada orang dewasa, Alboost membantu mengatur
              kadar kolesterol, tekanan darah dan baik untuk membantu memelihara
              kesehatan jantung serta sistem imun. Alboost baik juga untuk
              anak-anak, fungsinya untuk membantu memenuhi kebutuhan gizi pada
              anak & mencegah stunting pada anak.
            </p>

            <p style={{ marginTop: 20 }}>
              Megandung Ekstrak Ikan Kutuk dan Albumin untuk :
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
                  href="https://www.tokopedia.com/maxx1biz/alboost-kapsul-ekstrak-ikan-kutuk-berkualitas-100-original"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="tokopedia" src={tokopedia} className="tokped" />
                </a>
              </div>
              <div>
                <a
                  href="https://shopee.co.id/maxx1bizzofficial/6710862839"
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

export default AlBoost
