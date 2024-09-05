import { ITask } from "@/types/task";
import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { editTodo, deleteTodo } from "@/api/api";

interface TaskProps {
  task: ITask;
  onUpdateTask: (task: ITask) => void;
  onDeleteTask: (taskId: string) => void; // New prop for handling task deletion
}

const Task: React.FC<TaskProps> = ({ task, onUpdateTask, onDeleteTask }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTask = {
      id: task.id,
      text: taskToEdit,
    };

    const result = await editTodo(updatedTask); // Update the task on the server
    onUpdateTask(result); // Update the task in the parent component
    setOpenModalEdit(false);
  };

  const handleDeleteTask = async () => {
    await deleteTodo(task.id); // Call the API to delete the task
    onDeleteTask(task.id); // Update the parent component to remove the task
    setOpenModalDelete(false);
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-green-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setOpenModal={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg text-center">Edit Task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Edit task here"
                className="input input-bordered w-full max-w-xs"
              />
              <button type="submit" className="btn ">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        {/* Delete Button and Modal */}
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDelete} setOpenModal={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure you want to delete this task?
          </h3>
          <button onClick={handleDeleteTask} className="btn btn-error">
            Yes
          </button>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
