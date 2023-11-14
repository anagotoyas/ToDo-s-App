import React from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  return createPortal(
    <>
    <div className="bg-black w-full h-full absolute top-0 opacity-40">
     
    </div>
     <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white min-w-[20rem] min-h-[30rem] md:w-[70%] md:max-w-[50rem] rounded-2xl flex items-center justify-center border shadow-md opacity-100">
     {children}
   </div>
   </>,
    document.getElementById("modal")
  );
};
