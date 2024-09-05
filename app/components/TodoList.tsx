import { ITask } from "@/types/task";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
  onUpdateTask: (task: ITask) => void;
  onDeleteTask: (taskId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
