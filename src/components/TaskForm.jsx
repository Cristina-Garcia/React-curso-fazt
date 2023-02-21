import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContex";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form
        className="bg-slate-800 p-10 mb-4 flex flex-col justify-center content-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Agrega tu Tarea</h1>
        <input
          value={title}
          placeholder="Escribe tu Tarea"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 "
        />
        <textarea
          value={description}
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-green-400 text-slate-100 px-2 py-1 rounded-md mt-4 hover:bg-green-500  ">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
