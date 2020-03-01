import React from "react"
import LayoutUser from "../../components/layoutUser"
import SEO from "../../components/seo"

import mui from "../../../static/images/mui.png"
import iso from "../../../static/images/iso.png"
import haccp from "../../../static/images/haccp.png"
import gmp from "../../../static/images/gmp.png"

import whatsapp from "../../../static/images/whatsapp.png"
import payment from "../../../static/images/payment.png"
import deliver from "../../../static/images/deliver.png"
import tokopedia from "../../../static/images/tokopedia.png"

import MaxxiYoung from "../../components/content/maxxiyoung"
import PbellMapel from "../../components/content/pbellMapel"
import PbellStrawBerry from "../../components/content/pbellStrawberry"
import PbellEyeRain from "../../components/content/pbellEyerain"
import AlBoost from "../../components/content/alboost"
import Gloweren from "../../components/content/gloweren"
import ChampionBooster from "../../components/content/championBooster"
import JosieKoffie from "../../components/content/josiekoffie"
import AishiHydrogen from "../../components/content/aishiHydrogen"

const Username = () => {
  return (
    <LayoutUser>
      <SEO title="Username" />

      <div className={"page-header home"}>
        <h1>Ayo Hidup Sehat!</h1>
        <h3 style={styles.heroDesc}>
          Kami menyediakan produk kesehatan dan kecantikan yang terbuat dari
          komposisi <br /> bahan alami, serta produk unggulan lainya dari
          <strong style={{ fontWeight: 800 }}> Maxx1Biz</strong>
        </h3>
        <div className={"mail-form"}>
          <a
            href="https://api.whatsapp.com/send?phone=6281213932888&text=Halo%20Saya%20mau%20pesan%20Produk%20Maxx1Biz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saya Mau!
          </a>
        </div>
      </div>

      <div className={"container"}>
        <div className={"targets"}>
          <div className={"row"}>
            <div className={"col-4"}>
              <div className={"item"}>
                <img
                  alt={"Whatsapp"}
                  src={whatsapp}
                  style={styles.providesImg}
                />
                <h3>Pesan</h3>
                <p>
                  Pesan melaui WhatsApp, kami juga melayani pesanan melaui
                  marketplace seperti Tokopedia
                </p>
              </div>
            </div>

            <div className={"col-4"}>
              <div className={"item"}>
                <img alt={"payment"} src={payment} style={styles.providesImg} />
                <h3>Lakukan Pembayaran</h3>
                <p>
                  Proses transaksi dilakukan setelah anda memesan produk yang
                  anda pilih
                </p>
              </div>
            </div>

            <div className={"col-4"}>
              <div className={"item"}>
                <img alt={"deliver"} src={deliver} style={styles.providesImg} />
                <h3>Produk Siap Diantar</h3>
                <p>
                  Pesenan kamu segera diantar sesuai alamat setelah proses
                  pembayaran selesai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"future-bg"}>
        <div className={"container features"} id="the-products">
          <MaxxiYoung />
          <PbellMapel />
          <PbellStrawBerry />
          <PbellEyeRain />
          <AlBoost />
          <Gloweren />
          <ChampionBooster />
          <JosieKoffie />
          <AishiHydrogen />
        </div>
      </div>

      <div className={"certificate"}>
        <div className={"container"}>
          <h1>Sertifikasi</h1>
          <div className={"cerfified-list"}>
            <div className={""}>
              <img alt={"mui"} src={mui} />
            </div>
            <div className={""}>
              <img alt={"iso"} src={iso} />
            </div>
            <div className={""}>
              <img alt={"haccp"} src={haccp} />
            </div>
            <div className={""}>
              <img alt={"gmp"} src={gmp} />
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-person">
        <h1>
          Sudah siap untuk hidup sehat{" "}
          <span role="img" aria-label="question">
            ❓
          </span>
        </h1>
        <h2>
          Hubungi kami saja, atau langsung belanja melalui{" "}
          <span> Tokopedia</span>{" "}
          <span role="img" aria-label="smile">
            😃
          </span>
        </h2>

        <div className="row">
          <div className="col-6">
            <a
              href="https://api.whatsapp.com/send?phone=6281213932888&text=Halo%20Saya%20mau%20pesan%20Produk%20Maxx1Biz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img alt="whatsapp" src={whatsapp} />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="col-6">
            <a
              href="https://www.tokopedia.com/maxx1biz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img alt="tokopedia" src={tokopedia} />
              <span>Tokopedia</span>
            </a>
          </div>
        </div>
      </div>
    </LayoutUser>
  )
}

const styles = {
  heroDesc: {
    fontSize: 33,
    fontWeight: 500,
  },
  providesImg: {
    height: 65,
  },
}

export default Username
