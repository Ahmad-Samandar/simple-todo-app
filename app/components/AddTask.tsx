"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [modalOpen, setOpenModal] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-primary w-full mt-4"
      >
        Add New Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AddTask;
