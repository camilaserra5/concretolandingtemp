"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import FilterDropdown from "@/components/filter-dropdown";
import FilterInput from "@/components/filter-input";
import FilterLabel from "@/components/filter-label";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IconLogout, IconMenu } from "@/components/icons";

export default function Home() {
  const t = useTranslations();

  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="relative flex justify-center bg-ui-800 py-1.5 px-1.5 lg:px-4">
      <div className="flex items-center justify-between w-full max-w-screen-3xl">
        {/* Header left */}
        <div className="flex items-center space-x-3">
          {/* Menu button */}
          <MenuButton onClick={toogleMenu} showMenu={showMenu} />

          {/* Logo */}
          <Image
            src="/img/concret0-header-logo.png"
            width={158}
            height={33}
            alt=""
            className="w-32 h-7"
          />
        </div>

        {/* Header right */}
        <div className="flex items-center space-x-6">
          <nav
            className={`${
              showMenu ? " flex " : " hidden "
            } w-full lg:w-auto absolute left-0 lg:left-auto top-11 lg:top-auto lg:relative flex-col lg:flex-row lg:flex items-start lg:items-center text-ui-200 bg-ui-800 lg:bg-transparent lg:space-x-6 py-8 px-6 lg:pt-1 lg:pb-0 lg:px-0 cursor-pointer`}
          >
            <NavButton label="Inicio" isActive />
            <NavButton label="¿Por qué concreto?" />
            <NavButton label="Quiénes somos" />
            <NavButton label="Contacto" />
            <NavButton label="Faq" />
          </nav>
          <button className="bg-btn-400 rounded-full font-bold uppercase text-2xs pl-1.5 pr-2.5 hover:bg-btn-300 transition-color duration-500">
            <div className="flex items-center space-x-0.5">
              <IconLogout classname="size-6" />
              <p className="-mb-0.5">Login</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

const NavButton = ({
  label,
  isActive,
}: {
  label?: string;
  isActive?: boolean;
}) => {
  return (
    <button
      className={`w-full lg:w-auto flex items-center space-x-3 shrink-0 font-roboto uppercase text-xl lg:text-xs text-left tracking-wide whitespace-nowrap transition-color duration-300 pb-3 mb-3 lg:p-0 lg:m-0 border-b lg:border-0 border-neutral-700 cursor-pointer ${
        !isActive ? " text-btn-200 hover:text-btn-400 " : " text-btn-400 "
      } `}
    >
      <div
        className={`size-1.5 rounded-full ml-3 lg:hidden ${
          isActive ? " bg-btn-400 " : " bg-btn-200 "
        }`}
      />
      <p>{label}</p>
    </button>
  );
};

const MenuButton = ({
  showMenu,
  onClick,
}: {
  showMenu?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`lg:hidden flex items-center justify-center size-8 rounded-full ${
        showMenu ? " text-btn-700 bg-btn-300 " : " text-btn-400 bg-btn-500 "
      }`}
      onClick={onClick}
    >
      <IconMenu classname="size-6.5" />
    </div>
  );
};
