import React from 'react'

import fondo from '../assets/fondoImpacto.jpg';

import CountUp from 'react-countup';

const stats = [
  { value: 528, label: 'Participantes recibieron apoyo integral en 2024' },
  { value: 80, label: 'Jovenes participaron del campamento en 2024' },
  { value: 20, label: 'Participantes recibieron capacitación técnica en diversas áreas' },
  { value: 431, label: 'Participantes recibieron poleras de la Fundación' },
  { value: 452, label: 'Participantes recibieron material escolar' },
  { value: 65, label: 'Biblias fueron entregadas a niños, adolescentes y jóvenes' },

  //{ value: 6.5, suffix: ' mill', label: 'Peticiones de Ayuda atendidas en el Teléfono y Chat desde 1994' },
];


const Impacto = () => {
   
    
      return (
    
        <div name="impacto" className="bg-gradient-to-b from-gray-800 to-green-one w-full h-fit pt-10"
        style={{
                backgroundImage: `url(${fondo})`,
              }}>
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
    
            <div>
              <p className="text-4xl font-bold border-b-4 border-yellow-one p-2 inline text-blue-one">Impacto</p>
              <p className="py-6">Conoce los logros que se han desarrollado en la gestión 2024</p>
            </div>
    
            <div className="bg-gray-100 py-10 px-4">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-blue-one">
                          <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} />
                        </h2>
                        <p className="mt-2 text-base sm:text-lg text-orange-one">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
          </div>
        </div>
      )
}

export default Impacto