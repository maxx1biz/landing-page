import React from "react"

const Testimoni = () => {
  return (
    <div className={" testi-video"}>
      <h1>Testimoni, Apa kata Mereka ?</h1>
      <div className={"testi-row row"}>
        <div className="embed-container col-4">
          <iframe
            title="testi1"
            src="https://www.youtube.com/embed/Z9HUOOD-LP0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-container col-4">
          <iframe
            title="testi2"
            src="https://www.youtube.com/embed/fvcA8BmMKUY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="embed-container col-4">
          <iframe
            title="testi3"
            src="https://www.youtube.com/embed/QgcRQheaWcg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Testimoni
