import Image from "next/image";
import Link from "next/link";
import { useLottie } from "lottie-react";
import workAnimation from "../../public/work.json";

const options2 = {
  animationData: workAnimation,
  loop: true,
};

export const Footer = () => {
  const { View: work } = useLottie(options2);
  return (
    <section className="mx-auto h-[80vh]  w-11/12 max-w-[90rem]  pb-24 font-author lg:my-12 ">
      <h1 className="mt-20  text-3xl  font-medium opacity-80 dark:opacity-100 lg:mt-48 lg:text-5xl">
        Let&apos;s work together.
      </h1>

      <aside className="mt-8 w-full lg:mt-16 lg:w-3/12">{work}</aside>

      <div className=" flex items-center justify-between py-28 lg:mt-20  lg:py-8">
        <Link
          href="mailto:adeleyetemiloluwa674@gmail.com"
          className="flex h-28 w-28 items-center justify-center  rounded-md border bg-[#111] font-author text-xl font-medium uppercase text-white transition-transform duration-300 hover:scale-110  dark:bg-white dark:text-black"
        >
          <span>Email me</span>
        </Link>
        <div className="flex">
          <Link href="https://github.com/temiloluwa-js">
            <Image
              src="/github.svg"
              alt="Github Link"
              width={30}
              height={30}
              className="mr-6 dark:invert"
            />
          </Link>
          <Link href="https://twitter.com/_abdurrazaq_">
            <Image
              src="/twitter.svg"
              alt="Twitter Link"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
