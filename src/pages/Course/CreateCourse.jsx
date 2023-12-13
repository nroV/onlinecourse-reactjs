import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { FaCircleXmark } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";
import ProgressBar from "../../components/course/ProgressBar";
import { useCourseContext } from "../../context/CourseProvider";
import { ChapterPreview } from "../../components/course/ChapterPreview";
import { CreateandEditForm } from "../../components/course/CreateandEditForm";
export default function CreateCourse() {
  const [showcourse, setshowcourse] = useState(true);
  const [showchapter, setchapter] = useState(false);
  const [showlesson, setLesson] = useState(false);
  const [chtitle, setchtitle] = useState("");
  const [letitle, setletitle] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSumary] = useState("");
  const [temlesson, setTemlesson] = useState([]);
  const [issave, setSave] = useState(true);
  const [lessons, setnewLesson] = useState({});
  const [temchapter, setnewchapter] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  let payload = {
    id: Date.now(),
    title: title,
    img: "https://miro.medium.com/v2/resize:fit:705/0*bEonUGnx4V0nL1eJ.jpg",
    summaries: summary,
    chapters: temchapter,
    // chapters:[
    //      {
    //       id:Date.now(),
    //       name:chtitle,
    //       lessons :temlesson
    //      }
    // ]
  };

  console.log(payload);
  const { dispatch, singlecourse, initstate } = useCourseContext();

  function saveandclose(isedit = false) {
    console.log("Update state");
    console.log(temlesson);
    console.log(payload);

    //trigger the current inputting new chapter to save

    if(isedit === true ) {
      navigate("/");
      return 
    }
    // trigger add new course state
    setnewchapter((pre) => {
      return [
        ...pre,
        {
          id: Date.now(),
          name: chtitle,
          lessons: temlesson,
        },
      ];
    });
    setSave((pre) => !pre);
  }

  function addnewchapter() {
    console.log("new chapter added");
    setnewchapter((pre) => {
      return [
        ...pre,
        {
          id: Date.now(),
          name: chtitle,
          lessons: temlesson,
        },
      ];
    });

    setletitle("");
    setchtitle("");
    setTemlesson([]);
  }
  function getsinglecourse(initstate) {
    const courses = initstate.slice();
    const singlecourse = courses.filter((course) => course.id === Number(id));
    return singlecourse;
  }

  console.log(temlesson);
  function clickonchapter(id) {
    const courses = initstate.slice();
    console.log(id);
    const [chapters] = courses.map((course) => course.chapters);
    console.log(chapters);

    const [singlechapter] = chapters.filter((chapter) => chapter.id === id);

    setchtitle(singlechapter.name);

    setTemlesson((pre) => {
      return singlechapter?.lessons;
    });

    // return singlecourse[0]
  }
  useEffect(() => {
    if (payload.title === null || payload.title === "") {
      return;
    }
    dispatch({
      type: "course/create",
      payload: payload,
    });
    navigate("/");
  }, [issave]);

  useEffect(() => {
    function bindingdata(singlecourse) {
      setTitle(singlecourse.title.trim());
      setSumary(singlecourse.summaries.trim());
      setnewchapter(singlecourse.chapters);
      // setchtitle("");
      // setTemlesson([]);
    }
    if (!id) {
      return;
    }

    //make a copy from all the course because we dont want to mutate

    //maybe create function to return single course??
    const singlecourse = getsinglecourse(initstate.slice());

    bindingdata(singlecourse[0]);
  }, []);

  return (
    <main className="col-span-3 w-full">
      <header className="bg-[#2B3467] text-[#FCFFE7]  px-11 py-6 col-span-3 w-full">
        <h1 className="font-semibold text-3xl">Create Course📔</h1>
        {/* <p className="font-normal text-lg">Course overview</p> */}
      </header>

      <section className="max-w-[900px] m-auto my-16">
        <ProgressBar />
        {showcourse && (
          <CourseSection
            issave={issave}
            setshowcourse={setshowcourse}
            setTitle={setTitle}
            chtitle={chtitle}
            setSumary={setSumary}
            setchapter={setchapter}
            summary={summary}
            title={title}
          />
        )}

        {showchapter && (
          <ChapterSection
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

function ChapterSection({
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

  //create tempory lesson holder

  function deletelesson(currindex) {
    console.log(currindex);
    const updatedlesson = temlesson.filter((lesson, index) => {
      if (index !== currindex) {
        return lesson;
      }
    });

    console.log(updatedlesson);

    setTemlesson((pre) => {
      return [...updatedlesson];
    });
  }

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
            // disabled={issave}
            onClick={id !== undefined ? ()=>saveandclose(true) : saveandclose}
            className="bg-slate-200 px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center"
          >
            <span> {id !== undefined ? 'Update & Close' : 'Saved & Close'} </span>
          </button>

          <button
            onClick={() => addnewchapter()}
            className=" px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center text-white"
          >
            <span> Add New</span>
          </button>
        </div>
      </header>

      <hr />

      {id && (
        <ChapterPreview
          clickonchapter={clickonchapter}
          chapters={temchapter}
          setEdit={setEdit}
        />
      )}

      {(!id || isedit) && (
        <CreateandEditForm
          setTemlesson={setTemlesson}
          chtitle={chtitle}
          showlesson={showlesson}
          letitle={letitle}
          setnewLesson={setnewLesson}
          setchtitle={setchtitle}
          temlesson={temlesson}
          setLesson={setLesson}
          lessons={lessons}
        />
      )}

      {/* display the lesson preview card  list here  */}

      {(!id || isedit) && (
        <div className="chapter my-4 rounded w-full">
          {temlesson?.map((lesson, index) => (
            <div className="card flex mb-6 w-full justify-between" key={lesson}>
              <div className="left flex items-center">
                <p className="text-3xl">📑 </p>
                <h4 className="text-xl font-semibold ml-6">{lesson.title}</h4>
              </div>
              <button
                onClick={(e) => deletelesson(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CourseSection({
  setchapter,
  setshowcourse,
  setTitle,
  setSumary,
  title,
  summary,
  chtitle,
  issave,
}) {
  const [isdisable, setDisable] = useState(true);

  useEffect(() => {
    //use effect on title and summary if they are empty  disable the button
    if (title !== "" && summary !== "") {
      setDisable(false);
      return;
    }
    setDisable(true);
  }, [title, summary]);
  return (
    <>
      <div className="container">
        <h3 className="text-2xl font-bold mb-7"> Course</h3>
        <hr />

        <form className="my-7">
          <input
            type="text"
            placeholder="Course title"
            value={title}
            className="w-full p-3 bg-slate-100 border focus:border-blue-500 text-lg mb-11"
            onChange={(e) => setTitle(e.target.value.trim())}
          />
          <textarea
            placeholder="Summary Your Course"
            value={summary}
            className="w-full p-3 bg-slate-100 border focus:border-blue-500
text-lg mb-11 h-36 resize-none" // Added resize-none to prevent resizing
            onChange={(e) => setSumary(e.target.value.trim())}
          />
        </form>

        <button
          disabled={isdisable}
          onClick={() => {
            setchapter((pre) => !pre);
            setshowcourse((pre) => !pre);
          }}
          className={`px-3 py-1 text-lg font-medium ${
            isdisable === false ? "bg-[#2B3467]" : "bg-slate-400"
          } 
          rounded-lg flex items-center text-white disabled:cursor-not-allowed`}
        >
          <span className="mx-4">Next</span>

          <GrLinkNext />
        </button>
      </div>
    </>
  );
}

// make a reuseable component instead ?
