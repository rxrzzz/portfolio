import Image from "next/image";
import Link from "next/link";

type HomeProjectBoxProps = {
  name: string;
  description: string;
  imgUrl?: string;
  gitUrl?: string;
  liveUrl?: string;
  headingColor: string;
  textColor: string;
  color: string;
  invert: boolean;
};

export const HomeProjectBox = ({
  description,
  imgUrl,
  name,
  textColor,
  headingColor,
  color,
  invert,
  gitUrl,
  liveUrl,
}: HomeProjectBoxProps) => {
  return (
    <article
      style={{ backgroundColor: color }}
      className="my-2 flex w-full rounded-md border py-14 font-author lg:my-8 lg:items-center lg:justify-around"
    >
      <div className="mx-auto flex w-11/12 flex-col justify-center lg:w-7/12">
        <h1
          className="mb-3 text-3xl font-medium opacity-90 "
          style={{ color: headingColor }}
        >
          {name}
        </h1>
        <p
          className="text-md font-medium leading-3 opacity-80 lg:text-lg"
          style={{ color: textColor }}
        >
          {description}
        </p>
        <div className="mt-4 flex">
          {gitUrl ? (
            <Link href={gitUrl}>
              <Image
                alt={name}
                height={20}
                width={20}
                src="/github.svg"
                style={{ filter: invert ? "invert(100%)" : "invert(0)" }}
                className="mr-4"
              />
            </Link>
          ) : null}
          {liveUrl ? (
            <Link href={liveUrl}>
              <Image
                alt={name}
                height={20}
                width={20}
                src="/eye.svg"
                style={{ filter: invert ? "invert(100%)" : "invert(0)" }}
                className="mr-4"
              />
            </Link>
          ) : null}
        </div>
      </div>

      <div className=" hidden h-full w-4/12 items-center justify-center lg:flex">
        {imgUrl ? (
          <Image
            alt={name}
            height={300}
            width={300}
            src={imgUrl}
            className="w-fit object-contain"
          />
        ) : null}
      </div>
    </article>
  );
};
