export function CreateandEditForm({
  EditandNew,
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
  isedit
}) {
  console.log(chid);
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
            className="text-blue-500 border-2 border-b-3 p-3"
            type="button"
            onClick={() => {
              console.log(id);
              console.log(isedit);
              console.log(isAddnew);
              if (isedit == true && isAddnew == false) {
                //false

                //i set to true 
                setAddNew(false)
                console.log(temlesson);
                console.log(temlesson.length);
                setnewchapter((pre) => {
                  console.log(...pre);

                  const state = pre;

                  state.map((pre) => {
                    if (pre.id === chid) {
                      pre.lessons = temlesson;
                    }

                    return pre;
                  });

                  return [...state];
                });
                updatechandlesson(chid);
              } 
              
              if(isedit == true && isAddnew == true) {
                //state is true 
       
                addnewchapter();

                //true => false 

                
                setAddNew(pre=>!pre)
              }

              setEdit((pre) => !pre);
              setAddNew(false)
            }}
          >
            Update
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
              className="text-[16px] text-[#bebebe] bg-[#2B3467] px-4 py-2 rounded-2xl font-normal"
              type="button"
              onClick={() => {
                // setshowcourse((pre) => !pre)
                // setchapter((pre) => !pre)

                setLesson((pre) => !pre);
                setletitle("");
                console.log(lessonid);
                if (lessonid && isedit ) {
                  //check if it an edit or add new if there is an id prop meaning is an edit

                  setTemlesson((prev) => {
                    prev.map((element) => {
                      if (element.id === lessonid) {
                        element.title = letitle;
                      }
                      return element;
                    });

                    return [...prev];
                  });
                  return;
                }

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
}
