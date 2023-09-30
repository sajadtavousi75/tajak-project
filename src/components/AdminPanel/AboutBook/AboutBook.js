import React from "react";

export default function AboutBook() {
  return (
    <div className="aboutbook-content bg-gmelo rounded-lg pb-5 mt-5">
      <h1 className="w-[380px] h-10 mx-auto flex items-center justify-center bg-bg text-text font-bold rounded-b-lg shadow-lg">
      3- درباره کتاب
      </h1>
      <div className="text flex items-center justify-center mt-5">
      <textarea className="w-[560px] h-[200px] bg-gmelo border-solid border-gmain border-1 rounded-lg p-3 text-text "></textarea>
      </div>
    </div>
  );
}
