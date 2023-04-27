import React, { InputHTMLAttributes } from 'react'


function InputUser(props: InputHTMLAttributes<HTMLInputElement>) {
  const className: string =
    "text-blackTransparent/50 text-sm md:text-base bg-whiteText rounded-lg p-2 outline-none";
  const concatClassName = `${props.className} ${className}`;
  
  return (
    <input
      {...props}
      className={props.className ? concatClassName : className}
    ></input>
  );
}

export default InputUser