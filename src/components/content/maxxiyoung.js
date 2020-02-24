import React, { useState } from "react"

import Modal from "../modal"
import maxxiYoung from "../../../static/images/maxxi-young.jpg"
import maxxiYoungBox from "../../../static/images/maxxiyoung-box.jpg"
import checkSquare from "../../../static/images/check-square.svg"

// import snowAlgae from '../../../static/images/snow-algae.jpg'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'
// import snowAlgae from '../../../static/images/snow-algae.jp'

const MaxxiYoung = () => {
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className={"feature__item"}>
      <h1 className={"product-title"}>Lini Produk Terbaik</h1>
      <div className={"row"}>
        <div className={"col-6 first"}>
          <div className={"thumbnail"}>
            <img alt={"Event"} src={maxxiYoung} />
          </div>
        </div>

        <div className={"col-6"}>
          <div className={"feature__content"}>
            <h2>Maxxi Young - Suplemen kecantikan</h2>
            <p>
              Maxxi Young adalah Micronutrient yang memberikan nutrisi untuk
              sel-sel pada tubuh kita. Micronutrient sangat dibutuhkan oleh
              tubuh dalam pembentukan hormon, mengatur fungsi sistem imun &
              sistem reproduksi
            </p>
          </div>
        </div>
      </div>
      <div className="row maxxi-details">
        <Modal show={show} close={closeModal} product="Maxxi Young">
          <div className="maxxibox">
            <img alt="MaxxiYoungBox" src={maxxiYoungBox} />
          </div>
          <div className="modal">
            <h2>Mengapa Harus Memilih Maxxi Young?</h2>
            <ul className="pluslist">
              <li>
                <img alt="checklist" src={checkSquare} /> Maxxi Young
                meregenerasi sel mati pada tubuh dan organ{" "}
              </li>
              <li>
                <img alt="checklist" src={checkSquare} /> Mencerahkan kulit
                wajah lebih maksimal dan alami, serta menghilangkan bintik hitam
                pada wajah
              </li>
              <li>
                <img alt="checklist" src={checkSquare} /> Maxxi Young
                menggunakan bahan-bahan istimewa yang langka dan berkualitas
              </li>
              <li>
                <img alt="checklist" src={checkSquare} /> Meningkatkan sistem
                metabolisme tubuh
              </li>
              <li>
                <img alt="checklist" src={checkSquare} /> Produk sudah terdaftar
                di BPOM RI MD 867009001323
              </li>
            </ul>

            <div className="row">
              <div className="col-3">
                <img alt="ingridients" src={"asa"} />
              </div>
              <div className="col-3">
                <img alt="ingridients" src={"asa"} />
              </div>
              <div className="col-3">
                <img alt="ingridients" src={"asa"} />
              </div>
              <div className="col-3">
                <img alt="ingridients" src={"asa"} />
              </div>
            </div>
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

export default MaxxiYoung
