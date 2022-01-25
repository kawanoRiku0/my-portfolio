import { FC } from "react";

type Props = {
  myYear: JSX.Element;
  imageWithMyEvent: JSX.Element;
};

export const MyYearAndMyEventBlock: FC<Props> = ({
  myYear,
  imageWithMyEvent,
}) => {
  return (
    <div className="flex">
      <div className="max-w-[100px] sm:max-w-[140px] w-full">{myYear}</div>
      <div className=" w-full border-l-4 border-white max-w-3xl  ">
        {imageWithMyEvent}
      </div>
    </div>
  );
};
