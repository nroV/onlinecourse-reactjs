import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
export default function AccordingCard() {
  const [isShow, setAccording] = useState(false);
  return (
    <main className="border-[1px] border-solid border-[grey] mb-0"  onClick={()=>setAccording(pre=>!pre)} >
      <div
        className= {`according flex bg-[#FCFFE7] justify-between w-full items-center p-10 ${isShow && 'border-b-[1px] border-solid border-[grey]'}`}
      >
        <div className="card flex">
          <span className="text-3xl">📑 </span>
          <h4 className="text-lg font-semibold ml-6">
            Chapter 1 Basic Syntax
            <h5 className="text-sm font-normal">3 Lessons</h5>
          </h4>
        </div>
        {
          isShow === false ?  <FaAngleRight width={100} height={100} onClick={()=>setAccording(pre=>!pre)} /> :


          <FaAngleDown width={100} height={100} onClick={()=>setAccording(pre=>!pre)} />

        }

      
      </div>

      {isShow && (
        <>
          <div className="list-lesson p-5">
            {/* display all lesson from each chapter refactor code here  */}
            <div className="card flex items-center mb-5">
              <span className="text-3xl mr-3">📂 </span>

              <h5 className="text-lg font-normal">
                Lesson 1 Running React Js Code
              </h5>
            </div>
            <div className="card flex items-center mb-5">
              <span className="text-3xl mr-3">📂 </span>

              <h5 className="text-lg font-normal">
                Lesson 2 Basic Command Line
              </h5>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
