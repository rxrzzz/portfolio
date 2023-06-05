import Link from "next/link";

export const Footer = () => {
  return (
    <section className="mx-auto   w-11/12 max-w-[90rem]  pb-24 font-author lg:my-12 ">
      <div className=" flex items-center justify-between py-28 lg:mt-20  lg:py-8">
        <Link
          href="mailto:adeleyetemiloluwa674@gmail.com"
          className="flex h-28 w-28 items-center justify-center  rounded-md border bg-[#111] font-author text-xl font-medium uppercase text-white transition-transform duration-300 hover:scale-110  dark:bg-white dark:text-black"
        >
          <span>Email me</span>
        </Link>
      </div>
    </section>
  );
};
