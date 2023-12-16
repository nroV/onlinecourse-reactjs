import React, { useCallback, useEffect, useState } from "react";
import { CreateandEditForm } from "../course/CreateandEditForm";
import { ChapterPreview } from "./ChapterPreview";
import { useChapter } from "../../customHook/useChapter";
import Createlesson from "../lesson/Createlesson";

export function ChapterSection({
  temlesson,
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
  saveandclose,
  setnewLesson,
  lessons,
  addnewchapter,
  issave,
}) {
  const [showlesson, setLesson] = useState(false);

  const [isedit, setEdit] = useState(false);

  const [isAddnew, setAddNew] = useState(false);

  const [currlesson, setidlesson] = useState(0);

  //create temporary lesson holder

  console.log(id);

  console.log(temlesson);

  const deletechapter = useCallback(function deletechapter(chapterid) {
    //Using my tempory chapter state holder to filter out the id that we click on to delete
    const updatedlesson = temchapter.filter(
      (chapter) => Number(chapter.id) !== Number(chapterid)
    );
    // return the array of tempory chapters state that doesn't contain the id that we delete
    //update my tempory chapter state

    setnewchapter(updatedlesson);
  },[temchapter]);

  const onEditLesson = useCallback(function (title, id) {
    //update state edit to true to alert that is in edit mode
    setletitle(title);

    //update the state of showlesson to make the drop down effect if it true and hide if it false !!!
    setLesson((pre) => !pre);

    //update the state of current lesson id that is being edit for logic updating
    // in Create and Edit form component

    setidlesson(id);

    //set the state of edit to true
    setEdit(true);
  },[title,id]);

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
          Chapter
        </h3>

        <div className="modify flex gap-3">
          <button
            disabled={ischempty}
            onClick={id !== undefined ? () => saveandclose(true) : saveandclose}
            className={`bg-slate-200 px-3 py-1 text-md font-medium bg-[#2B3467]
              ${
                ischempty &&
                "bg-slate-500 hover:cursor-not-allowed text-gray-400 font-normal"
              }
              rounded-lg flex items-center}`}
          >
            <span>
              {" "}
              {id !== undefined ? "Update & Change" : "Saved & Close"}{" "}
            </span>
          </button>

          <button
            disabled={ischempty && !id}
            onClick={() => {
              if (chtitle && isedit) {
                addnewchapter();
              }

              console.log(isedit);
              setEdit((pre) => !pre);
              setchtitle("");
              setTemlesson([]);
              setAddNew(true);
            }}
            className={`px-3 py-1 text-md font-medium bg-[#2B3467] rounded-lg flex items-center text-white   ${
              ischempty &&
              !id &&
              "bg-slate-500 hover:cursor-not-allowed text-gray-400 font-normal"
            }`}
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
          setAddNew={setAddNew}
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
          lessonid={currlesson}
          setidlesson={setidlesson}
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
        <Createlesson
          temlesson={temlesson}
          onEditLesson={onEditLesson}
          deletelesson={deletelesson}
        />
      )}
    </div>
  );
}
