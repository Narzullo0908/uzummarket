import React, { useState } from "react";
import { CiHeart, CiLocationOn, CiUser } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { IoClose, IoMenu } from "react-icons/io5";
import { RxCardStack } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="relative">
      <div className="px-25 flex justify-between items-center bg-[#F2F4F7] h-8 text-[14px] text-[#1F2026] mb-4.5 max-md:px-2">
        <div className="flex gap-6.25">
          <span className="flex gap-1.25 items-center">
            <CiLocationOn size={20} /> Shahar:
            <span className="font-medium underline">Toshkent</span>
          </span>
          <span className="max-md:hidden font-medium">
            Topshirish punktlari
          </span>
        </div>
        <div className="block max-md:hidden">
          <p className="text-[#8B8E99]">
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
          </p>
        </div>
        <div className="flex gap-3.75">
          <span className="text-[#595B66] max-md:hidden font-medium">
            Savol-javoblar
          </span>
          <span className="text-[#595B66] max-md:hidden font-medium">
            Buyurtmalarim
          </span>
          <span className="flex gap-1.25">
            <img src="/SVG.svg" alt="" />
            <p className="text-[#1F2026] font-medium">O'zbekcha</p>
          </span>
        </div>
      </div>
      <div className="px-25 flex justify-between items-center max-md:px-2 mb-3">
        <div className="max-md:hidden block">
          <img src="/logo.svg" alt="UZUM MARKET logo" />
        </div>
        <div className="flex gap-1.75 items-center">
          <button className="max-md:hidden py-2.75 px-4.5 bg-[#F0F0FF] text-[#7000FF] rounded-sm flex items-center gap-1.25 font-medium">
            <RxCardStack size={20} className="rotate-180 text-[#7000FF]" />
            <p>Katalog</p>
          </button>
          <div className="w-full">
            <input
              className="max-md:w-70 w-132 border border-black/20 text-black/40 focus:outline-0 rounded-sm pl-4.25 py-2.75"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
          </div>
        </div>
        <div className="flex max-md:gap-2 gap-4 items-center">
          <Link to={"/login"}>
            <div className="max-md:hidden flex items-center gap-1.75 text-[14px] font-medium">
              <CiUser size={20} />
              <p>Kirish</p>
            </div>
          </Link>
          <div className="flex items-center gap-1.75 text-[14px] font-medium">
            <CiHeart size={20} className="max-md:size-7" />
            <p className="max-md:hidden">Saralangan</p>
          </div>
          <div className="max-md:hidden flex items-center gap-1.75 text-[14px] font-medium">
            <TbShoppingBag size={20} />
            <p>Savat</p>
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
        <IoClose onClick={()=>setMenu(false)} size={30} className="absolute right-5 text-white top-5" />

        <div className="flex gap-4 items-start text-white flex-col p-5 relative mt-10">
          <Link to={"/login"}>
            <div className="flex items-center gap-1.75 text-[24px] font-medium">
              <CiUser size={30} />
              <p>Kirish</p>
            </div>
          </Link>
          <div className="flex items-center gap-1.75 text-[24px] font-medium">
            <TbShoppingBag size={30} />
            <p>Savat</p>
          </div>
          <Link to={"/"}>
            <div className="flex items-center gap-1.75 text-[24px] font-medium">
              <GoHome size={30} />
              <p>Asosiy</p>
            </div>
          </Link>
        </div>
      </div>
      <ul className="px-25 flex justify-between items-center h-14.5 max-md:hidden">
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.25">
          <img src="/muddatli.svg" alt="" />
          Muddatli to'lov
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Elektronika
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Maishiy texnika
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Kiyim
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Poyabzallar
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Aksessuarlar
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Goʻzallik va parvarish
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Salomatlik
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Uy-roʻzgʻor buyumlari
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Qurilish va taʼmirlash
        </li>
        <li className="text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer">
          Yana
        </li>
      </ul>
      <p className="md:hidden bg-[#00000023] text-[#595B66] text-[14px] hover:text-black hover:font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.25 p-2 rounded-[10px] w-full justify-center">
        <img src="/muddatli.svg" alt="" />
        Muddatli to'lov
      </p>
    </nav>
  );
}
