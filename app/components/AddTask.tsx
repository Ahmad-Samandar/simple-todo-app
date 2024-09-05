"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addNewTodo } from "@/api/api";

const AddTask = () => {
  const [modalOpen, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler = async (e) => {
    e.preventDefault();
    await addNewTodo({
      id: "3",
      text: newTaskValue,
    });
    setNewTaskValue("");
    setOpenModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-primary w-full mt-4"
      >
        Add New Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setOpenModal={setOpenModal}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn ">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
