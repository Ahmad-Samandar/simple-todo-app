import { ITask } from "@/types/task";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/tasks`);
  return await response.json();
};
