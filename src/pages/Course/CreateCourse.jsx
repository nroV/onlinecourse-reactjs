import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { Link } from "react-router-dom";
import ProgressBar from "../../components/course/ProgressBar";
export default function CreateCourse() {
  const [showcourse, setshowcourse] = useState(true);
  const [showchapter, setchapter] = useState(false);
  const [showlesson, setLesson] = useState(false);

  return (
    <main className="col-span-3 w-full">
      <header className="bg-[#2B3467] text-[#FCFFE7]  px-11 py-6 col-span-3 w-full">
        <h1 className="font-semibold text-3xl">Create Course📔</h1>
        {/* <p className="font-normal text-lg">Course overview</p> */}
      </header>

      <section className="max-w-[900px] m-auto my-16">
        <ProgressBar />
        {showcourse && (
          <CourseSection
            setshowcourse={setshowcourse}
            setchapter={setchapter}
          />
        )}

        {showchapter && (
          <ChapterSection
            setshowcourse={setshowcourse}
            setchapter={setchapter}
          />
        )}
      </section>
    </main>
  );
}

function ChapterSection({ setchapter, setshowcourse }) {
  const [showlesson, setLesson] = useState(false);
  return (
    <div className="container-chapter w-full">
      <header className="flex justify-between items-center">
        <h3 className="text-2xl font-bold mb-7">
          {/* <IoArrowBack
            height={130}
            width={130}
            onClick={() => {
              setchapter((prev) => !prev);
              setshowcourse((prev) => !prev);
            }}
          /> */}
          Chapter{" "}
        </h3>

      <div className="modify flex gap-3">
      <Link 
      to={"/"}
      
      className="bg-slate-200 px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center">
          <span> Save & Close</span>
        </Link>

        <button className=" px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center text-white">
          <span> Add Chapter</span>
        </button>
      </div>
      </header>

      <hr />
      <form className="my-7">
        <input
          type="text"
          placeholder="Chapter Title"
          className="w-full p-3 bg-slate-100 border focus:border-blue-500 text-lg mb-11"
          name=""
          id=""
        />

        <div
          className={`w-full ${showlesson === true ? 'block':'flex'} justify-center p-3 bg-slate-100 border focus:border-blue-500
text-lg mb-11 h-36 resize-none`}
        >
          {showlesson === true ? (
        <>
        
            <input
              type="text"
              placeholder="Name your lesson"
              className="w-full p-3 bg-white border focus:border-blue-500 text-lg mb-3 my-3 h-11"
              name=""
              id=""
            />
           <button
              className="text-[16px] text-[#bebebe] bg-[#2B3467] px-4 py-2 rounded-2xl font-normal"
              type="button"
            onClick={() => {
              // setshowcourse((pre) => !pre)
              // setchapter((pre) => !pre)
              setLesson(pre=>!pre)
            }}
          
            >Save Changes</button>
           
        
        </>
          ) : (
            //only show if lesson is empty 
            <button
              className="text-lg text-[grey]"
              type="button"
              onClick={() => setLesson((pre) => !pre)}
            >
              📁 Create Lesson
            </button>
          )}
          
        </div>
      </form>
      {/* <div className="chapter my-4 rounded border-1 border-b-8">
        <div className="card flex">
          <span className="text-3xl">📑 </span>
          <h4 className="text-lg font-semibold ml-6">
            Chapter 1 Basic Syntax
            <h5 className="text-sm font-normal">3 Lessons</h5>
          </h4>
        </div>
      </div> */}
    </div>
  );
}

function CourseSection({ setchapter, setshowcourse }) {
  return (
    <>
      <div className="container">
        <h3 className="text-2xl font-bold mb-7"> Course</h3>
        <hr />

        <form className="my-7">
          <input
            type="text"
            placeholder="Course title"
            className="w-full p-3 bg-slate-100 border focus:border-blue-500 text-lg mb-11"
            name=""
            id=""
          />
          <textarea
            placeholder="Summary Your Course"
            className="w-full p-3 bg-slate-100 border focus:border-blue-500
text-lg mb-11 h-36 resize-none" // Added resize-none to prevent resizing
            name=""
            id=""
          />
        </form>

        <button
          onClick={() => {
            setchapter((pre) => !pre);
            setshowcourse((pre) => !pre);
          }}
          className="px-3 py-1 text-lg font-medium bg-[#2B3467] rounded-lg flex items-center text-white"
        >
          <span className="mx-4">Next</span>

          <GrLinkNext />
        </button>
      </div>
    </>
  );
}
