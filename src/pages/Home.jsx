import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../components/course/Coursecard";
import Navi from "../components/ui/Navi";
import { Link } from "react-router-dom";
import Asidebar from "../components/course/Asidebar";
import HeaderCourse from "../components/course/HeaderCourse";

import NoItem from "../components/ui/NoItem";
import { useCourseContext } from "../utils/CourseProvider";

export default function Home() {
  const { initstate   } = useCourseContext();

  const [option, setOption] = useState();




  return (
    <>
      <Navi />

      <section
        className="
      col-span-3
      md:order-last
      order-3
      sm:col-span-3
      lg:col-span-2
      md:col-span-3
       p-4 sm:pl-6"
      >
        <HeaderCourse />

        <hr />

        {
        
        initstate?.length === 0 && (
          <NoItem
            header={"There are no available course right now 😢"}
            text={
              "Please try again later!!! our team will try our best to cope with it 🏬🔶"
            }
          />
        )}

        {/* { initstate.sort((x,y)=> 
        option === 'desc' ?
        Number(y.id)-Number(x.id) : Number(x.id)-Number(y.id)  ).map((courses) => {
          return <CourseCard key={courses} course = {courses} />;
        })}  */}

        {!option &&
          initstate?.sort((x, y) => Number(x.id) - Number(y.id))
          
            .map((course) => {
              return <CourseCard key={course.id} course={course} />;
            })}

        {option &&
          initstate?.sort((x, y) =>
              option === "desc"
                ? x.title?.localeCompare(y.title)
                : y.title?.localeCompare(x.title)
            )
            .map((course) => {
              
              console.log(course.id);
              return <CourseCard key={course.id} course={course} />;
            })}
      </section>

      <Asidebar setOption={setOption} />
    </>
  );
}
