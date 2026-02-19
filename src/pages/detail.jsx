import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import Category from "../components/category";

export default function Home() {
  const [data, setData] = useState([]);
  const { detail } = useParams();
  const arr = [1, 2, 3, 4, 5];

  const getData = async function () {
    try {
      const res = await axios(`https://fakestoreapi.com/products/${detail}`);
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [detail]);

  return (
    <div className="px-25">
      <div>
        <div className="flex justify-between items-center max-md:flex-col max-md:px-2">
          <div className="w-[40%] flex flex-col items-start max-md:w-full">
            <p className="text-5xl uppercase max-md:text-3xl">{data.title}</p>
            <div className="flex mb-20 items-center justify-start">
              {arr.map((item) => {
                if (item < data.rating?.rate) {
                  return <IoMdStar key={item} className="text-[#FFB54C]" />;
                } else {
                  return (
                    <IoMdStarOutline key={item} className="text-[#FFB54C]" />
                  );
                }
              })}
              <p className="ml-3">{data.rating?.rate}</p>
            </div>
            <img src={data.image} alt="" className="w-full" />
          </div>
          <div className="w-[50%] border border-[#7000FF] rounded-[20px] p-10 max-md:w-full max-md:mt-10">
            <p className="font-bold text-black/30">{data.category}</p>
            <p className="text-2xl mb-10">{data.description}</p>
            <p className="text-3xl font-black text-[#7000FF] mb-5">
              ${data.price}
            </p>
            <button className="w-full bg-[#7000FF] p-5 rounded-4xl text-white font-medium text-2xl">
              Add Card
            </button>
          </div>
        </div>
      </div>
      <Category category={data.category} />
    </div>
  );
}
