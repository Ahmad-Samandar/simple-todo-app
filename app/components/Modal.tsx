import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpenModal: (open: boolean) => void | boolean;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setOpenModal }) => {
  return (
    <>
      <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
