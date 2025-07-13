// src/components/MisionValores.jsx
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function MisionValores() {
  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Misión */}
        <motion.div
          className="bg-gradient-to-b from-blue-two to-gray-200 rounded-2xl shadow-md p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-montserrat text-white mb-4 text-center">Nuestra Misión</h2>
          <p className="text-gray-700 leading-relaxed text-blue-one">
            Coadyuvar y ofrecer atención integral a niños, niñas, adolescentes, jóvenes y sus familias que se encuentran en situación de vulnerabilidad en el municipio de La Guardia –ciudad de Santa Cruz, a través de este programa de protección, mecanismos de inclusión, de prevención y capacitación para la vida.
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div
          className="bg-gradient-to-b from-blue-two to-gray-200 rounded-2xl shadow-md p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl text-white mb-4 text-center font-montserrat">Nuestros Valores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Solidaridad</li>
            <li>Amor</li>
            <li>Justicia</li>
            <li>Integridad</li>
            <li>Cultura y Paz</li>
            <li>Responsabilidad</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
