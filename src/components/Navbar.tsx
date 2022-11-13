import Image from "next/image";
import Link from "next/link";
import { Switcher } from "./Switcher";

export const Navbar = () => {
  return (
    <>
      <Switcher className="fixed top-8 right-4 lg:right-16" />
      <div
        className="fixed bottom-6  right-0 left-0 z-10 mx-auto flex h-12 w-60
       justify-evenly rounded-3xl bg-[#111111]
        p-2 font-author  text-white shadow-lg dark:border dark:bg-white "
      >
        <Link href="/" className="flex items-center  rounded-full p-1 ">
          <Image
            width={30}
            height={30}
            alt="Home"
            src="/home.svg"
            className="p-1 invert dark:invert-0"
          />
          <p className="ml-1 text-md dark:text-black font-bold opacity-70">Home</p>
        </Link>
        <Link href="/work" className="flex items-center  rounded-full p-1 ">
          <Image
            width={36}
            height={36}
            alt="Work"
            src="/work.svg"
            className="p-1 invert dark:invert-0"
          />
          <p className="ml-1 text-md dark:text-black font-bold opacity-70">Work</p>
        </Link>
      </div>
    </>
  );
};
