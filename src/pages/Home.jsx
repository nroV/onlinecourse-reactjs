import React from "react";
import CourseCard from "../components/course/Coursecard";
import Navi from "../components/menu/Navi";
import { Link } from "react-router-dom";
import Asidebar from "../components/course/Asidebar";
import HeaderCourse from "../components/course/HeaderCourse";

export default function Home() {
  return (
    <>
       <Navi />

      <section className="col-span-2 pl-7">

         <HeaderCourse />

        <hr />

        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>

      <Asidebar/>

    </>
  );
}
