import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Caffeteria Andrea !!{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
              Los Mejores Cafes
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Brindamos el mejor servicio de cafetería, con los mejores precios y la mejor calidad.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
          
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2FAsset%2052x.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
        
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img
          src="cup.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FSumatra_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-americano_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
        />
      </div>
    </section>
  );
};

export default Hero;
