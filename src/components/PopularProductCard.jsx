import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, price, name }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] cursor-pointer"
      />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-monstserrat text-slate-gray">
          [4.5]
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
