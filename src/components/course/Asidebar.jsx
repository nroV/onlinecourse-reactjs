import React from "react";

export default function Asidebar() {
  return (
    <aside className="col-span-1 w-full pr-7">
      <div className="block-search mb-5">
        <h1 className="font-semibold text-xl my-24 mb-3">
          Find Your lovely Course
        </h1>
        <p>Enter the course title that you are desired</p>
        <div className="flex justify-between items-center ">
          <input
            type="search"
            className="p-4 bg-white my-4 box-border rounded-lg
   border-solid border-2 w-96"
            name=""
            id=""
            placeholder="Search Your Course Title"
          />
          <button
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
          className="p-4 bg-white
border-solid border-2 w-full"
        >
          <option value="">Sort By course name ASC</option>
          <option value="">Sort By course name DESC</option>
        </select>
      </div>
    </aside>
  );
}
