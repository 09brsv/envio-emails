import { AllHTMLAttributes } from "react";

export default function NavBarHeader(props: AllHTMLAttributes<HTMLUListElement>) {
  const className: string =
    "py-3 w-full bg-blueDark flex flex-col justify-center border";
  const concatClassName = `${props.className} ${className}`;
  return (
    <nav
      {...props}
      className={props.className ? concatClassName : className}
    ></nav>
  );
}
