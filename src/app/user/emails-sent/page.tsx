"use client";
import { CSSTransition } from "react-transition-group";
import cookies from "js-cookie";
import { useApi } from "@/components/Hooks/FetchApi";
import Logout from "@/components/Icons/Logout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TDataSent } from "@/@types/Email";
import EmailsSentForm from "@/components/Forms/Emails/EmailsSentForm";
import { useRouter } from "next/navigation";
import NavBarHeader from "@/components/Nav/NavBarHeader";
import Ul from "@/components/Nav/Ul";
import Li from "@/components/Nav/Li";
import BackIcon from "@/components/Icons/Back";

export default function EmailsSent() {
  const router = useRouter();
  const [data, setData] = useState<TDataSent[] | null>(null);
  const [email, setEmail] = useState<TDataSent | null>(null);
  const [style, setPosition] = useState<{ position: string; display: string }>({
    position: "static",
    display: "hidden",
  });
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const api = useApi();
  useEffect(() => {
    const token = cookies.get("token");
    const getEmails = async () => {
      const data = await api.getEmails(token);

      if (data instanceof Error) {
        return router.push("/login");
      }
      setData(data);
    };

    getEmails();
  }, []);

  const handleClick = (target: TDataSent) => {
    setIsEnter(false);
    setEmail(target);
    setPosition({
      position: "absolute",
      display: "flex",
    });
    setIsEnter(true);
  };

  return (
    <div className="h-full flex flex-col">
      {style.display === "flex" ? (
        <div className="flex">
          <BackIcon
            className="sm:hidden"
            href="user/emails-sent"
            onClick={() => {
              setIsEnter(false);
              setPosition({
                position: "static",
                display: "hidden",
              });
            }}
          />

          <Logout />
        </div>
      ) : (
        <Logout />
      )}

      {data !== null && !data[0] ? (
        <>
          <NavBarHeader>
            <Ul>
              <Li className="underline basis-1/2">Emails enviados</Li>

              <Li className=" basis-1/2 sm:basis-1/4">
                <Link
                  className="hover:text-whiteText/80"
                  href="/user/send-email"
                >
                  Enviar um email
                </Link>
              </Li>

              <Li className="hidden sm:block sm:basis-1/4">
                Enviar para vários
              </Li>
            </Ul>
          </NavBarHeader>
          <div className="flex h-full w-full">
            <p className="pt-20 m-auto text-lg font-bold">
              Você não enviou nenhum email
            </p>
          </div>
        </>
      ) : (
        <section className="flex flex-col w-full relative">
          <NavBarHeader>
            <Ul>
              <Li className="underline basis-1/2">Emails enviados</Li>

              <Li className=" basis-1/3 sm:basis-1/4">
                <Link
                  className="hover:text-whiteText/80"
                  href="/user/send-email"
                >
                  Enviar um email
                </Link>
              </Li>

              <Li className="hidden sm:block sm:basis-1/4">
                Enviar para vários
              </Li>
            </Ul>
          </NavBarHeader>

          <div className="flex">
            <aside className=" h-[calc(348px*3)] flex flex-col w-full sm:w-2/3 border-x border-x-whiteText/30 overflow-y-auto">
              {data &&
                data.map((email) => {
                  return (
                    <div
                      key={email.id}
                      className={`flex flex-col gap-1 border-y border-y-whiteText/30 p-2 px-3`}
                      onClick={() => handleClick(email)}
                    >
                      <h3>{email.email}</h3>
                      <p>{email.subject}</p>
                      <p>{email.body}</p>
                    </div>
                  );
                })}
            </aside>

            <CSSTransition in={isEnter} timeout={3000} classNames="listMails">
              <div
                className={`sm:flex h-[calc(100%-4rem)] w-full sm:static justify-center items-center font-bold text-xl ${style.display} ${style.position} left-0`}
              >
                {email ? (
                  <EmailsSentForm
                    to={email.email}
                    subject={email.subject}
                    body={email.body}
                    date={email.date}
                  />
                ) : (
                  <p className="pt-20">
                    Selecione algum email para abrir os detalhes
                  </p>
                )}
              </div>
            </CSSTransition>
          </div>
        </section>
      )}
    </div>
  );
}
