import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const CreateTodoButton = () => {
 
  const {openModal,   setOpenModal} = useContext(TodoContext);

  return (
    <div className="flex w-full items-center justify-center">
      <button className="bg-red-500 px-8 py-2 text-white font-semibold  rounded-md my-5" onClick={()=>{setOpenModal(!openModal)}}>
        Crear nueva tarea
      </button>
    </div>
  );
};
