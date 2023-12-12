
import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard() {
  return (

    <Link  className='flex my-5 p-7 rounded-md bg-slate-200' to={'course/1'} >


    <div className="img mr-8">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
       alt="img" className='w-[100%] h-24'
       />
    </div>

    <div className="course">
        <h3 className='font-semibold text-lg'>Next.Js 14 & React – The Complete Guide</h3>
         <p className='text-slate-600 my-2 text-sm'>📅 Dec 8 ,2023</p>
        <p className='text-sm text-slate-800'>Learn NextJS 14 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router! What you'll learn Learn how to build fullstack React apps with NextJS 14 & the App Router…</p>
    </div>

    <div className="modify">

   
        <button className='px-4 w-full py-2 mb-2 bg-[#2B3467] text-blue-100 rounded-lg'>
          Edit
        </button>
        <button className='px-4 w-full py-2 bg-[#EB455F] text-blue-100 rounded-lg'>
          Delete
        </button>
    </div> 
</Link>
  )
}
 {/* improvement make it reuseable button or change popup ui button */}