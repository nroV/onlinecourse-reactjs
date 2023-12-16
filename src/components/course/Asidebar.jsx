import React, { useState } from "react";
import { useCourseContext } from "../../utils/CourseProvider";


export default function Asidebar({setOption}) {

  const { initstate } = useCourseContext();

  return (
    <aside className="
    col-span-1
    w-full
    px-5
    my-3
    md:px-6
    col-span-3
    md:col-span-3
    order-1
    sm:col-span-3
    lg:order-last
    md:order-2

    lg:col-span-1
    pr-7">


      <div className="block-filter">
        <h1 className="font-semibold text-xl mt-23 mb-3">Sort Your Course</h1>

        <select
          name=""
          id=""
        onChange={(e)=>setOption(e.target.value)}
          className="p-4 bg-white
        border-solid border-2 w-full"
        >
          <option value="asc">Sort By Title desc</option>
          <option value="desc">Sort By Title asc</option>
        </select>
      </div>
    </aside>
  );
}
