import { FC } from "react";

import { TextBox } from "components/base/atoms/TextBox";

type Props = {
  text: string;
  subText?: string;
};
export const EventTextBox: FC<Props> = ({ text, subText }) => {
  return (
    <TextBox
      textClassName="text-white font-bold text-base sm:text-3xl"
      subTextClassName="text-xs sm:text-base text-white mt-2 block"
      text={text}
      subText={subText}
    />
  );
};
