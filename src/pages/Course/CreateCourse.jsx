import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { FaCircleXmark } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useCourseContext } from "../../Provider/CourseProvider";
import { ChapterPreview } from "../../components/course/ChapterPreview";
import { CreateandEditForm } from "../../components/course/CreateandEditForm";
import { CourseSection } from "../../components/course/CourseSection";
import { ChapterSection } from "../../components/course/ChapterSection";
export default function CreateCourse() {
  //create custom hook here instead using like this
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSumary] = useState("");
  const [showcourse, setshowcourse] = useState(true);


  const [showchapter, setchapter] = useState(false);
  const [temchapter, setnewchapter] = useState([]);
  const [chapterid, setEditChapterId] = useState();
  const [chtitle, setchtitle] = useState("");


  const [letitle, setletitle] = useState("");
  const [showlesson, setLesson] = useState(false);
  const [lessons, setnewLesson] = useState({});
  const [temlesson, setTemlesson] = useState([]);




  const [imgurl, setImageUrl] = useState(
    "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
  );


  const [ischempty,setChEmp] = useState(true)

  const [issave, setSave] = useState(true);


  console.log(ischempty);

  const navigate = useNavigate();


  let payload = {
    id: id || Math.random(),
    title: title,
    img: imgurl,
    summaries: summary,
    chapters: temchapter,


  };
  console.log(temlesson);

  //declare my payload data

  const { dispatch, singlecourse, initstate, setCourse } = useCourseContext();

  const [ischapterempty,setEmptych] = useState(true) 

  //create use hook here 


  //create use hook here 


  function editandaddlesson(id) {
    setLesson((pre) => !pre);
    setTemlesson((prev) => [...prev, lessons]);
  }
  console.log(ischempty);


  // use effect to listen to all state changes to evaulate empty or null 
  useEffect(()=>{

    console.log(temlesson.length);
    console.log(temchapter);
    console.log(temchapter.length);

    console.log(ischempty);

    console.log(id);
    if(!id) {

      console.log('hsadass');
      console.log(temlesson);
      if(temlesson?.length > 0) {
        console.log(temlesson);
        console.log(true);
        console.log(ischempty);
      
        if(ischempty === false ) {
          setChEmp(false)
          return 
        }
        
        setChEmp(pre=>!pre)
        // setChEmp(false)
      }
      else {
        console.log(false);
        setChEmp(true)
      }
    

  

      return 
    }

    console.log(temchapter.length);
    

    if(temchapter.length === 0) {

      setChEmp(true)
    }
    else{
      
      setChEmp(false)
    }


  },[temchapter,temlesson])


  console.log(ischapterempty);
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
    console.log('run');
    if (payload.chapters?.length === 0 ) {
      return;
    }

    if (id !== null || id !== undefined) {
 
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
    <main className="col-span-3 w-full ">
      <header className="bg-[#2B3467] text-[#FCFFE7] px-5 py-6 col-span-3 w-full">
        <h1 className="font-semibold text-3xl sm:text-center ">
          {
            id === undefined ? ' Create Course📔' : ' Edit Course📔'
          }
         
          
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
