import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../components/course/Coursecard";
import Navi from "../components/ui/Navi";
import { Link } from "react-router-dom";
import Asidebar from "../components/course/Asidebar";
import HeaderCourse from "../components/course/HeaderCourse";

import NoItem from "../components/ui/NoItem";
import { useCourseContext } from "../utils/CourseProvider";

export default function Home() {
  const { initstate ,searchresult , query } = useCourseContext();

  const [option, setOption] = useState();



  const courses = query !== "" ? searchresult : initstate

  //condition to check whether is in search mode we use the search state result 
  //if not we use the initstate



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
        
        courses?.length === 0 && (
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
          courses?.sort((x, y) => Number(x.id) - Number(y.id))
            .map((course) => {
              return <CourseCard key={course} course={course} />;
            })}

        {option &&
          courses?.sort((x, y) =>
              option === "desc"
                ? x.title?.localeCompare(y.title)
                : y.title?.localeCompare(x.title)
            )
            .map((course) => {
              return <CourseCard key={courses} course={course} />;
            })}
      </section>

      <Asidebar setOption={setOption} />
    </>
  );
}
