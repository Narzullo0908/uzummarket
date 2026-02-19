import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiDark, CiHeart, CiLocationOn, CiSun, CiUser } from "react-icons/ci";
import { FaGlobeAsia } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoClose, IoMenu } from "react-icons/io5";
import { RxCardStack } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Nav({dark, setDark}) {
  const [menu, setMenu] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <nav className="relative">
      <div className="px-25 flex justify-between items-center bg-[#F2F4F7] h-8 text-[14px] text-[#1F2026] max-md:px-2 dark:bg-[#1F2933] dark:text-white">
        <div className="flex gap-6.25">
          <span className="flex gap-1.25 items-center">
            <CiLocationOn size={20} /> {t("countrytitle")}
            <span className="font-medium underline">Toshkent</span>
          </span>
          <span className="max-md:hidden font-medium">
            {t("placedelivery")}
          </span>
        </div>
        <div className="block max-md:hidden">
          <p className="text-[#8B8E99]">{t("delivery")}</p>
        </div>
        <div className="flex gap-3.75">
          <span className="text-[#595B66] max-md:hidden font-medium">
            {t("questions")}
          </span>
          <span className="text-[#595B66] max-md:hidden font-medium">
            {t("orders")}
          </span>
          <span className="flex gap-1.25 items-center">
            <FaGlobeAsia size={20} />
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </span>
        </div>
      </div>
      <div className="px-25 h-20 flex justify-between items-center max-md:px-2 mb-3 dark:bg-[#2B3844] dark:text-white ">
        <Link to="/">
          <div className="max-md:hidden block">
            <img src="/logo.svg" alt="UZUM MARKET logo" />
          </div>
        </Link>
        <div className="flex gap-1.75 items-center">
          <button className="max-md:hidden py-2.75 px-4.5 bg-[#F0F0FF] text-[#7000FF] rounded-sm flex items-center gap-1.25 font-medium">
            <RxCardStack size={20} className="rotate-180 text-[#7000FF]" />
            <p>{t("catalog")}</p>
          </button>
          <div className="w-full">
            <input
              className="dark:placeholder:text-white dark:border-white max-md:w-70 w-132 border border-black/20 text-black/40 focus:outline-0 rounded-sm pl-4.25 py-2.75"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
          </div>
        </div>
        <div className="flex max-md:gap-2 gap-4 items-center">
          <Link to={"/login"}>
            <div className="max-md:hidden flex items-center gap-1.75 text-[14px] font-medium">
              <CiUser size={20} />
              <p>{t("login")}</p>
            </div>
          </Link>
          <div className="flex items-center gap-1.75 text-[14px] font-medium">
            <CiHeart size={20} className="max-md:size-7" />
            <p className="max-md:hidden">{t("favorites")}</p>
          </div>
          <div className="max-md:hidden flex items-center gap-1.75 text-[14px] font-medium">
            <TbShoppingBag size={20} />
            <p>{t("cart")}</p>
          </div>
          <div onClick={()=> setDark(prev => !prev)}>
            {
              dark ? <CiDark size={25}/> : <CiSun size={25}/>
            }
          </div>
          <IoMenu
            onClick={() => setMenu(true)}
            size={30}
            className="md:hidden"
          />
        </div>
      </div>
      <div
        className={`bg-[#7000FF] w-50 h-100 rounded-bl-2xl rounded-tl-2xl ${menu ? "right-0" : ""} z-1000 absolute transition-all duration-500 -right-100`}
      >
        <IoClose
          onClick={() => setMenu(false)}
          size={30}
          className="absolute right-5 text-white top-5"
        />

        <div className="flex gap-4 items-start text-white flex-col p-5 relative mt-10">
          <Link to={"/login"}>
            <div className="flex items-center gap-1.75 text-[24px] font-medium">
              <CiUser size={30} />
              <p>{t("login")}</p>
            </div>
          </Link>
          <div className="flex items-center gap-1.75 text-[24px] font-medium">
            <TbShoppingBag size={30} />
            <p>{t("cart")}</p>
          </div>
          <Link to={"/"}>
            <div className="flex items-center gap-1.75 text-[24px] font-medium">
              <GoHome size={30} />
              <p>{t("home")}</p>
            </div>
          </Link>
        </div>
      </div>
      <ul className="px-25 flex justify-between items-center h-14.5 max-md:hidden dark:text-white">
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.25">
          <img src="/muddatli.svg" alt="" />
          {t("termly")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("electronics")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("household")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("clothing")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("footwear")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("accessories")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("beauty")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("health")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t("livelihood")}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t('construction')}
        </li>
        <li className="text-[#595B66] text-[14px] dark:text-white hover:font-bold transition-all duration-200 cursor-pointer">
          {t('more')}
        </li>
      </ul>
      <p className="md:hidden bg-[#00000023] text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.25 p-2 rounded-[10px] w-full justify-center">
        <img src="/muddatli.svg" alt="" />
        {t("termly")}
      </p>
    </nav>
  );
}
