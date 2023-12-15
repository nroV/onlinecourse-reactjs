import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../components/course/Coursecard";
import Navi from "../components/ui/Navi";
import { Link } from "react-router-dom";
import Asidebar from "../components/course/Asidebar";
import HeaderCourse from "../components/course/HeaderCourse";
import { useCourseContext } from "../Provider/CourseProvider";
import NoItem from "../components/ui/NoItem";

export default function Home() {

  const { initstate } = useCourseContext();

  console.log(initstate);

  const [option,setOption] = useState('asc')

  



  console.log(initstate);
  return (
    <>
      <Navi />

      <section className="
      col-span-3
      md:order-last
      order-3
      sm:col-span-3
      lg:col-span-2
      md:col-span-3
       p-4 sm:pl-6">
        <HeaderCourse />

        <hr />


        {
      initstate?.length === 0 && 

      <NoItem
       header={'There are no available course right now 😢'} 
       text={'Please try again later!!! our team will try our best to cope with it 🏬🔶'} />
      
 
        }

        {/* Rendering Course list Card component here  */}

        { initstate.sort((x,y)=> 
        option === 'asc' ?
        Number(y.id)-Number(x.id) : Number(x.id)-Number(y.id)  ).map((courses) => {
          return <CourseCard key={courses} course = {courses} />;
        })} 
      </section>

      <Asidebar  setOption ={setOption} />


      
    </>
  );
}
