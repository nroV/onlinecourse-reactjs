import React, { useState } from "react";
import { useCourseContext } from "../../Provider/CourseProvider";

export default function Asidebar({setOption}) {

  const { initstate ,SearchQuery,query,setQuery} = useCourseContext();

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
      <div className="block-search mb-5">
        <h1 className="font-semibold text-xl my-0 mb-3">
          Find Your lovely Course
        </h1>
        <p>Enter the course title that you are desired</p>
        <div className="flex justify-between items-center ">
          <input
            type="search"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
              SearchQuery(e.target.value)
            }}
     
            // onChange={(e)=>SearchQuery(e.target.value)}
            className="p-4 bg-white my-4 box-border rounded-lg w-full
   border-solid border-2 w-96"
            name=""
            id=""
            placeholder="Search Your Course Title"
          />
          <button
          onClick={()=>{
            console.log(query);
            SearchQuery(query)
          }}
            className="w-40 ml-2 bg-[#2B3467] text-blue-100 rounded-lg
          h-auto p-4"
          >
            Search
          </button>
        </div>
      </div>

      <div className="block-filter">
        <h1 className="font-semibold text-xl mt-23 mb-3">Sort Your Course</h1>

        <select
          name=""
          id=""
        onChange={(e)=>setOption(e.target.value)}
          className="p-4 bg-white
        border-solid border-2 w-full"
        >
          <option value="asc">Sort By course name ASC</option>
          <option value="desc">Sort By course name DESC</option>
        </select>
      </div>
    </aside>
  );
}
