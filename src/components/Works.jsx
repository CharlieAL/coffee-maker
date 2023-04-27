import React from 'react'

const Works = () => {
  return (
    <div id='aboutUs' className='p-8 xl:p-20'>
      <div className='mb-8'>
        <h1 className='text-[40px] font-black'>
        TU VASO REUSABLE ES BIENVENIDO AQUÍ
        </h1>
        <p className='text-xl text-gray-500'>
        Trae tu vaso o termo a tu Starbucks favorito y obtén $8 pesos de descuento en tu bebida.
        </p>
      </div>
      {/* Works */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-2'>
          <img
            src='https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2FAsset%2042x.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2'
            className='w-full h-[600px] object-cover rounded-3xl'
          />

          <h3 className='text-2xl font-bold'>DALE SABOR A TU VERANO</h3>
          <p className='text-gray-500'>
            Dile hola a tus favoritos de la temporada, Mocha Cookie Crumble
            Frappuccino® y Caramel Ribbon Crunch Frappuccino®
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4'>
            <img
              src='https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2FAsset%2072x.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2'
              className='w-full h-56 object-cover rounded-3xl'
            />

            <h3 className='text-2xl font-bold'>ES MOMENTO DE HACERLO FRESH</h3>
            <p className='text-gray-500'>
              Disfruta el verano con la mejor actitud y tu Refresher® favorito
              #TodasLasFormasDeDisfrutarTuVerano
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <img
              src='https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2Fsitio-web_Home_Summer_1_23.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2'
              className='w-full h-56 object-cover rounded-3xl'
            />

            <h3 className='text-2xl font-bold'>LLENA TU DÍA CON COLD BREW</h3>
            <p className='text-gray-500'>
              Dale a esta temporada energía y sabor, con tu Cold Brew favorito.
              Descubre nuestro nuevo sabor: Chocolate Cream Cold Brew
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <img
              src='https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2FAsset%2092x.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2'
              className='w-full h-56 object-cover rounded-3xl'
            />

            <h3 className='text-2xl font-bold'>DISFRUTA DONDE ESTÉS</h3>
            <p className='text-gray-500'>
              No te pierdas la diversión! Ordena desde nuestra app y recibe en
              casa con Starbucks Rewards Delivery, recoge en tienda a través de
              Pickup o desde tu auto con Car Pickup
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <img
              src='https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-04%2FAsset%2082x_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max&dpr=2'
              className='w-full h-56 object-cover rounded-3xl'
            />
            <h3 className='text-2xl font-bold'>
              HAZ QUE EL VERANO SEA GRANDIOSO
            </h3>
            <p className='text-gray-500'>
              Sé parte de Starbucks Rewards, obtén más café gratis y beneficios
              exclusivos. Descarga la app y regístrate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
