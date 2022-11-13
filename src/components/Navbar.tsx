import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Switcher } from "./Switcher";

export const Navbar = () => {
  const { asPath: location } = useRouter();

  return (
    <>
      <Switcher className="fixed top-8 right-4 lg:right-16" />
      <div
        className="fixed bottom-6  right-0 left-0 z-10 mx-auto flex h-12 w-60
       justify-evenly rounded-3xl bg-[#111111]
        p-2 font-author  shadow-lg dark:border"
      >
        <Link
          href="/"
          className="flex items-center  rounded-full p-1"
          style={{
            backgroundColor: location === "/" ? "white" : "#111111",
            color: location === "/" ? "black" : "white",
          }}
        >
          <Image
            width={30}
            height={30}
            alt="Home"
            src="/home.svg"
            className="p-1"
            style={{ filter: location === "/" ? "invert(0%)" : "invert(100%)" }}
          />
          <p className="ml-1 text-sm">Home</p>
        </Link>
        <Link
          href="/work"
          className="flex items-center justify-center rounded-full px-2"
          style={{
            backgroundColor: location === "/work" ? "white" : "#111111",
            color: location === "/work" ? "black" : "white",
          }}
        >
          <Image
            width={36}
            height={36}
            alt="Work"
            src="/work.svg"
            className="p-1"
            style={{
              filter: location === "/work" ? "invert(0%)" : "invert(100%)",
            }}
          />
          <p className="ml-1 text-sm">Work</p>
        </Link>

        {/* <Link
          href="/guestbook"
          className="flex items-center justify-center rounded-full p-1"
          style={{
            backgroundColor: location === "/guestbook" ? "white" : "#111111",
          }}
        >
          <Image
            width={30}
            height={30}
            alt="Guestbook"
            src="/book.svg"
            className="p-1"
            style={{
              filter: location === "/guestbook" ? "invert(0%)" : "invert(100%)",

            }}
          />
          <p className="ml-1 text-sm">Guestbook</p>
        </Link> */}
      </div>
    </>
  );
};
