import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Autoplay,Pagination,Scrollbar } from 'swiper/modules'

import imgMobile1 from '../assets/arteCelular.png'
import imgTablet1 from '../assets/arteTablet.png'
import imgLaptop1 from '../assets/arteLaptop.png'
import imgDesktop1 from '../assets/artePantallaGrande.png'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
//import carrusel1 from '../assets/carrusel1.png'
//import carrusel2 from '../assets/carrusel2.png'
//import carrusel3 from '../assets/carrusel3.png'


const slides = [
  {
    mobile: banner1,
    tablet: banner1,
    laptop: banner1,
    desktop: banner1,
    alt: 'Banner 1',
  },
  {
    mobile: banner2,
    tablet: banner2,
    laptop: banner2,
    desktop: banner2,
    alt: 'Banner 2',
  },
  {
    mobile: banner3,
    tablet: banner3,
    laptop: banner3,
    desktop: banner3,
    alt: 'Banner 3',
  },
  
]

export default function ResponsiveCarousel() {
  return (
    <div name='carousel' className='flex items-center justify-center'>
    <Swiper
      modules={[Pagination, Autoplay,Scrollbar]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full custom-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >
          <picture>
            <source media="(min-width: 1536px)" srcSet={slide.desktop} />
            <source media="(min-width: 1024px)" srcSet={slide.laptop} />
            <source media="(min-width: 640px)" srcSet={slide.tablet} />
            <img
              src={slide.mobile}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
