import React, { TextareaHTMLAttributes } from "react";

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const className: string =
    "h-4/5 px-6 py-8 bg-blackBg border border-whiteText/30 outline-none resize-none";
  const concatClassName = `${props.className} ${className}`;

  return (
    <textarea
      {...props}
      className={props.className ? concatClassName : className}
    ></textarea>
  );
}

export default TextArea;
