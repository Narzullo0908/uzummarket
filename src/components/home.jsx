import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Category from "./category";

export default function Home() {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();

  const getData = async function () {
    try {
      const res = await axios("https://fakestoreapi.com/products/");
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-25 max-md:px-2">
      <img
        src="/banner.png"
        alt=""
        className="rounded-lg mb-12.5 w-full max-md:mb-3"
      />
      <div>
        <p className="font-bold text-[28px]">{t("lowprices")}</p>
        <div className="grid grid-cols-5 gap-x-5 gap-y-8 max-md:grid-cols-2 max-md:gap-x-2">
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item.id}?name=${item.title}&desc=${item.description}`}
              >
                <div className="relative hover:shadow-[5px_5px_2px_0px_#00000014] rounded-[10px] transition-all duration-300">
                  <div className="w-full flex items-center rounded-[10px] justify-center h-100 object-cover bg-[#EFEFEF] dark:bg-[#2A2A2A] p-5 mb-3">
                    <img src={item.image} alt="" />
                    <span className="absolute top-5 right-5 cursor-pointer bg-white dark:bg-black/40 rounded-4xl flex items-center justify-center p-1">
                      <CiHeart size={24} className="dark:text-white"/>
                    </span>
                    <div className="absolute bottom-5 right-5 border-2 border-black/20 rounded-[50%] text-center p-1 cursor-pointer">
                      <TbShoppingBagPlus size={24} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between h-50 p-3">
                    <span>
                      <p className="line-clamp-2 text-[#1F2026] text-[14px] font-medium mb-1.25 dark:text-white">
                        {item.title}
                      </p>
                      <p className="line-clamp-2 mb-2 text-[15px]">
                        {item.description}
                      </p>
                      <p className="flex items-center text-3 gap-0.75 text-[#263052] mb-3.75">
                        <IoMdStar size={20} className="text-[#FFB54C]" />
                        <span>{item.rating.rate}</span>
                        <span>({item.rating.count} sharh)</span>
                      </p>
                    </span>
                    <p className="text-[20px] font-medium">${item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Category data={data} setData={setData} />
      </div>
    </div>
  );
}
