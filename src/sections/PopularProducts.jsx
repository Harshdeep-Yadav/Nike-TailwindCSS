import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { Zoom } from "react-reveal";
import {Slide} from "react-reveal";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <Slide top >
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 lg:max-w-lg font-montserrat text-slate-gray">
          Exprience top-notch quality products with our sought-after selections.
          Discover a world of comfort, desig, and value.
        </p>
        </Slide>
      </div>
      <div className="grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14 ">
        <Zoom left >
        {products.map((p) => (
          <PopularProductCard key={p.name} {...p} />
        ))}
        </Zoom>
      </div>
    </section>
  );
};

export default PopularProducts;
