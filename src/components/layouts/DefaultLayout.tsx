import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  pageTitle?: string;
  titleColor?: string;
  pageColor?: string;
};

export const DefaultLayout: FC<Props> = ({
  children,
  pageTitle,
  titleColor = "text-white",
  pageColor = "",
}) => {
  const wrapperClass = "min-h-screen bg-opacity-50" + " " + pageColor;
  const titleClass =
    "font-bold text-3xl text-center mx-auto" + " " + titleColor;

  return (
    <div className={wrapperClass}>
      {/* ヘッダーの高さ分余白を設ける */}
      <div className="py-28">
        {pageTitle && <h2 className={titleClass}>{pageTitle}</h2>}
        {children}
      </div>
    </div>
  );
};
