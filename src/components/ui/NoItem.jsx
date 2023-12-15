import React from "react";

export default function ({header='This is a header text',text='This is a body text'}) {
  return (
    <main className="sm:flex my-5 p-7 rounded-md bg-slate-200 gap-11">
      <div className="course flex-1">
        <h3 className="font-semibold text-2xl hover:underline text-center">
    {header}
        </h3>

        <p className="text-md text-slate-800 text-center my-3">
        {text}
          🏬🔶
        </p>
      </div>
    </main>
  );
}
