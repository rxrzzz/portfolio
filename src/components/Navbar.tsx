import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Switcher } from "./Switcher";

export const Navbar = () => {
  const { asPath: location } = useRouter();

  return (
    <div className="fixed dark:border  bottom-8 right-0 left-0 z-10 mx-auto flex h-12 w-72 justify-evenly rounded-3xl bg-[rgb(17,17,17)] p-2 shadow-sm">
      <Link
        href="/"
        className="flex items-center justify-center rounded-full p-1"
        style={{ backgroundColor: location === "/" ? "white" : "black" }}
      >
        <Image
          width={30}
          height={30}
          alt="Home"
          src="/home.svg"
          className="p-1"
          style={{ filter: location === "/" ? "invert(0%)" : "invert(100%)" }}
        />
      </Link>
      <Link
        href="/work"
        className="flex items-center justify-center rounded-full p-1"
        style={{ backgroundColor: location === "/work" ? "white" : "black" }}
      >
        <Image
          width={30}
          height={30}
          alt="Work"
          src="/work.svg"
          className="p-1"
          style={{
            filter: location === "/work" ? "invert(0%)" : "invert(100%)",
          }}
        />
      </Link>

      <Link
        href="/guestbook"
        className="flex items-center justify-center rounded-full p-1"
        style={{
          backgroundColor: location === "/guestbook" ? "white" : "black",
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
      </Link>
      <Switcher />
    </div>
  );
};
