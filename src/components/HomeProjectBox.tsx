type HomeProjectBoxProps = {
  name: string;
  description: string;
  imgUrl: string;
  gitUrl?: string;
  liveUrl?: string;
};

export const HomeProjectBox = ({description, imgUrl, name, gitUrl, liveUrl}: HomeProjectBoxProps) => {
  return <div className="my-8 h-80 w-full rounded-md border-2"></div>;
};
