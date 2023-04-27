import React, { LabelHTMLAttributes } from "react";

function LabelSign(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const className: string = "text-sm md:text-base";
  const concatClassName = `${props.className} ${className}`;

  return (
    <label
      {...props}
      className={props.className ? concatClassName : className}
    ></label>
  );
}

export default LabelSign;
