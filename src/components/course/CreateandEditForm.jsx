

export function CreateandEditForm({chtitle,showlesson,letitle
    ,temlesson,setLesson,setnewLesson,setchtitle,lessons,setTemlesson}){
    return     <form className="my-7">
    <input
      onChange={(e) => setchtitle(e.target.value.trim())}
      type="text"
      placeholder="Chapter Title"
      className="w-full p-3 bg-slate-100 border focus:border-blue-500 text-lg mb-11"
      value={chtitle}
    />
  
    <div
      className={`w-full ${
        showlesson === true ? "block" : "flex"
      } justify-center p-3 bg-slate-100 border focus:border-blue-500
  text-lg mb-11 h-36 resize-none`}
    >
      { showlesson === true ? (
        <>
          <input
            type="text"
            onChange={(e) =>
              setnewLesson({
                id: Date.now(),
                title: e.target.value.trim(),
              })
            }
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
  
              console.log(lessons);
  
              setTemlesson((prev) => [...prev, lessons]);
  
              console.log(temlesson);
  
              console.log(letitle);
              setLesson((pre) => !pre);
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
          📁 Create Lesson
        </button>
      )}
    </div>
  </form>
  }