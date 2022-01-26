import { FC } from "react";

import { TextBox } from "components/base/atoms/TextBox";

type Props = {
  year: string;
  subText?: string;
};

export const MyYearTextBox: FC<Props> = ({ year, subText }) => {
  return (
    <TextBox
      textClassName="text-white font-bold text-2xl sm:text-4xl block text-center"
      subTextClassName="text-xs font-bold text-center block sm:text-base text-white"
      text={year}
      subText={subText}
    />
  );
};
