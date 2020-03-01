import React, { useState } from "react"

import Modal from "../modal"
import championBooster from "../../../static/images/champion-booster.jpg"
import checkLight from "../../../static/images/check-square.svg"
import goGreen from "../../../static/images/go-green.png"
import sucofindo from "../../../static/images/sucofindo.png"
import bestQuality from "../../../static/images/best-quality.png"
import empatpuluh from "../../../static/images/40.png"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const komposisi = [
  "Meningkatkan Octane dan Cetane",
  "Mesin lebih bersih dan bertenaga",
  "Suara mesin lebih halus",
  "Tarikan lebih ringan",
  "Emisi gas buang lebih rendah",
  "Ramah lingkungan",
  "Membersihkan kerak pada piston",
]

const ChampionBooster = ({ official }) => {
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
        <div className="col-12">
          {show ? null : (
            <div className="show-modal">
              <button onClick={showModal} style={{ float: "right" }}>
                Selengkapnya
              </button>
            </div>
          )}
        </div>
        <Modal show={show} close={closeModal} product="ChampionBooster">
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

            <h3 style={{ margin: "20px 0 0 0", textAlign: "center" }}>
              Apa saja Keunggulan Champion Booster ?
            </h3>

            <div className="row ingridients">
              <div className="col-3">
                <img alt="ingridients" src={bestQuality} />
                <p>Top Product</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={goGreen} />
                <p>Mengurangi Emisi Gas</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={sucofindo} />
                <p>No. 3581BBPAM</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={empatpuluh} />
                <p>Irit BBM Hingga 40%</p>
              </div>
            </div>
            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              {official === "official" ? "Tersedia di" : "Harga Produk"}
            </h3>

            <div className="olshop">
              {official === "official" ? (
                <>
                  <div>
                    <a
                      href="https://www.tokopedia.com/maxx1biz/champion-booster-penghemat-bbm-octane-booster-1-botol-30ml"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="tokopedia" src={tokopedia} className="tokped" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://shopee.co.id/maxx1bizzofficial/2738369130"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="shopee" src={shopee} className="shopee" />
                    </a>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <h1>Rp. 35.000,- / Pcs</h1>
                  <h1>Rp. 200.000,- / Box</h1>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ChampionBooster
