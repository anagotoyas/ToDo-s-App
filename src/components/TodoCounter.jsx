import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const TodoCounter = () => {

  const {completedTodos:completed, totalTodos:total} = useContext(TodoContext);
 
  return (
    <>
      {completed === total && total>0 ? (
        <h1 className="text-[1.8rem] py-[30px] px-10 font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-sky-100 via-red-500 to-purple-700">
          Felicitaciones has completado todos tus TODOs
        </h1>
        
      ) : (
        <h1 className="text-[1.8rem] py-[30px] px-10 font-semibold text-center bg-clip-text text-transparent bg-gradient-to-t from-sky-100 via-red-500 to-purple-700">
         
          Has completado {completed} de {total} TODOs
        </h1>
      )}
    </>
  );
};
