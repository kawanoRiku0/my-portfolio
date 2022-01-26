import { FC } from "react";
import Image from "next/image";

type Props = {
  myYearTextBox: JSX.Element;
  myEventTextBoxList: JSX.Element[];
  imageUrl: string;
};

export const MyChronologySection: FC<Props> = ({
  myYearTextBox,
  imageUrl,
  myEventTextBoxList,
}) => {
  return (
    <div className="flex">
      <div className="max-w-[100px] sm:max-w-[140px] w-full">
        {myYearTextBox}
      </div>
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
          />
        </div>
        {myEventTextBoxList.map((myEventTextBox, index) => {
          return (
            <div className="mt-3 ml-1 p-4 bg-gray-500" key={index}>
              {myEventTextBox}
            </div>
          );
        })}
      </div>
    </div>
  );
};
