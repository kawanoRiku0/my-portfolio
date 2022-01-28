import { FC } from "react";
import Image from "next/image";

type Props = {
  yearTextBox: JSX.Element;
  eventTextBoxList: JSX.Element[];
  imageUrl: string;
};

export const ChronologySection: FC<Props> = ({
  yearTextBox,
  imageUrl,
  eventTextBoxList,
}) => {
  return (
    <div className="flex">
      <div className="max-w-[100px] sm:max-w-[140px] w-full">{yearTextBox}</div>
      <div className=" w-full border-l-4 border-white max-w-3xl  ">
        <div className="w-3/4 sm:w-1/2 mx-auto">
          <Image
            src={imageUrl}
            width={400}
            height={300}
            alt="おもひで画像"
            layout="intrinsic"
            objectFit="cover"
            className="rounded-2xl"
            priority={true}
          />
        </div>
        {eventTextBoxList.map((eventTextBox, index) => {
          return (
            <div className="mt-3 ml-1 p-4 bg-gray-500" key={index}>
              {eventTextBox}
            </div>
          );
        })}
      </div>
    </div>
  );
};
