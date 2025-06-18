import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Imágenes para Programas
import utiles1 from '../assets/entregaUtiles1.jpg';
import viveres from '../assets/entregaViveres.jpg';
import musica from '../assets/claseMusica.jpg';
import feriaSalud from '../assets/feriaSalud.jpg';
import revisionMedica from '../assets/revisionMédica.jpg';
import fondoProgramas from '../assets/fondoProgramas.jpg';

// Imágenes para Coverflow
import ima1 from '../assets/niños.jpg';
import ima2 from '../assets/niños.jpg';
import ima3 from '../assets/grupoJovenes.png';
import ima4 from '../assets/grupoNiños.jpg';
import ima5 from '../assets/niños.jpg';
import almuerzo from '../assets/almuerzo.jpg';
import poleras from '../assets/entregaPoleras.jpg';
import navidad from '../assets/entregaNavidad.jpg';
import padres from '../assets/tallerPadres.jpg';
import campamento from '../assets/campamentoJovenes.jpg';

const Programas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const portfolios = [
    {
      id: 1,
      src: utiles1,
      titulo1: 'Entrega de Útiles',
      titulo2: 'Fundación la Victoria',
      href: '',
    },
    {
      id: 2,
      src: viveres,
      titulo1: 'Entrega de Víveres',
      titulo2: 'Fundación la Victoria',
      href: '',
    },
    {
      id: 3,
      src: musica,
      titulo1: 'Clase de Música',
      titulo2: 'Fundación la Victoria',
      href: '',
    },
    {
      id: 4,
      src: feriaSalud,
      titulo1: 'Feria de Salud',
      titulo2: 'Fundación la Victoria',
      href: '',
    },
    {
      id: 5,
      src: revisionMedica,
      titulo1: 'Revisión Médica',
      titulo2: 'Fundación la Victoria',
      href: '',
    },
  ];

  const destinations = [
    {
      title: 'Almuerzo',
      category: 'Fundación la Victoria',
      location: 'Fundación la Victoria',
      image: almuerzo,
    },
    {
      title: 'Entrega de Poleras',
      category: 'Fundación la Victoria',
      location: 'Fundación la Victoria',
      image: poleras,
    },
    {
      title: 'Regalo de Navidad',
      category: 'Fundación la Victoria',
      location: 'Fundación la Victoria',
      image: navidad,
    },
    {
      title: 'Taller de protección para padres',
      category: 'Fundación la Victoria',
      location: 'Fundación la Victoria',
      image: padres,
    },
    {
      title: 'Almuerzo',
      category: 'Fundación la Victoria',
      location: 'Fundación la Victoria',
      image: campamento,
    },
  ];

  return (
    <div className="w-full">
      {/* Sección Programas */}
      <div
        name="programas"
        className="bg-green-two text-white"
        style={{ backgroundImage: `url(${fondoProgramas})` }}
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 flex flex-col justify-center items-center">
            <p className="text-5xl text-blue-one font-montserrat inline justify-center border-b-4 border-blue-two">
              Actividades
            </p>
          </div>

          {isMobile ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              className="w-full"
            >
              {portfolios.map(({ id, src, titulo1, titulo2, href }) => (
                <SwiperSlide key={id}>
                  <div
                    className="shadow-md shadow-gray-600 rounded-lg overflow-hidden "
                    onClick={() => window.open(href, '_blank')}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-80 object-contain "
                    />
                    <div className="text-center mt-2 px-2">
                      <p className="text-lg font-semibold text-blue-one" >{titulo1}</p>
                      <p className="text-sm text-blue-two">{titulo2}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 px-12 sm:px-0">
              {portfolios.map(({ id, src, titulo1, titulo2, href }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
                  onClick={() => window.open(href, '_blank')}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-80 object-cover"
                  />
                  <div className="text-center mt-2 px-2">
                    <p className="text-lg font-semibold text-blue-one">{titulo1}</p>
                    <p className="text-sm text-blue-two">{titulo2}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sección Carrusel tipo Coverflow */}
      
<div className="w-full py-10 px-5" style={{ backgroundImage: `url(${fondoProgramas})` }}>
  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    loop={true}
    autoplay={{ delay: 3000 }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: false,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="w-full max-w-5xl mx-auto"
  >
    {destinations.map((item, index) => (
      <SwiperSlide key={index} className="w-72">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
          <div className="h-44  flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-center items-center">
            <p className="text-sm text-blue-500 font-semibold">{item.category}</p>
            <h3 className="text-lg font-bold mt-1 pb-4">{item.title}</h3>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default Programas;
