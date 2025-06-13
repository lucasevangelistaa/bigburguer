import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-scroll";

// import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const BottomNav = () => {
  const { toggleCart, cartItems } = useCart();

  return (
    <div className="z-50 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#4E342E] shadow-lg rounded-2xl px-6 py-2 flex justify-between items-center w-[90%] max-w-md">
      <NavItem icon={<AiOutlineHome />} label="Início" to="home" />
      <NavItem icon={<MdOutlineRestaurantMenu />} label="Cardápio" to="menu" />
      <NavItem icon={<HiOutlineUserGroup />} label="Sobre" to="about" />
      <NavItem icon={<IoMdContact />} label="Contato" to="contact" />

      {/* Botão do Carrinho */}
      <button
        onClick={toggleCart}
        className="relative flex flex-col items-center justify-center text-[#F4A300]"
      >
        <FaCartPlus size={24} />
        <span className="text-xs text-white mt-1">Carrinho</span>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
};


const NavItem = ({ icon, label, to }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-50}
      className="
        group flex flex-col items-center justify-center px-3 py-2 rounded-xl 
        relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:transform hover:-translate-y-1 cursor-pointer
      "
    >
      <div
        className="
        absolute inset-0 rounded-xl bg-gradient-to-b from-[#F4A300]/10 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      "
      />
      <div
        className="
          text-2xl text-[#F4A300] relative
          group-hover:text-[#FFB833]
          transition-colors duration-300
        "
      >
        {icon}
        <span
          className="
          absolute -bottom-1 left-1/2 transform -translate-x-1/2
          w-1 h-1 bg-[#F4A300] rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
        />
      </div>

      <span
        className="
        text-xs mt-1 text-white relative
        group-hover:text-[#FFE0B2]
        transition-colors duration-300
      "
      >
        {label}
      </span>

      <div
        className="
        absolute inset-0 rounded-xl border border-[#F4A300]/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "
      />
    </Link>
  );
};

export default BottomNav;
