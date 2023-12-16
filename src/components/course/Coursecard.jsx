import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCourseContext } from "../../utils/CourseProvider";


export default function CourseCard({ course }) {
  const { title, id, img, summaries, chapters } = course;
  const navigate = useNavigate()

  const { initstate,dispatch } = useCourseContext();

  function deletecourse(id) {
    console.log(id);
    const newcourse = initstate.filter((course) => course.id !== id);

  
    // filterr a new list of course that doesnt contain the id that user press

    if( ! window.confirm("Do you want to delete this course?")) {
   // ask user to comfirm there deletion if not cancel it by using return keyword
      return 
    }
    dispatch({
      //call dispatch to send our action delete and new payload to trigger reducer to update new
      //course state 
      type:"course/delete",
      payload:newcourse
    })
  }

  function editcourse(id) {
    navigate(`course/edit/${course.id}`)
  }
  return (
    <main className="sm:flex my-5 p-7 rounded-md bg-slate-200 gap-11 
    hover:bg-slate-300 ease-in-out duration-300
    
    ">
      <div className="img mr-8">
        <img src={img} alt={title} className="w-[130px] h-full object-cover" />
      </div>

      <div className="course flex-1">
        <Link to={`course/${course.id}`}>
          <h3 className="font-semibold text-xl hover:underline my-5 sm:my-0">{title} </h3>
        </Link>

        {/* <p className="text-slate-600 my-2 text-sm">📅 Dec 8 ,2023</p> */}
        <p className="text-sm text-slate-800 my-3">{summaries}</p>
      </div>

      <div className="modify sm:my-0 my-10 space-x-3 sm:space-x-0">  
        <button className="
        px-5
        sm:px-1
        sm:w-full
        py-2 mb-2 bg-[#2B3467] text-blue-100 
        text-[14.5px] sm:text-lg
        rounded-lg hover:bg-[#000000] ease-in-out duration-300"
             onClick={editcourse}
        >
          Edit
        </button>
        <button
          onClick={() => deletecourse(course.id)}
          className="px-1 
          sm:w-full
          px-5
          sm:px-1
          text-[14.5px] sm:text-lg
          py-2 bg-[#EB455F] text-blue-100 rounded-lg 
          hover:bg-[#ca253e] ease-in-out duration-300"
        >
          Delete
        </button>
      </div>
    </main>
  );
}
{
  /* improvement make it reuseable button or change popup ui button */
}
