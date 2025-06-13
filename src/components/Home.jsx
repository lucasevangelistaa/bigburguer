import imgBackgroundHome from "../assets/home-img.webp";
import { GiMeat } from "react-icons/gi";
import { FaRocket, FaFireAlt } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center h-screen p-7 flex flex-col justify-center"
      style={{ backgroundImage: `url(${imgBackgroundHome})` }}
    >
      <Motion.div
        className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl md:ml-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Motion.h1
          className="text-4xl text-white font-bold mb-4"
          variants={item}
        >
          Hambúrguer <span className="personalizado font-bold">Artesanal</span>{" "}
          de Verdade!
        </Motion.h1>

        <Motion.p className="text-lg text-white mb-6" variants={item}>
          Venha experimentar o melhor hambúrguer artesanal da cidade, feito com
          ingredientes frescos e selecionados.
        </Motion.p>

        <Motion.ul
          className="flex flex-col gap-7 mt-10 text-white"
          variants={container}
        >
          <Motion.li className="flex items-center gap-3" variants={item}>
            <GiMeat size={24} className="text-[#F4A300]" />
            <span>Ingredientes 100% frescos</span>
          </Motion.li>
          <Motion.li className="flex items-center gap-3" variants={item}>
            <FaRocket size={24} className="text-[#F4A300]" />
            <span>Entrega rápida e segura</span>
          </Motion.li>
          <Motion.li className="flex items-center gap-3" variants={item}>
            <FaFireAlt size={24} className="text-[#F4A300]" />
            <span>Sabor que vicia</span>
          </Motion.li>
        </Motion.ul>

        <Motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group bg-[#C62828] text-[#212121] px-6 py-3 rounded-lg transition duration-300 mt-10 hover:text-white"
          variants={item}
        >
          <Link
            to="menu"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <span className="absolute top-0 left-0 w-full h-0 bg-[#F4A300] transition-all duration-300 ease-out group-hover:h-full"></span>

            <span className="relative z-10">Pedir Agora</span>
          </Link>
        </Motion.button>
      </Motion.div>
    </section>
  );
}

export default Home;
