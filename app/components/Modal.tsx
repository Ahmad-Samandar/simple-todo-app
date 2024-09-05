import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpenModal: (open: boolean) => void | boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setOpenModal, children }) => {
  return (
    <>
      <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
