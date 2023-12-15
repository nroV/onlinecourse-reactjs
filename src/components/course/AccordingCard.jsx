import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

export default function AccordingCard({ chapter }) {
  const [isShow, setAccording] = useState(false); 
  const { name, lessons } = chapter;

  return (
    <main
      className="border-[1px] border-solid border-[grey] mb-0"
      // onClick={() => setAccording((pre) => !pre)}
    >
      <div
        className={`according flex
        hover:bg-[#f9ffc0] ease-in-out duration-300
         bg-[#FCFFE7] justify-between w-full items-center p-10 ${
          isShow && "border-b-[1px] border-solid border-[grey]"
        }` 
      
      }
         onClick={() => setAccording((pre) => !pre)}
      >
        <div className="card flex">
          <span className="text-3xl">📑 </span>
          <h4 className="text-lg font-semibold ml-6">
            {name}
            <h5 className="text-sm font-normal">{lessons?.length} Lessons</h5>
          </h4>
        </div>
        {isShow === false ? (
          <FaAngleRight
            width={100}
            height={100}
            onClick={() => setAccording((pre) => !pre)}
          />
        ) : (
          <FaAngleDown
            width={100}
            height={100}
            onClick={() => setAccording((pre) => !pre)}
          />
        )}
      </div>

      {isShow && (
        <>
          <div className="list-lesson p-10  mb-3">
            {/* display all lesson from each chapter refactor code here  */}
            {lessons?.map((lesson) => (
              <LessonCard lesson={lesson} key={lesson.id}  />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

function LessonCard({lesson}) {
  return (
    <a href='' className="card flex items-center mb-5 hover:cursor-pointer"  download="example_document.pdf">
      <span className="text-3xl mr-3">📂 </span>

      <h5 className="text-lg font-normal ">{lesson.title}</h5>
    </a>
  );
}
