import { memo, useEffect, useState } from "react";

export const CreateandEditForm = memo( function CreateandEditForm({
  EditandNew,
  setidlesson,
  setAddNew,
  lessonid,
  setletitle,
  id,
  isAddnew,
  addnewchapter,
  chid,
  setEdit,
  chtitle,
  updatechandlesson,
  showlesson,
  letitle,
  temlesson,
  setLesson,
  setnewLesson,
  setchtitle,
  lessons,
  setTemlesson,
  setnewchapter,
  isedit,
}) {
  const [islessonempty, setlessonempty] = useState(true);

  const onUpdateData = () => {

    //check the current mode lesson if it in edit or create state
    //isAddnew state meaning in add new chapter
    //isEdit state  meaning in edit lesson mode

    //condition to check if one is false meaning user click on add new chapter

    if (isedit == true && isAddnew == false) {
      setAddNew(false);


      //call the setnewchapter function to update my temporary chapter state to the current or updated lesson state
      setnewchapter((pre) => {


        const state = pre;

        // map the array of our previous state to find the lesson id and update the 
        //  lesson of the chapter  
        state.map((pre) => {
          if (pre.id === chid) {
            pre.lessons = temlesson;
          }

          return pre;
        });

        //return the updated state of new lessons and chapter  
        return [...state];
      });

      //trigger the updatechapter and lesson function from our parent component and passed chapter id as argument
      updatechandlesson(chid);
    }


    //condition to check if both are true meaning user click on edit 
    if (isedit == true && isAddnew == true) {
      //state is true

      console.log('run here ');
      addnewchapter();

      //true => false

      setAddNew((pre) => !pre);
    }

    setEdit((pre) => !pre);
    setAddNew(false);
    setletitle("");
  };


  useEffect(() => {

    //listen to any state change on lesson title for validation on null or empty data
    if (letitle !== "") {
   //if it met this condition meaning the user has input data so we update the lessonempty state back to false 
      setlessonempty(false);
      return;
    }

    //vice versa 
    setlessonempty(true);
  }, [letitle]);


  return (
    <form className="my-7 mb-6">
      <div className="flex justify-between items-center mb-7 space-x-3">
        <input
          onChange={(e) => setchtitle(e.target.value)}
          type="text"
          placeholder="Chapter Title"
          className="flex-1 p-3 bg-slate-100 border focus:border-blue-500 text-lg "
          value={chtitle}
        />
        {id && (
          <button
            className="bg-[#2B3467] border-2 border-b-3 p-3 text-white border-0 rounded-md"
            type="button"
            onClick={onUpdateData}
          >
            Save
          </button>
        )}
      </div>

      <div
        className={`w-full ${
          showlesson === true ? "block" : "flex"
        } justify-center p-3 bg-slate-100 border focus:border-blue-500
  text-lg mb-11 h-36 resize-none`}
      >
        {showlesson === true ? (
          <>
            <input
              type="text"
              value={letitle}
              onChange={(e) => {
      

                setletitle(e.target.value);
                //explain set new lesson here  
                setnewLesson({
                  id: Date.now(),
                  title: e.target.value,
                });
              }}
              placeholder="Name your lesson"
              className="w-full p-3 bg-white border focus:border-blue-500 text-lg mb-3 my-3 h-11"
              name=""
              id=""
            />
            <button
              disabled={islessonempty}
              className={`${
                islessonempty && "bg-slate-500 hover:cursor-not-allowed"
              } text-[16px] text-[#bebebe] bg-[#2B3467] px-4 py-2 rounded-2xl font-normal"
              type="button"`}
              onClick={() => {
     
     

                setLesson((pre) => !pre);
                setletitle("");
                console.log(lessonid);

                console.log(lessonid);
                console.log(isedit);
                if (lessonid && isedit) {
             //check if it an edit or add new if there is an lesson id prop meaning is an edit mode 

                  console.log('true');
                  setTemlesson((prev) => {
                    prev.map((element) => {
                      if (element.id === lessonid) {
                        element.title = letitle;
                      }
                      return element;
                    });

                    return [...prev];
                  });
                  setidlesson(0)
                  return;
                }
                console.log('false');

                setTemlesson((prev) => [...prev, lessons]);

              }}
            >
              Save Changes
            </button>
          </>
        ) : (
          //only show if lesson is empty
          <button
            className="text-lg text-[grey]"
            type="button"
            onClick={() => setLesson((pre) => !pre)}
          >
            📁 Create a Lesson
          </button>
        )}
      </div>
    </form>
  );
} )
