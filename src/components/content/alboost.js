import React, { useState } from "react"

import Modal from "../modal"
import alboost from "../../../static/images/alboost.jpg"
import alBoostBottle from "../../../static/images/alboost-bottle.jpg"
import checkLight from "../../../static/images/check-light.svg"

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
    <div className={"feature__item"}>
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
        <Modal show={show} close={closeModal} product="AlBoost">
          <div className="alboostbox">
            <img alt="AlBoost" src={alBoostBottle} />
          </div>
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

export default AlBoost
