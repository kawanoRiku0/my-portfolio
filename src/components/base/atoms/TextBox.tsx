import { FC } from "react";

type Props = {
  text: string;
  textClassName?: string;
  subText?: string;
  subTextClassName?: string;
};

export const TextBox: FC<Props> = ({
  text,
  textClassName,
  subText,
  subTextClassName,
}) => {
  return (
    <div>
      <span className={textClassName}>{text}</span>
      {/* サブテキストがpropsで渡ってきた場合のみ表示 */}
      {subText && (
        <>
          <br />
          <span className={subTextClassName}>{subText}</span>
        </>
      )}
    </div>
  );
};
