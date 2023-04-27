import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        ¿Sabias Qué?
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Estos fueron los 5 cafés más pedidos en el 2021, ¿Cuál es tu favorito?,
          ¿Ya lo probaste?, ¿Qué esperas para probarlo?,
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fshaken-black-tea_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
            className="w-10 h-10 md:w-28 md:h-28 object-cover rounded-full"
          />
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchocolate-blanco-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
            className="w-10 h-10 md:w-28 md:h-28 object-cover rounded-full"
          />
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchip-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
            className="w-10 h-10 md:w-28 md:h-28 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcaramel-frappuccino_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
            className="w-10 h-10 md:w-28 md:h-28 object-cover rounded-full"
          />
          <img
            src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fberry-yogurt-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2"
            className="w-10 h-10 md:w-28 md:h-28 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Chip Frappuccino® top 1</h3>
          <h5 className="text-center text-[20px] text-gray-500">
          Calorías 330
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
