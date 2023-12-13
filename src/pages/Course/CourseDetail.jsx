import React, { useEffect } from "react";

import AccordingCard from "../../components/course/AccordingCard";
import { useParams } from "react-router-dom";
import { useCourseContext } from "../../context/CourseProvider";

let lessonlen = 0;

export default function CourseDetail() {
  const { id } = useParams();


  const { setCourse, initstate, singlecourse } = useCourseContext();

  useEffect(() => {
    const courses = initstate.slice();
    //make a copy from all the course because we dont want to mutate

    const singlecourse = courses.filter((course) => course.id === Number(id));


    //with the help of use param we can get the value of param and filter any id that match

    //then we call our global setcourse function to update state with  our new single course with spread operator

    const chapters = singlecourse[0].chapters;


    for (const chapter of chapters) {
      lessonlen += chapter.lessons.length;
    }

    setCourse((pre) => {
      return singlecourse[0];
    });

    //clean up when we stop or leave navigate
    return () => {
      lessonlen = 0;
      setCourse([]);
    };
  }, [id]);

  const { title, id: cid, img, summaries, chapters } = singlecourse;
  const chapterlength = singlecourse.chapters;
  const lesson = chapters?.lessons;

  return (
    <main className="col-span-3 w-full">
      <input type="hidden" name="" value={cid} />
      <header className="bg-[#2B3467] w-full text-[#FCFFE7] px-11 py-8">
        <h1 className="text-4xl mb-6">{title}</h1>
        <p>{summaries}</p>
      </header>

      <div className="body mb-6 px-11 py-1">
        <h1 className="text-2xl mb-6 font-bold my-8 mb-7">Course Content</h1>

        <div className="detail flex gap-5">
          <p>📁{chapterlength?.length || "No"} chapters</p>
          <p> 📁{lessonlen} lessons</p>
        </div>
      </div>

      <hr />

      {/* display the chapter contain lessons list here  */}

      {chapters?.map((chapter) => (
        <AccordingCard key={chapter.id} chapter={chapter}/>
      ))}
    </main>
  );
}

//Refector component here
