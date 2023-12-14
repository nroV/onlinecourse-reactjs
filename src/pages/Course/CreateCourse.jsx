import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { FaCircleXmark } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourseContext } from "../../context/CourseProvider";
import { ChapterPreview } from "../../components/course/ChapterPreview";
import { CreateandEditForm } from "../../components/course/CreateandEditForm";
export default function CreateCourse() {
  //create custom hook here instead using like this

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
  const [chapterid, setEditChapterId] = useState();
  const [imgurl, setImageUrl] = useState(
    "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
  );

  const navigate = useNavigate();
  const { id } = useParams();

  let payload = {
    id: id || Math.random(),
    title: title,
    img: imgurl,
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

  const { dispatch, singlecourse, initstate, setCourse } = useCourseContext();

  function editandaddlesson(id) {
    setLesson((pre) => !pre);
    setTemlesson((prev) => [...prev, lessons]);
  }
  console.log(temlesson);

  console.log(lessons);

  function updatechandlesson(id) {
    console.log(id);

    setnewchapter((pre) => {
      console.log(pre);

      //find the pre state taht match the id

      const editchapter = pre.filter((chapter) => {
        if (chapter.id === id) {
          chapter.name = chtitle;
          chapter.lesson = temlesson;
        }
        return chapter.id !== null;
      });
      console.log(editchapter);

      return [...editchapter];
    });
  }

  function saveandclose(isedit = false) {
    console.log("Update state");
    const singlecourse = getsinglecourse(initstate.slice());
    console.log(singlecourse);
    //trigger the current inputting new chapter to save

    if (isedit === true) {
      // trigger update current course state

      //find the editing course id first

      setSave((pre) => !pre);

      // setSave((pre) => !pre);
      return;
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

  function deletelesson(id) {
    //first update my preview tempory lesson
    setTemlesson(temlesson.filter((lesson) => lesson.id !== id));

    const tem = temchapter
      .map((chapter) => chapter)
      .filter((lesson) => lesson.id !== id);
    console.log(tem);
    // const updatedlesson =temchapter.filter((chapter)=>Number(chapter.id) !== Number(chapterid) )

    console.log(tem.length);
    console.log(tem);
    console.log(temchapter);

    //then i have to update my temchapter aaccording to the new or latest lesson or mutate the state here
    const newstate = temchapter.slice().map((element, index) => {
      if (element.id === chapterid) {
        console.log("true");
        element.lessons = temlesson.filter((lesson) => lesson.id !== id);
      }

      return element;
    });

    console.log(newstate.length);

    //first update my preview tempory lesson
    // setnewchapter(pre=>{

    //   return [
    //     ...pre,

    //   ]

    //   ;
    //   console.log(state);
    //   return [...state]
    // })
  }

  function onChangeImage(e) {
    console.log("on change image");

    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);

    console.log(objectUrl);
    setImageUrl(objectUrl);
    console.log(e.target.files[0]);
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
    console.log(id);
    const singlecourse = courses.filter(
      (course) => Number(course.id) === Number(id)
    );
    return singlecourse;
  }

  function clickonchapter(id, chapters) {
    console.log(id);

    console.log(chapters);

    const [singlechapter] = chapters.filter((chapter) => chapter.id === id);
    console.log(singlechapter);
    setchtitle(singlechapter?.name);
    setTemlesson((pre) => {
      return singlechapter?.lessons;
    });
  }
  useEffect(() => {
    if (payload.title === null || payload.title === "") {
      return;
    }

    if (id !== null || id !== undefined) {
      console.log("Update");
      const newstate = initstate.slice();
      console.log(newstate.length);
      console.log(id);

      const updatedstate = newstate.filter(
        (item) => Number(item.id) !== Number(id)
      );

      console.log(updatedstate);

      console.log(payload.chapters);

      console.log(payload);
      const combine = [...updatedstate, payload];
      console.log(combine);

      dispatch({
        type: "course/edit",
        payload: combine,
      });

      navigate(-1);
    } else {
      dispatch({
        type: "course/create",
        payload: payload,
      });
      navigate("/");
    }
    return () => {
      setCourse([]);
    };
  }, [issave]);

  useEffect(() => {
    function bindingdata(singlecourse) {
      setTitle(singlecourse.title.trim());
      setSumary(singlecourse.summaries.trim());
      setnewchapter(singlecourse.chapters);
      console.log(singlecourse.chapters);
      setImageUrl(singlecourse.img);
      // setchtitle("");
      // setTemlesson([]);
    }
    if (!id) {
      return;
    }

    //make a copy from all the course because we dont want to mutate

    //maybe create function to return single course??
    const [singlecourse] = getsinglecourse(initstate.slice());

    bindingdata(singlecourse);

    //clean up when we navigate out
  }, []);

  return (
    <main className="col-span-3 w-full">
      <header className="bg-[#2B3467] text-[#FCFFE7]  px-11 py-6 col-span-3 w-full">
        <h1 className="font-semibold text-3xl">Create Course📔</h1>
        {/* <p className="font-normal text-lg">Course overview</p> */}
      </header>

      <section className="max-w-[900px] m-auto my-16">
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

function ChapterSection({
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
    console.log(chapterid);
    console.log(chapterid);
    console.log(temchapter);
    const updatedlesson = temchapter.filter(
      (chapter) => Number(chapter.id) !== Number(chapterid)
    );

    console.log(updatedlesson.length);
    console.log(updatedlesson);

    setnewchapter(updatedlesson);
    console.log("delete a chapter");
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
            onClick={id !== undefined ? () => saveandclose(true) : saveandclose}
            className="bg-slate-200 px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center"
          >
            <span>
              {" "}
              {id !== undefined ? "Update & Close" : "Saved & Close"}{" "}
            </span>
          </button>

          <button
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
            className=" px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center text-white"
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

function CourseSection({
  onChangeImage,
  imgurl,
  setImageUrl,
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Summary Your Course"
            value={summary}
            className="w-full p-3 bg-slate-100 border focus:border-blue-500
          text-lg mb-11 h-36 resize-none" // Added resize-none to prevent resizing
            onChange={(e) => setSumary(e.target.value.trim())}
          />

          <div className="detail mb-4">
            <p className="text-lg font-bold mb-2">Image thumbnail</p>
            <p className="text-sm">Provide your course image thumbnail 📸 </p>
            <figure className="w-40 my-5 mb-6">
              <img src={imgurl} alt="img-thumbnail" />
            </figure>
          </div>

          <input
            type="file"
            name=""
            id=""
            accept="image/png, image/jpeg"
            onChange={(e) => onChangeImage(e)}
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
