import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLottie } from "lottie-react";
import devAnimation from "../../public/dev.json";

import { Footer } from "../components/Footer";
const Home: NextPage = () => {
  const options = {
    animationData: devAnimation,
    loop: true,
  };

  const { View: dev } = useLottie(options);

  return (
    <>
      <Head>
        <title>Temiloluwa Adeleye: Fullstack Engineer Portfolio</title>
        <meta
          name="description"
          content="Adeleye Temiloluwa is a full stack engineer based in Abeokuta."
        />
        <link rel="icon" href="/favicon.ico" />
        <style></style>
      </Head>
      <div
        className="mx-auto w-11/12  max-w-[90rem] items-center
       justify-between pb-40 font-author  lg:flex lg:h-screen lg:pb-0"
      >
        <section className="mt-40 max-w-xl lg:mt-0 lg:max-w-lg">
          <h1 className="mb-4 text-5xl font-medium md:text-6xl">
            <span className="block">Hello.</span> I&apos;m Adeleye Temiloluwa.
          </h1>
          <h2 className="text-lg font-medium opacity-60 dark:opacity-80 md:text-xl">
            Currently learning / working on: W3Schools CSS Recap, Javascript.Info JS Recap, a JS Game and a Chrome Extension.
          </h2>
          <div className="mt-4 flex items-center">
            <Link href="https://github.com/temiloluwa-js">
              <Image
                src="/github.svg"
                alt="Github Link"
                width={30}
                height={30}
                className="mr-4 dark:invert"
              />
            </Link>
            <Link href="https://twitter.com/_rxrz">
              <Image
                src="/twitter.svg"
                alt="Twitter Link"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="mailto:adeleyetemiloluwa.work@gmail.com"
              className="ml-4 text-lg font-medium underline opacity-60 dark:opacity-80 md:text-xl"
            >
              Email me
            </Link>
          </div>
        </section>
        <aside className="w-full lg:w-6/12">{dev}</aside>
      </div>
    </>
  );
};

export default Home;
