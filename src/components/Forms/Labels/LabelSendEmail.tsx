import React, { LabelHTMLAttributes } from "react";

function LabelSendEmail(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const className: string =
    "flex items-center space-x-3 pl-7 py-2 border border-whiteText/30 text-base";
  const concatClassName = `${props.className} ${className}`;

  return (
    <label
      {...props}
      className={props.className ? concatClassName : className}
    ></label>
  );
}

export default LabelSendEmail;
