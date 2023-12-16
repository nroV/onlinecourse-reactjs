import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { FaCircleXmark } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";


import { CourseSection } from "../../components/course/CourseSection";
import { ChapterSection } from "../../components/chapter/ChapterSection";
import { useChapter } from "../../customHook/useChapter";
import { useCourse } from "../../customHook/useCourse";

export default function CreateCourse() {
  //create custom hook here instead using like this
  const { id } = useParams();

  const [ editandaddlesson, addnewchapter, deletelesson,
    letitle, setletitle, showlesson, setLesson, lessons,
    ischempty,clickonchapter,updatechandlesson,chtitle,
    setchtitle,chapterid,setEditChapterId,
    setnewLesson, temlesson,setTemlesson,temchapter,setnewchapter

]  = useChapter(id);

  const [imgurl, setImageUrl] = useState(
    "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
  );
  const [title, setTitle] = useState("");
  const [summary, setSumary] = useState("");

  let payload = {
    id: id || Math.random(),
    title: title,
    img: imgurl,
    summaries: summary,
    chapters: temchapter,
  };
  const  [
    showcourse,
    setshowcourse,
    issave,
    setSave,
    saveandclose,
    getsinglecourse,
    onChangeImage,
    setchapter,
    showchapter
  ]= useCourse(
    payload,
    setImageUrl,
    id,
    chtitle,
    setTitle,
    setSumary,
    setnewchapter,
    temlesson
  );



  const navigate = useNavigate();

  return (
    <main className="col-span-3 w-full ">
      <header className="bg-[#2B3467] text-[#FCFFE7] px-5 py-6 col-span-3 w-full">
        <h1 className="font-semibold text-3xl sm:text-center ">
          {id === undefined ? " Create Course📔" : " Edit Course📔"}
        </h1>
        {/* <p className="font-normal text-lg">Course overview</p> */}
      </header>

      <section className="max-w-[900px] m-auto my-16 p-6 sm:p-0 md:p-6">
        {showcourse && (
          <CourseSection
            issave={issave}
            setshowcourse={setshowcourse}
            onChangeImage={onChangeImage}
            setTitle={setTitle}
            chtitle={chtitle}
            setSumary={setSumary}
            setchapter={setchapter}
            summary={summary}
            title={title}
            imgurl={imgurl}
            setImageUrl={setImageUrl}
          />
        )}

        {showchapter && (
          <ChapterSection
            ischempty={ischempty}
            editandaddlesson={editandaddlesson}
            deletelesson={deletelesson}
            chid={chapterid}
            setnewchapter={setnewchapter}
            setEditChapterId={setEditChapterId}
            updatechandlesson={updatechandlesson}
            chtitle={chtitle}
            clickonchapter={clickonchapter}
            id={id}
            temchapter={temchapter}
            setnewLesson={setnewLesson}
            lessons={lessons}
            letitle={letitle}
            issave={issave}
            setchtitle={setchtitle}
            setletitle={setletitle}
            setshowcourse={setshowcourse}
            setchapter={setchapter}
            temlesson={temlesson}
            setTemlesson={setTemlesson}
            saveandclose={saveandclose}
            addnewchapter={addnewchapter}
          />
        )}
      </section>
    </main>
  );
}

// make a reuseable component instead ?
