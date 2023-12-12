import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";

export default function HeaderCourse() {
  return (

    <header className="flex justify-between items-center mb-5">
    <h3 className="text-xl font-medium ">📂 5 Total Courses</h3>


    <Link className=
     "bg-slate-200 px-11 py-3 text-lg font-medium bg-[#2B3467] rounded-lg flex items-center" 
     to={'course/form'}
     >'
     



 <MdAdd className='' />

 <span> Add New</span>
 
 </Link>

    </header>
  )
}
