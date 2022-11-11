import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed bottom-8 right-0 left-0 z-10 mx-auto flex h-12 w-72 justify-evenly rounded-3xl bg-[rgb(17,17,17)] p-2 shadow-sm">
      <Link href="/">
        <Image
          width={30}
          height={30}
          alt="Home"
          src="/home.svg"
          className="invert"
        />
      </Link>
      <Image
        width={30}
        height={30}
        alt="Work"
        src="/work.svg"
        className="invert"
      />
      <Image
        width={30}
        height={30}
        alt="About Me"
        src="/profile.svg"
        className="invert"
      />
      <Image
        width={30}
        height={30}
        alt="Guestbook"
        src="/book.svg"
        className="invert"
      />
    </div>
  );
};
