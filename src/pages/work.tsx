import { HomeProjectBox } from "../components/HomeProjectBox";
import { Footer } from "../components/Footer";
export default function Work() {
  return (
    <>
      <section className="mx-auto mt-12 flex  w-11/12 max-w-[90rem] flex-col py-8 font-author">
        <h1 className="mb-1 text-center  font-author text-4xl font-medium opacity-80 lg:text-6xl dark:opacity-100">
          Projects
        </h1>
        <p className="text-md mx-auto mt-4 mb-12 max-w-[300px] text-center font-medium leading-none opacity-80 lg:text-xl dark:opacity-100">
          Notable projects I have worked on since I started my journey in web
          development.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <HomeProjectBox
            name="Shifuku Hotel"
            invert={false}
            textColor="black"
            headingColor="black"
            gitUrl="https://github.com/temiloluwa-js/shifuku-client"
            liveUrl="https://shifukuhotel.vercel.app"
            description="Shifuku Hotel is a full stack hotel application built with MongoDB, ExpressJS, ReactJS and NodeJS. Users can make bookings and admins can manage  bookings and rooms."
            imgUrl="/shifuku.png"
            color="white"
          />
          <HomeProjectBox
            name="66CH"
            textColor="white"
            invert={true}
            headingColor="white"
            gitUrl="https://github.com/temiloluwa-js/66ch-2"
            liveUrl="https://66ch.vercel.app"
            description="66ch is a blog built with React, Tailwind CSS and Firebase. Users can read blogs,  create blogs, search posts, comment, reply and a lot more things."
            imgUrl="/66ch.png"
            color="#0337F2"
          />
          <HomeProjectBox
            name="Misc Avatars"
            textColor="white"
            invert={true}
            headingColor="white"
            gitUrl="https://github.com/temiloluwa-js/misc"
            liveUrl="https://miscavatars.vercel.app"
            description="
            An ecommerce website where Dicebear Avatars are bought. Users can add and remove avatars from cart, switch between light and dark modes and pay for avatars using the Paypal Web SDK. Made with React and Tailwind."
            imgUrl="/miscavatars.png"
            color="#1CA182"
          />
          <HomeProjectBox
            name="LO-A"
            textColor="white"
            invert={true}
            headingColor="white"
            liveUrl="https://latifat.design"
            description="
           Portfolio Website for a Graphic Designer based in Manchester. Made with NextJS, Tailwind and Framer Motion."
            imgUrl="/loa.png"
            color="#121212"
          />
          <HomeProjectBox
            name="CIS Official Website [WIP]"
            textColor="black"
            invert={false}
            headingColor="#783517"
            liveUrl="https://cissa-website.vercel.app"
            description="Website for The Faculty of Communication and Information Sciences in the University Of Ilorin, Nigeria. Made with NextJS, ChakraUI, TRPC and PostgreSQL."
            imgUrl="/cis.png"
            color="#E6E6E6"
          />
          <HomeProjectBox
            name="Leemao [WIP]"
            textColor="white"
            invert={true}
            gitUrl=""
            liveUrl="https://leemao-one.vercel.app"
            headingColor="#269CBE"
            description="Leemao is a website with a curation of African memes that can be downloaded or shared across all social media apps. Made with React and Tailwind."
            imgUrl="/leemaologo.png"
            color="#16121A"
          />
          <HomeProjectBox
            name="My 2022 Portfolio"
            textColor="black"
            invert={true}
            gitUrl=""
            liveUrl="https://leemao-one.vercel.app"
            headingColor="black"
            description="My full stack 2022 Portfolio made with NextJS, TRPC, Prisma, PostgreSQL and Tailwind."
            imgUrl="/portfolio.png"
            color="white"
          />

          <HomeProjectBox
            name="AI Baby Cat Girl Token"
            textColor="white"
            invert={true}
            liveUrl="https://ai-babycatgirl.vercel.app/"
            headingColor="#A855F7"
            description="Promotional website for a crypto token launch. Made with HTML and Tailwind."
            imgUrl="/babycatgirl.jpeg"
            color="black"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
