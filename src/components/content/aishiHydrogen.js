import React, { useState } from "react"

import Modal from "../modal"
import aishi from "../../../static/images/aishi.jpg"
// import aishiBottle from "../../../static/images/aishi-bottle.jpg"
import checkLight from "../../../static/images/check-square.svg"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const komposisi = [
  "Mengurangi Rasa Sakit",
  "Menormalkan Gula Darah dan Kadar Insulin",
  "Membantu Menormalkan Tekanan Darah",
  "Memperlancar Sistem Pencernaan",
  "Mencegah Kanker, Batu Ginjal dan Sakit Liver",
  "Meluruhkan Lemak Tubuh dan Detoksifikasi",
  "Mempercepat Penyembuhan Luka",
  "Membantu penyembuhan Sakit Maag",
  "Menetralkan Asam Lambung Ditubuh",
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
    <div
      className={"feature__item product-top"}
      style={{ border: show ? "2px solid #888" : "none" }}
    >
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
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal} style={{ float: "right" }}>
                Selengkapnya
              </button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="Aishi - Hydrogen Water">
          <div className="modal">
            <h2>Hidup sehat dimulai dari minum Aishi Hydrogen Water</h2>
            <p>
              Maningkatkan Kandungan Antioksidan Hidrogen dan Oksigen dalam air
            </p>

            <p style={{ marginTop: 20 }}>
              Berbagai manfaat Aishi Hydrogen Water :
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
                  href="https://www.tokopedia.com/maxx1biz/hydrogen-water-generator-aishi-new-generation-tumbler-pem-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="tokopedia" src={tokopedia} className="tokped" />
                </a>
              </div>
              <div>
                <a
                  href="https://shopee.co.id/maxx1bizzofficial/5110866377"
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

export default AishiHydrogen
