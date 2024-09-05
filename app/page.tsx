"use client";
import { getAllTodos } from "@/api/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { ITask } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Fetch the todos when the component is first rendered
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getAllTodos();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  // Function to handle adding a new task and updating the list
  const handleAddTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to handle task update
  const handleUpdateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col grap-4">
        <h1 className="text-2xl font-bold"> Todo List App </h1>
        <AddTask onAddTask={handleAddTask} />
      </div>
      <TodoList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}
