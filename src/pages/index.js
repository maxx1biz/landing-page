import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mui from "../../static/images/mui.png"
import iso from "../../static/images/iso.png"
import haccp from "../../static/images/haccp.png"
import gmp from "../../static/images/gmp.png"

import Provides from "../components/provides"
import Testimoni from "../components/testimoni"
import MaxxiYoung from "../components/content/maxxiyoung"
import PbellMapel from "../components/content/pbellMapel"
import PbellStrawBerry from "../components/content/pbellStrawberry"
import PbellEyeRain from "../components/content/pbellEyerain"
import AlBoost from "../components/content/alboost"
import Gloweren from "../components/content/gloweren"
import ChampionBooster from "../components/content/championBooster"
import JosieKoffie from "../components/content/josiekoffie"
import AishiHydrogen from "../components/content/aishiHydrogen"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Your Bussiness Partner" />

      <div className={"page-header home"}>
        <h1>Your Bussiness Partner</h1>
        <p>
          Maxx1Biz adalah sebuah perusahaan Smart Retailing berbasis aplikasi
          yang dijalankan dengan secara online.
          <br />
          Maxx1Biz memberi kesempatan kepada siapapun yang ingin bekerja untuk
          mencapai mimpi.
        </p>
        <div className={"mail-form"}>
          <a
            href="https://maukaya.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar!
          </a>
        </div>
      </div>

      <Provides />

      <div className={"future-bg"}>
        <div className={"container features"} id="the-products">
          <MaxxiYoung official="official" />
          <PbellMapel official="official" />
          <PbellStrawBerry official="official" />
          <PbellEyeRain official="official" />
          <AlBoost official="official" />
          <Gloweren official="official" />
          <ChampionBooster official="official" />
          <JosieKoffie official="official" />
          <AishiHydrogen official="official" />
        </div>
      </div>

      <Testimoni />

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
    </Layout>
  )
}

export default IndexPage
