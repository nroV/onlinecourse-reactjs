export function ChapterPreview({chapters,setEdit,clickonchapter}) {


  
    return         <div className="chapter my-4 rounded border-1 border-b-8 w-full">
    {chapters.map((chapter, index) => (
      <div className="card flex mb-6 w-full justify-between" key={chapter.id}>
        <div className="left flex items-center">
          <p className="text-3xl">📑 </p>
          <h4 className="text-xl font-semibold ml-6">{chapter.name}</h4>
        </div>
  
        <div className="option space-x-4">
        <button
          onClick={(e) => {
            setEdit(pre=>!pre)
            clickonchapter(chapter.id)
          }}
          className="text-blue-500"
        >
          Edit
        </button>
        <button
          onClick={(e) => deletelesson(index)}
          className="text-red-500"
        >
          Delete
        </button>
        </div>
   
      </div>
    ))}
  </div>
  }
  