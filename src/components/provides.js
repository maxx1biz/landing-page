import React from "react"

import informationImage from "../../static/images/Information-document.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

export default function Provides() {
  return (
    <div className={"container"}>
      <div className={"targets"}>
        <div className={"row"}>
          <div className={"col-4"}>
            <div className={"item"}>
              <img alt={"Information"} src={informationImage} />
              <h3>Aplikasi</h3>
              <p>
                Proses transaksi dan jual beli menjadi lebih prakrtis dengan
                adanya aplikasi Android
              </p>
            </div>
          </div>

          <div className={"col-4"}>
            <div className={"item"}>
              <img alt={"Event"} src={ProductivityImage} />
              <h3>Kualitas Produk</h3>
              <p>
                Produk dengan sertifikasi yang resmi sehingga kualitasnya sudah
                terjamin
              </p>
            </div>
          </div>

          <div className={"col-4"}>
            <div className={"item"}>
              <img alt={"Happiness"} src={happinessImage} />
              <h3>Siap Untuk Hidup Sehat</h3>
              <p>
                Dengan banyaknya khasiat dan manfaat, dapat memberi dampak
                kesehatan yang signfikan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
