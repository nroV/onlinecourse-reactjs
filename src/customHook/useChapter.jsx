import React, { useCallback, useEffect, useState } from "react";

export function useChapter(id) {
  const [letitle, setletitle] = useState("");
  const [showlesson, setLesson] = useState(false);
  const [lessons, setnewLesson] = useState({});
  const [temlesson, setTemlesson] = useState([]);
  const [temchapter, setnewchapter] = useState([]);
  const [chtitle, setchtitle] = useState("");
  const [ischempty, setChEmp] = useState(true);
  const [chapterid, setEditChapterId] = useState();

 const editandaddlesson = useCallback(  function editandaddlesson(id) {
    //set a new state to showlesson to toggle the effect of drop down creating lesson
    // by set new state to the logical NOT of the previous state
    setLesson((pre) => !pre);

    //update the temporary lessons state and added our newly created lessons

    setTemlesson((prev) => [...prev, lessons]);
  },[lessons] )

  
 const addnewchapter = useCallback( function addnewchapter() {
    //update my temparory chapter state
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

    //reset my title lesson, chapter and lessons state every time we have added a new state to chapter
    setletitle("");
    setchtitle("");
    setTemlesson([]);

  },[chtitle,temlesson] )

  function deletelesson(id) {
    //this function run everytime user click to delete lesson
    //the id we received is the lessons id that user click to delete
    console.log(id);

    //first set new state to my temporary lessons state to delete the lesson id that user click
    setTemlesson(temlesson.filter((lesson) => lesson.id !== id));

    const copy = temchapter.slice();

    //make a copy of our current temporary chapters state
    //then set a new state to our temporary chapters lessons properties
    //that we just deleted the lesson that user click
    setnewchapter(
      copy.map((element, index) => {
        //check the condition that match the curerent chapter id so
        //we can update the lesson that match the chapter id that
        //user is updating
        if (element.id === chapterid) {
          element.lessons = temlesson.filter((lesson) => lesson.id !== id);
        }

        return element;
      })
    );
  }

  // useeffect to listen to all state related to chapter and lesson  to handle empty or null data input
  useEffect(() => {
    //check the our id prop from useParams to indicate
    //  whether is an edit  creating new chapters

    if (!id) {
      //condition to check my temporary lessons state length
      if (temlesson?.length > 0) {
        //check my chapter whether is empty or null ( state true = empty || state false = have data )
        //then update my chapter empty state according to the condition
        if (ischempty === false) {
          setChEmp(false);
          return;
        }

        setChEmp((pre) => !pre);
      } else {
        setChEmp(true);
      }

      return;
    }

    //this condition when my temporary chapters is empty to have no data yet
    //set a new state to chapter empty to true if it empty and vice versa to false

    if (temchapter.length === 0) {
      setChEmp(true);
    } else {
      setChEmp(false);
    }

    //use effect to run every time my temporary chapter and lessons changes to
    //keep track on the data to check if it empty to have data
  }, [temchapter, temlesson]);

  function updatechandlesson(id) {
    //the parameter id we receive is the id of the chapters that user click on to edit

    //update my chapters list state

    setnewchapter((pre) => {
      console.log(pre);

      //find the previous  state that match the id

      //filtering out my previous state list of temporary chapters
      //and find the  chapter id that the user currently updating or editing
      // set a new state to it and updating the new lessons state and chapter title state

      const editchapter = pre.filter((chapter) => {
        if (chapter.id === id) {
          chapter.name = chtitle;
          chapter.lesson = temlesson;
        }
        return chapter.id !== null;
      });
      //then return the new updated chapters to the set state function

      return [...editchapter];
    });
  }
  function clickonchapter(id, chapters) {
    //this function only run when user edit the previous courses

    // the two parameter we receive are
    // id : the current chapter id that user is editing
    // chapters:  all the chapters state of the current course

    const [singlechapter] = chapters.filter((chapter) => chapter.id === id);
    //filtering the chapters that match the current chapter id
    // in order to update the chapter name

    //update the chapter title state
    setchtitle(singlechapter?.name);

    //update the temporary lessons state that we have just modify the chapter title name
    setTemlesson((pre) => {
      return singlechapter?.lessons;
    });
  }
  return [
    editandaddlesson,
    addnewchapter,
    deletelesson,
    letitle,
    setletitle,
    showlesson,
    setLesson,
    lessons,
    ischempty,
    clickonchapter,
    updatechandlesson,
    chtitle,
    setchtitle,
    chapterid,
    setEditChapterId,
    setnewLesson,
    temlesson,
    setTemlesson,
    temchapter,
    setnewchapter,
  ];
}
