import { IoArrowBackSharp } from "react-icons/io5";

import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

function BackIcon(props: AnchorHTMLAttributes<HTMLAnchorElement>, url = "#") {
  const className: string = "px-4 py-3";
  const concatClassName = `${props.className} ${className}`;

  return (
    <Link
      href={url}
      {...props}
      className={props.className ? concatClassName : className}
    >
      <IoArrowBackSharp className="h-7 w-full"></IoArrowBackSharp>
    </Link>
  );
}

export default BackIcon;
