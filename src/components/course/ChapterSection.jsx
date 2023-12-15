import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { FaCircleXmark } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourseContext } from "../../Provider/CourseProvider";
import { ChapterPreview } from "../../components/course/ChapterPreview";
import { CreateandEditForm } from "../../components/course/CreateandEditForm";
export function ChapterSection({
    ischempty,
    editandaddlesson,
    deletelesson = { deletelesson },
    chid,
    setnewchapter,
    setEditChapterId,
    updatechandlesson,
    clickonchapter,
    setchapter,
    temchapter,
    id,
    setshowcourse,
    chtitle,
    letitle,
    setchtitle,
    title,
    setletitle,
    setTemlesson,
    temlesson,
    saveandclose,
    setnewLesson,
    lessons,
    addnewchapter,
    issave,
  }) {
    const [showlesson, setLesson] = useState(false);
  
    const [isedit, setEdit] = useState(false);
  
    const [isAddnew,setAddNew] = useState(false);
  
    const [currlesson,setidlesson] = useState(0)
  
    //create tempory lesson holder
  
    function deletechapter(chapterid) {
   
      const updatedlesson = temchapter.filter(
        (chapter) => Number(chapter.id) !== Number(chapterid)
      );


      setnewchapter(updatedlesson);
   
    }
  
    console.log(ischempty);
    return (
      <div className="container-chapter w-full">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-7">
            {/* <IoArrowBack
              height={130}
              width={130}
              onClick={() => {
                setchapter((prev) => !prev);
                setshowcourse((prev) => !prev);
              }}
            /> */}
            Chapter{" "}
          </h3>
  
          <div className="modify flex gap-3">
            <button
              disabled={ischempty}
              onClick={id !== undefined ? () => saveandclose(true) : saveandclose}
              className={`bg-slate-200 px-3 py-1 text-md font-medium bg-[#2B3467]
              ${ischempty && 'bg-slate-500 hover:cursor-not-allowed text-gray-400 font-normal' }
              rounded-lg flex items-center}`}
            >
              <span>
                {" "}
                {id !== undefined ? "Update & Change" : "Saved & Close"}{" "}
              </span>
            </button>
  
            <button  
                disabled={ischempty && !id }
              onClick={() => {
  
  
  
       
  
  
                if (chtitle && isedit) {
                  addnewchapter();
                }
  
  
                console.log(isedit);
                setEdit(pre=>!pre)
                setchtitle("")
                setTemlesson([])
                setAddNew(true)
  
          
               
            
              }}
              className={`px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center text-white   ${(ischempty && !id ) && 'bg-slate-500 hover:cursor-not-allowed text-gray-400 font-normal'}`}
            >
              <span> Add New</span>
            </button>
          </div>
        </header>
  
        <hr />
  
        {id && (
          <ChapterPreview
            deletechapter={deletechapter}
            clickonchapter={clickonchapter}
            chapters={temchapter}
            setEditChapterId={setEditChapterId}
            setEdit={setEdit}
            setAddNew={setAddNew }
          />
        )}
  
        {(!id || isedit) && (
          <CreateandEditForm

            id={id}
            setAddNew={setAddNew}
            isAddnew={isAddnew}
            isedit={isedit}
            EditandNew={editandaddlesson}
            setnewchapter={setnewchapter}
            addnewchapter={addnewchapter}
            updatechandlesson={updatechandlesson}
            chid={chid}
            lessonid ={currlesson}
            setTemlesson={setTemlesson}
            chtitle={chtitle}
            showlesson={showlesson}
            letitle={letitle}
            setnewLesson={setnewLesson}
            setchtitle={setchtitle}
            temlesson={temlesson}
            setLesson={setLesson}
            lessons={lessons}
            setEdit={setEdit}
            setletitle={setletitle}
   
          />
        )}
  
        {/* display the lesson and chapter title input preview card  list here  */}
  
        {(!id || isedit) && (
          <div className="chapter my-4 rounded w-full">
            {temlesson?.map((lesson, index) => (
              <div className="card flex mb-6 w-full justify-between" key={lesson}>
                <div className="left flex items-center">
                  <p className="text-3xl">📂 </p>
                  <h4 className="text-lg font-semibold ml-6">{lesson.title}</h4>
                </div>
  
                <div className="btn-gp space-x-4">
                  <button
                     onClick={() =>{
                      setletitle(lesson.title)
                      
                      setLesson((pre) => !pre)
                      setidlesson(lesson.id)
                     }}
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
        )}
      </div>
    );
  }