import Image from "next/image";

type ToolboxProps = {
  name: string;
  imgLinks: string[];
  description: string;
};

export const Toolbox = ({ name, imgLinks, description }: ToolboxProps) => {
  return (
    <article className=" mb-8  w-11/12 items-center   justify-evenly rounded-lg  border-2 py-8 font-author dark:bg-white dark:text-[#111] lg:w-5/12  ">
      <div className="mx-auto w-11/12">
        <div className="mx-auto mb-6   w-11/12 text-center xl:w-8/12">
          <h1 className="mb-1 text-3xl font-medium opacity-80">{name}</h1>
          <h2 className="text-md font-medium leading-snug opacity-60 lg:text-lg">
            {description}
          </h2>
          <div className="mx-auto mt-4 flex justify-center">
            {imgLinks.map((img) => (
              <div
                key={img}
                className="   mx-3 flex h-[60px] w-[60px] flex-col items-center  justify-center"
              >
                <Image
                  src={img}
                  width={50}
                  height={50}
                  alt={name}
                  key={img}
                  className="min-w-[45px] min-h-[45px] max-h-[45px] max-w-[45px]"
                  title={img.replace("/", "").replace(".svg", "")}
                />
                <p className="font-medium capitalize opacity-90">
                  {img.replace("/", "").replace(".svg", "").replace(".png", "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
