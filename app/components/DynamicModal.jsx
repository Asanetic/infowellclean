"use client";
import React, { useState, useEffect, useRef } from 'react';
import { registerModal } from './MosyCard'

function DynamicModal() {
  const [modalProps, setModalProps] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    registerModal(
      (props) => setModalProps(props),
      () => setModalProps(null)
    );
  }, []);

  useEffect(() => {
    if (modalProps) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [modalProps]);

  const handleOutsideClick = (e) => {
    if (
      modalProps?.dismissOnOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      setModalProps(null);
    }
  };

  if (!modalProps) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block', zIndex: 1055 }}
        onMouseDown={handleOutsideClick}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content col-md-12 shadow" ref={modalRef}>
            <div className="modal-header col-md-12">
              <h6 className="modal-title col-md-12 ml-4 pl-4 ml-lg-2 pl-lg-2">
                {modalProps.title}
              </h6>
              <button
                style={{ marginTop: '-20px' }}
                type="button"
                className="btn-close bg-white border-0"
                onClick={() => setModalProps(null)}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="modal-body col-md-12 p-0 m-0 border-top border_set">{modalProps.body}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicModal;
