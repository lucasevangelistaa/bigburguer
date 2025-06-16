import imgBackgroundHome from "../assets/home-img.webp";
import { GiMeat } from "react-icons/gi";
import { FaRocket, FaFireAlt } from "react-icons/fa";
import { Link } from "react-scroll";

function Home() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center h-screen p-7 flex flex-col justify-center"
      style={{ backgroundImage: `url(${imgBackgroundHome})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl md:ml-auto animate-fade-in">
        <h1 className="text-4xl text-white font-bold mb-4">
          Hambúrguer <span className="personalizado font-bold">Artesanal</span>{" "}
          de Verdade!
        </h1>

        <p className="text-lg text-white mb-6">
          Venha experimentar o melhor hambúrguer artesanal da cidade, feito com
          ingredientes frescos e selecionados.
        </p>

        <ul className="flex flex-col gap-7 mt-10 text-white">
          <li className="flex items-center gap-3">
            <GiMeat size={24} className="text-[#F4A300]" />
            <span>Ingredientes 100% frescos</span>
          </li>
          <li className="flex items-center gap-3">
            <FaRocket size={24} className="text-[#F4A300]" />
            <span>Entrega rápida e segura</span>
          </li>
          <li className="flex items-center gap-3">
            <FaFireAlt size={24} className="text-[#F4A300]" />
            <span>Sabor que vicia</span>
          </li>
        </ul>

        <button className="relative overflow-hidden group bg-[#C62828] text-[#212121] px-6 py-3 rounded-lg transition duration-300 mt-10 hover:text-white">
          <Link to="menu" smooth={true} duration={500} offset={-50}>
            <span className="absolute top-0 left-0 w-full h-0 bg-[#F4A300] transition-all duration-300 ease-out group-hover:h-full"></span>
            <span className="relative z-10">Pedir Agora</span>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Home;
