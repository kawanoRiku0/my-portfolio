import Image from "next/image";
import React, { FC } from "react";
import { Work } from "types/works";

type Props = {
  work: Work;
  // クリック時、モーダルに作品のデータをセット
  handleOnClick: (work: Work) => void;
};

export const WorkShowBox: FC<Props> = ({ work, handleOnClick }) => {
  return (
    <div
      onClick={() => handleOnClick(work)}
      className="aspect-square w-[27%] m-3 cursor-pointer hover:scale-110 transition-all"
    >
      <Image
        src={work.image.url}
        width={500}
        height={500}
        layout="intrinsic"
        objectFit="cover"
      />
    </div>
  );
};
