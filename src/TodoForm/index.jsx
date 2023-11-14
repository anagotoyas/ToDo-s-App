import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export const TodoForm = () => {
  const { setOpenModal, openModal, addTodo } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("")

  const onChange = (e) => {
      setNewTodoValue(e.target.value)
      console.log(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(!openModal);
  };
  const onCancel = (e) => {
    setOpenModal(!openModal);
  };
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex items-center justify-center flex-col w-full"
    >
      <label className="text-xl font-semibold">Escribe tu nuevo TODO</label>
      <textarea
        name="todo"
        id="todo"
        cols="20"
        rows="5"
        placeholder="Estudiar React"

        onChange={(e) => onChange(e)}
        className="mt-5 border-blue-500 border-2 rounded-md p-2 box-shadow-md w-5/6 text-lg"
      ></textarea>
      <div className="flex justify-around w-full mt-5">
        <button
          type="button"
          className="bg-gray-600 hover:bg-gray-400 px-4 py-2 rounded-md text-white"
          onClick={(e) => onCancel(e)}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-400  px-4 py-2 rounded-md text-white"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};
