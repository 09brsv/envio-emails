import React, { InputHTMLAttributes } from "react";

function InputSendEmail(props: InputHTMLAttributes<HTMLInputElement>) {
  const className: string =
    "w-full bg-blackBg outline-none font-light text-whiteText";
  const concatClassName = `${props.className} ${className}`;
  return (
    <input
      {...props}
      className={props.className ? concatClassName : className}
    ></input>
  );
}

export default InputSendEmail;
