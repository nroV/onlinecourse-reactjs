import { memo } from "react";

export const ChapterPreview = memo(function ChapterPreview({
  chapters,
  setEdit,
  clickonchapter,
  setEditChapterId,
  deletechapter,
  setAddNew,
}) {
  return (
    <div className="chapter my-4 rounded border-1 border-b-8 w-full">
      {chapters.map((chapter, index) => (
        <div className="card flex mb-6 w-full justify-between flex-wrap items-center" key={chapter.id}>
          <div className="left flex items-center my-4 sm:my-0">
            <p className="text-3xl">📑 </p>
            <h4 className="text-xl font-semibold ml-6">{chapter.name} </h4>
          </div>

          <div className="option space-x-4">
            <button
              onClick={(e) => {
                console.log(chapter.id);
                setEdit((pre) => !pre);
                clickonchapter(chapter.id, chapters);
                setEditChapterId(chapter.id);
                setAddNew(false);
              }}
              className="text-blue-500"
            >
              Edit
            </button>
            <button
              onClick={(e) => deletechapter(chapter.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});
