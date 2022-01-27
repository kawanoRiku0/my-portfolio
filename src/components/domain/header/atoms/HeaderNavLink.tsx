import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  path: string;
  text: string;
};

export const HeaderNavLink: FC<Props> = ({ path, text }) => {
  const { pathname } = useRouter();

  return (
    <Link href={path} passHref>
      <a
        className={
          pathname == path
            ? "py-2 px-1 sm:px-3 mx-1 sm:mx-3  border-b-2 border-white"
            : " py-2 px-1 sm:px-3 mx-1 sm:mx-3 "
        }
      >
        {text}
      </a>
    </Link>
  );
};
