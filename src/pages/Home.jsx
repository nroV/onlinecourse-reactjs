import React, { useContext } from "react";
import CourseCard from "../components/course/Coursecard";
import Navi from "../components/menu/Navi";
import { Link } from "react-router-dom";
import Asidebar from "../components/course/Asidebar";
import HeaderCourse from "../components/course/HeaderCourse";
import { useCourseContext } from "../context/CourseProvider";

export default function Home() {
  const { initstate } = useCourseContext();

  return (
    <>
      <Navi />

      <section className="col-span-2 pl-7">
        <HeaderCourse />

        <hr />

        {/* Rendering Course list Card component here  */}

        {initstate.sort((x,y)=>y.id -x.id).map((courses) => {
          return <CourseCard key={courses} course = {courses} />;
        })} 
      </section>

      <Asidebar />


      
    </>
  );
}
