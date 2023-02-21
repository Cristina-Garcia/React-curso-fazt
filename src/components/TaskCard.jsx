import { useContext } from "react";
import { TaskContext } from "../context/TaskContex";

export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex flex-col">
      <h1 class="text-x1 font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-500"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}
