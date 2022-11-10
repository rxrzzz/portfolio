import Image from "next/image";

type ToolboxProps = {
  name: string;
  imgLinks: string[];
  description: string;
};

export const Toolbox = ({ name, imgLinks, description }: ToolboxProps) => {
  return (
    <article className=" flex flex-wrap xl:w-11/12  w-full border py-8 shadow-xl font-author justify-evenly items-center xl:mb-16 mb-8 rounded-lg ">
      <div className="xl:w-5/12 w-11/12   text-left mb-6">
        <h1 className="lg:text-4xl text-3xl font-medium opacity-80 mb-3">{name}</h1>
        <h2 className="lg:text-lg text-md font-medium opacity-60 leading-tight">{description}</h2>
      </div>
      <div className="xl:gap-12 w-11/12  lg:[&>img]:mr-0 [&>img]:mr-5 xl:w-3/12  xl:grid xl:grid-cols-2 flex ">
        {imgLinks.map((img) => (
          <Image src={img} width={50} height={50} alt={name} key={img} className="xl:mx-5 border p-1 shadow-lg" title={img.replace("/", "").replace(".svg", "")}/>
        ))}
      </div>
    </article>
  );
};
