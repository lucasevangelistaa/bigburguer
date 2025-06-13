import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";

function Footer() {
  return (
    <footer className="bg-[#4E342E] text-[#FFF3E0] py-10 pb-28 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="flex justify-center items-center gap-2 text-[#F4A300]">
            <PiHamburgerBold className="text-4xl" />
            <h1 className="text-4xl font-bold">
              Big<span className="personalizado">Burguer</span>
            </h1>
          </div>
          <p className="text-sm">Hambúrguer artesanal, sabor real.</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-[#F4A300] text-xl">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Créditos */}
        <div className="text-center md:text-right text-sm">
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.techlev.site/"
              className="text-[#F4A300] hover:text-white transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luca Evangelista
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
