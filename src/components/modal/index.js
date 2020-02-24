import React from "react"

const Modal = props => {
  return (
    <div>
      {/* {!props.show ? null : ( */}
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "scale(1)" : "scale(0.33)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h3>{props.product}</h3>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            Tutup
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  )
}

export default Modal
