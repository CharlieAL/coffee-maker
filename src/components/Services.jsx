import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Ingresa tu correo!</h1>
        <p className="text-[20px] text-gray-500">
          Para que te mantengas al tanto de las novedades, o participes en la creación de un nueva bebida.
          <br />
          Estas son algunas ---{">"} 
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Suscribe
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Ffresa-cream-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2" className="text-4xl p-2 bg-pink-100 text-primary box-content rounded-xl w-28" />
          <h3 className="text-[20px] font-bold">Fresa Cream Frappuccino</h3>
          <p className="text-gray-500">
            Esta bebida fue creada por el barista de Starbucks, Chris H., quien se inspiró en el sabor de la fresa.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <img src="https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmatcha-green-tea-cream-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2" className="text-4xl p-2 bg-green-100 text-primary box-content rounded-xl w-28" />
          <h3 className="text-[20px] font-bold">Matcha Green Tea Cream Frappuccino</h3>
          <p className="text-gray-500">
            Charlie Ramirez fue el creador de esta bebida, la cual se caracteriza por su sabor dulce y suave.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
