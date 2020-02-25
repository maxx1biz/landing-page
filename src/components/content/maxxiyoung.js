import React, { useState } from "react"

import Modal from "../modal"
import maxxiYoung from "../../../static/images/maxxi-young.jpg"
import checkSquare from "../../../static/images/check-square.svg"

import snowAlgae from "../../../static/images/snow-algae.webp"
import appleStem from "../../../static/images/apple-stem-cell.png"
import blueberry from "../../../static/images/blueberry.png"
import marine from "../../../static/images/marine-collagen.png"
import solarVitis from "../../../static/images/solar-vitis.png"
import vitC from "../../../static/images/vit-c.png"
import redBeet from "../../../static/images/red-beet.png"
import glutathione from "../../../static/images/glutathione.png"
import tokopedia from "../../../static/images/tokopedia-logo.png"
import shopee from "../../../static/images/shopee-logo.png"

const MaxxiYoung = () => {
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
        <div className="col-12">
          <div className="show-modal">
            {show ? null : (
              <button onClick={showModal} style={{ float: "right" }}>
                Selengkapnya
              </button>
            )}
          </div>
        </div>
        <Modal show={show} close={closeModal} product="Maxxi Young">
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

            <h3 style={{ margin: "20px 0 0 0", textAlign: "center" }}>
              Apa saja Komposisi Maxxi Young ?
            </h3>

            <div className="row ingridients">
              <div className="col-3">
                <img alt="ingridients" src={snowAlgae} />
                <p>Snow Algae</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={appleStem} />
                <p>Apple Stemcell</p>
              </div>
              <div className="col-3 bberry">
                <img alt="ingridients" src={blueberry} />
                <p>Blueberry</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={marine} />
                <p>Marine Collagen</p>
              </div>
            </div>

            <div className="row ingridients">
              <div className="col-3">
                <img alt="ingridients" src={solarVitis} />
                <p>Solar Vitis</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={vitC} />
                <p>Vitamin C</p>
              </div>
              <div className="col-3 bberry">
                <img alt="ingridients" src={redBeet} />
                <p>Red Beet</p>
              </div>
              <div className="col-3">
                <img alt="ingridients" src={glutathione} />
                <p>Glutathione</p>
              </div>
            </div>

            <h3 style={{ margin: "40px 0 0 0", textAlign: "center" }}>
              Tersedia di
            </h3>

            <div className="olshop">
              <div>
                <a
                  href="https://www.tokopedia.com/maxx1biz/maxxi-young-stemcell-original-produk-suplemen-kesehatan-kecantikan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="tokopedia" src={tokopedia} className="tokped" />
                </a>
              </div>
              <div>
                <a
                  href="https://shopee.co.id/maxx1bizzofficial/3605492265"
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

export default MaxxiYoung
