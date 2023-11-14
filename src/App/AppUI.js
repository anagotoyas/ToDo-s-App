import React, { useContext } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { RiCloseFill } from "react-icons/ri";
import { TodoForm } from "../TodoForm";

export const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,

  } = useContext(TodoContext);

  
  return (
    <div className="h-screen w-full  items-center bg-gradient-to-br from-orange-100 to-red-200">
      <TodoCounter />

      <TodoSearch  />

      <TodoList>
        {loading && <TodosLoading cards={5} />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {!loading &&
          searchedTodos.length > 0 &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>

      <CreateTodoButton />
      {openModal && (
        <Modal>
            <RiCloseFill 
            className="absolute right-2 top-2 font-bold text-red-500 text-[1.5rem] hover:bg-slate-200 hover:rounded-full" onClick={()=>{setOpenModal(!openModal)}}/>
            <TodoForm />

        </Modal>
      )}
      
    </div>
  );
};
