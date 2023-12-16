import React, { useEffect, useState } from "react";
import * as ACTION_TYPE from '../store/action/action_type'
import { useCourseContext } from "../utils/CourseProvider";
import { useNavigate } from "react-router-dom";

export function useCourse(
  payload,
  setImageUrl,
  id,
  chtitle,
  setTitle,
  setSumary,
  setnewchapter,
  temlesson 
) {
  const [showchapter, setchapter] = useState(false);
  const { initstate, dispatch,setCourse } = useCourseContext();
  const [showcourse, setshowcourse] = useState(true);

  //   const [imgurl, setImageUrl] = useState(
  //     "https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png"
  //   );
  const [issave, setSave] = useState(true);

  const navigate = useNavigate();
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
  function onChangeImage(e) {
    console.log("on change image");

    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);

    console.log(objectUrl);
    setImageUrl(objectUrl);
    console.log(e.target.files[0]);
  }

  function getsinglecourse(initstate) {
    const courses = initstate.slice();
    console.log(id);
    const singlecourse = courses.filter(
      (course) => Number(course.id) === Number(id)
    );
    return singlecourse;
  }
  useEffect(() => {
    console.log("run");
    if (payload.chapters?.length === 0) {
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
        type: ACTION_TYPE.EDIT_COURSE,
        payload: combine,
      });

      navigate(-1);
    } else {
      dispatch({
        type:ACTION_TYPE.POST_COURSE,
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

  return [
    showcourse,
    setshowcourse,
    issave,
    setSave,
    saveandclose,
    getsinglecourse,
    onChangeImage,
    setchapter,
    showchapter, setchapter
  ];
}
