"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const tokenValid = localStorage.getItem("token");

    if (!tokenValid) {
      console.log(tokenValid);

      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};
