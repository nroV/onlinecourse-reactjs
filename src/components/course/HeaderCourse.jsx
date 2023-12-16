import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useCourseContext } from "../../utils/CourseProvider";


export default function HeaderCourse() {
  const { length } = useCourseContext();
  return (
    <header className="sm:flex justify-between items-center mb-5 ">
      <h3 className="text-xl font-medium ">📂 {length} Total Courses</h3>

      <Link
        className="bg-slate-200 
        px-11 py-3 text-lg  font-medium bg-[#2B3467] rounded-lg 
        my-5
        sm:my-0
        flex items-center justify-center 
        hover:bg-slate-300  ease-in-out duration-300"
        to={"course/form"}
      >
       
        <MdAdd className="" />
        <span> Add New</span>
      </Link>
    </header>
  );
}
