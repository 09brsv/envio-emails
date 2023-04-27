
import React, { ButtonHTMLAttributes } from 'react'

function ButtonForm(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const className: string =
    "rounded-lg font-semibold w-36 py-2 hover:bg-blueDark/80 disabled:bg-blueDark/50";
  const concatClassName = `${props.className} ${className}`;
  return (
    <button
      {...props}
      className={props.className ? concatClassName : className}
    ></button>
  );
}

export default ButtonForm