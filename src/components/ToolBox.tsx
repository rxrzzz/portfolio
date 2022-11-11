import Image from "next/image";

type ToolboxProps = {
  name: string;
  imgLinks: string[];
  description: string;
};

export const Toolbox = ({ name, imgLinks, description }: ToolboxProps) => {
  return (
    <article className=" mb-8  w-full dark:bg-white dark:text-[#111]   items-center justify-evenly  rounded-lg border-2 py-8 font-author xl:mb-16 xl:w-11/12 ">
      <div className="mx-auto w-11/12">
        <div className="mb-6 w-11/12   text-center xl:w-8/12 mx-auto">
          <h1 className="mb-1 text-3xl font-medium opacity-80">{name}</h1>
          <h2 className="text-md font-medium leading-snug opacity-60 lg:text-lg">
            {description}
          </h2>
          <div className="mt-4 flex mx-auto justify-center">
            {imgLinks.map((img) => (
              <div key={img} className="   flex flex-col w-[60px] h-[60px] items-center justify-center  mr-4">
                <Image
                  src={img}
                  width={50}
                  height={50}
                  alt={name}
                  key={img}
                  className="  p-1 "
                  title={img.replace("/", "").replace(".svg", "")}
                />
                <p className="capitalize font-medium opacity-90">{img.replace("/", "").replace(".svg", "")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
