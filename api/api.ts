import { ITask } from "@/types/task";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/tasks`);
  return await response.json();
};

export const addNewTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo }),
  });
  const newTodo = await response.json();
  return newTodo;
};
