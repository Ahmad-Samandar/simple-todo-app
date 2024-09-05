import { ITask } from "@/types/task";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/tasks`, {
    cache: "no-store",
  });
  const todos = await response.json();
  return todos;
};

export const addNewTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseURL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseURL}/tasks/${id}`, {
    method: "DELETE",
  });
};
