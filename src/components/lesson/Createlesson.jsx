import React from 'react'

export default function Createlesson({temlesson,onEditLesson,deletelesson}) {
  return (
    <div className="lesson my-4 rounded w-full">
    {temlesson?.map((lesson, index) => (
      <div className="card flex mb-6 w-full justify-between items-center flex-wrap" key={lesson}>
        <div className="left flex items-center my-5 sm:my-0">
          <p className="text-3xl">📂 </p>
          <h4 className="text-lg font-semibold ml-6">{lesson.title}</h4>
        </div>

        <div className="btn-gp space-x-4">


          <button  onClick={()=>onEditLesson(lesson.title,lesson.id)}
             
            className="text-blue-500"
          >
            Edit
          </button>
          <button
            onClick={(e) => deletelesson(lesson.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}
