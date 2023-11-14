import React from "react";

export const TodoList = ({ children }) => {
  return <ul className="flex  flex-col items-center overflow-y-auto h-[calc(70%)]">{children}</ul>;
};
