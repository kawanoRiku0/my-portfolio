import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className=" bg-opacity-20 bg-gray-500">
      <div className="container mx-auto flex p-5 flex-row justify-center items-center bg-transparent">
        <nav className="w-full min-w-[280px] text-base sm:text-lg max-w-lg  flex justify-between font-mono text-white md:text-2xl body-font">
          <Link href={"/"} passHref>
            <a>HOME</a>
          </Link>
          <Link href={"/about"} passHref>
            <a>ABOUT</a>
          </Link>
          <Link href={"/works"} passHref>
            <a>WORKS</a>
          </Link>
          <Link href={"/blog"} passHref>
            <a>BLOG</a>
          </Link>
          <Link href={"/contact"} passHref>
            <a>CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
