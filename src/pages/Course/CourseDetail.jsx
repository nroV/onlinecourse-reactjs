import React from "react";

import AccordingCard from "../../components/course/AccordingCard";



export default function CourseDetail() {
  return (
    <main className="col-span-3 w-full">
      <header className="bg-[#2B3467] w-full text-[#FCFFE7] px-11 py-8">
        <h1 className="text-4xl mb-6">
          Next.Js 14 & React – The Complete Guide
        </h1>
        <p>
          A practical programming course for office workers, academics, and
          administrators who want to improve their productivity.
        </p>
      </header>

      <div className="body mb-6 px-11 py-1">
        <h1 className="text-2xl mb-6 font-bold my-8 mb-7">Course Content</h1>

        <div className="detail flex gap-5">
          <p>📁 10 chapters</p>
          <p> 📁 55 lessons</p>
        </div>
      </div>

      <hr />

      {/* display the chapter contain lessons list here  */}

      <AccordingCard/>
      <AccordingCard/>
      <AccordingCard/>
    </main>
  );
}

//Refector component here
