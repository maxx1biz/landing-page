import React, { useState } from "react"

import Modal from "../modal"
import championBooster from "../../../static/images/champion-booster.jpg"
import champion from "../../../static/images/champion.jpg"
import checkLight from "../../../static/images/check-square.svg"

const komposisi = [
  "Meningkatkan Octane dan Cetane",
  "Mesin lebih bersih dan bertenaga",
  "Suara mesin lebih halus",
  "Tarikan lebih ringan",
  "Emisi gas buang lebih rendah",
  "Ramah lingkungan",
  "Membersihkan kerak pada piston",
]

const ChampionBooster = () => {
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
            <img alt={"ChampionBooster"} src={championBooster} />
          </div>
        </div>

        <div className={"col-6"}>
          <div className={"feature__content"}>
            <h2>Champion Booster</h2>
            <p>
              Cairan khusus yang dibuat untuk menaikan oktan banan bakar minyak
              sehingga kerja mesin menjadi lebih optimal dan ramah lingkungan,
              serta membantu membersihkan ruang pembakaran pada msin kendaraan.
            </p>
          </div>
        </div>
      </div>
      <div className="row alboost-details">
        <Modal show={show} close={closeModal} product="ChampionBooster">
          <div className="alboostbox">
            <img alt="ChampionBooster" src={champion} />
          </div>
          <div className="modal">
            <h2>Octane & Cetane Booster</h2>
            <p>
              Cairan serba guna hemat BBM untuk segala jenis kendaraan anda dan
              membantu memulihkan kinerja mesin
            </p>

            <p style={{ marginTop: 20 }}>
              Manfaat dan fungsi Champion Booster :
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

export default ChampionBooster
