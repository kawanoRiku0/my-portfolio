import React, { FC } from "react";
import { HeaderNavLink } from "components/domain/header/atoms/HeaderNavLink";

const Header: FC = () => {
  return (
    <header className=" bg-opacity-20 bg-gray-500">
      <div className="container mx-auto flex py-4 flex-row justify-center items-center bg-transparent">
        <nav className="w-full text-base sm:text-lg max-w-lg flex justify-center  font-mono text-white md:text-2xl body-font">
          <HeaderNavLink path="/" text="HOME" />
          <HeaderNavLink path="/about" text="ABOUT" />
          <HeaderNavLink path="/works" text="WORKS" />
          <HeaderNavLink path="/blog" text="BLOG" />
          <HeaderNavLink path="/contact" text="CONTACT" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
