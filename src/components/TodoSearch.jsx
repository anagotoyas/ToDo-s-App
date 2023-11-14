import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const TodoSearch = () => {
  

const {searchValue, setSearchValue} = useContext(TodoContext);

  return (
    <div className="w-full justify-center flex">
      <input
        type="text"
        placeholder="Cortar cebolla"
        className="border-2 border-blue-200 leading-8 px-2 rounded-md w-[80%] text-gray-700"
        value={searchValue}
        onChange={(event)=> {
          setSearchValue(event.target.value);
          
        }}
      />
    </div>
  );
};
