import { AllHTMLAttributes } from "react";

export default function Ul(props: AllHTMLAttributes<HTMLUListElement>) {
  const className: string = "flex justify-around items-center gap-4";
  const concatClassName = `${props.className} ${className}`;
  return (
    <ul
      {...props}
      className={props.className ? concatClassName : className}
    ></ul>
  );
}
