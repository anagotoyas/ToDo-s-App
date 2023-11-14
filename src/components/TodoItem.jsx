import React from "react";
import {RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiCloseFill } from "react-icons/ri";


export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="max-w-[40rem] min-w-[80%]  bg-white  rounded-md my-5 mx-5 p-3 relative flex py-5 items-center">
      {completed ? (
        <>
          <RiCheckboxCircleLine className="text-[1.5rem] font-semibold text-green-500 hover:bg-slate-200 hover:rounded-full"   onClick={onComplete}/>
          <p className="pl-5 line-through">{text}</p>
        </>
      ) : (
        <><RiCheckboxBlankCircleLine className="text-[1.5rem] font-semibold text-green-500  hover:bg-slate-200 hover:rounded-full"  onClick={onComplete}/>
        <p className="pl-5 ">{text}</p></>
      )}

     
      <RiCloseFill className="absolute right-2 top-2 font-bold text-red-500 text-[1.5rem] hover:bg-slate-200 hover:rounded-full" onClick={onDelete} />
    </li>
  );
};
