import { LiHTMLAttributes } from "react";

export default function Li(props: LiHTMLAttributes<HTMLLIElement>) {
  const className: string = "font-bold text-center";
  const concatClassName = `${props.className} ${className}`;
  return (
    <li
      {...props}
      className={props.className ? concatClassName : className}
    ></li>
  );
}