
import React, { useEffect, useState } from "react";
// import { GrLinkNext } from "react-icons/gr";

export function CourseSection({
    onChangeImage,
    imgurl,
    setchapter,
    setshowcourse,
    setTitle,
    setSumary,
    title,
    summary,
  }) {
    const [isdisable, setDisable] = useState(true);
  
    useEffect(() => {
 
      //use effect on title and summary if they are empty  disable the button
      if (title !== "" && summary !== "" && !imgurl.includes("https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png")  ) {
        setDisable(false);
        return;
      }
      setDisable(true);
    }, [title, summary,imgurl]);
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
              onChange={(e) => setSumary(e.target.value)}
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

            
  
            {/* <GrLinkNext /> */}
          </button>
        </div>
      </>
    );
  }
  