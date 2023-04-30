import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "@/Contexts/Auth/AuthContexts";
import Link from "next/link";
import React, { AnchorHTMLAttributes, useContext } from "react";

function Logout(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const auth = useContext(AuthContext);
  const className: string = "px-4 py-3 mb-2 ml-auto";
  const concatClassName = `${props.className} ${className}`;

  return (
    <Link
      {...props}
      className={props.className ? concatClassName : className}
      onClick={() => auth.signout()}
      href="/login"
    >
      <FiLogOut className="h-7 w-full"></FiLogOut>
    </Link>
  );
}

export default Logout;
