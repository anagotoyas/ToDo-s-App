import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TodosLoading = ({ cards }) => {
  return Array(cards)
    .fill()
    .map((_, i) => (
      <li className="max-w-[40rem] min-w-[80%]  bg-white  rounded-md my-5 mx-5 p-3 relative flex py-5 items-center" key={i}>
        <div>
          <Skeleton
            circle={true}
            height={20}
            width={20}
            containerClassName="flex-1"
          />
        </div>
        <p className="px-5 w-full">
          <Skeleton count={1} />
        </p>

        <div className="absolute top-2 right-2">
          <Skeleton circle={true} height={15} width={15} />
        </div>
      </li>
    ));
};
