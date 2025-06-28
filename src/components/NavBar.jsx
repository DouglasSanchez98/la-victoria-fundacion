import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-scroll';
import logofundacion from '../assets/laVictoriaLogo.png';
import ReactWhatsapp from 'react-whatsapp';


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'inicio',
            child: (
                <>

                    <p className="cursor-pointer m-1">inicio</p>

                </>
            ),
        },
        {
            id: 2,
            link: 'quienessomos',
            child: (
                <>

                    <p className="cursor-pointer m-1">quiénes somos</p>

                </>
            ),
        },
        {
            id: 3,
            link: 'programas',
            child: (
                <>

                    <p className="cursor-pointer m-1">qué hacemos</p>

                </>
            ),
        },
        {
            id: 4,
            link: 'impacto',
            child: (
                <>

                    <p className="cursor-pointer m-1">impacto</p>

                </>
            ),
        },
        
         {
            id: 5,
            link: 'donaciones',
            child: (
                <>

                    <div className='border border-yellow-one border-solid rounded p-1'>
                            <p className="cursor-pointer m-1 ">Donar</p>
                       
                    </div>
                </>
            ),
        }, 
        {
            id: 6,
            
            child: (
                <>
                    <div className='border border-yellow-one border-solid rounded p-1'>
                             <ReactWhatsapp number="+59165069109" message="Saludos necesito Información sobre la Fundación La Victoria" element='text' >

                            <p className="cursor-pointer m-1 ">Contacto</p>
                             </ReactWhatsapp>
                    </div>
                </>
            ),
        },
    ]
    return (
        <div className='flex  justify-between items-center w-full h-20
         px-4 text-white bg-white-silver fixed z-20'>
            <div className="h-full">
                <img src={logofundacion} alt="Logo Fundación Danielito"
                    className="pt-2 rounded-2xl mx-auto md:h-18 h-20"></img>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link, child }) => (

                    <li key={id} className='px-4 cursor-pointer capitalize font font-medium text-blue-two hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>
                            {child}
                        </Link>

                    </li>

                ))}

            </ul>


            <div onClick={() => setNav(!nav)} className=" cursor-pointer  z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
            </div>
            {nav && (

                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue-one text-white'>
                    {links.map(({ id, link, child }) => (

                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>

                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {child}
                            </Link>
                        </li>

                    ))}
                </ul>

            )}

        </div>
    )
}

export default NavBar