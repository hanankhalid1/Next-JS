"use client";
import { compoTypes } from "@/app/types/componentsTpes";
export default function Button(
props: compoTypes
) {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 w-44 h-14 rounded"
        onClick={props.onClicked}
      >
        {props.title}
      </button>
    </div>
  );
}
