import React from "react"

const Modal = props => {
  return (
    <div className="col-12">
      {!props.show ? null : (
        <div className="modal-wrapper">
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={props.close}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
