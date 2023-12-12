import React from "react";
import { Outlet } from "react-router-dom";
import Navi from "../menu/Navi";

export default function Layout({ children }) {
  return (
    <>

      <div
        className="m-auto max-w-[1320px] grid grid-cols-3
    gap-9 
    justify-items-center my-12 px-0 border-[1px] border-solid border-black"
      >
    
        <Outlet />
      </div>
    </>
  );
}
