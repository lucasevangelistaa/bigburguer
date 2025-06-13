import {useCart} from "../context/CartContext"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import menuItems from "../data/MenuItems";
import imgBackgroundMenu from "../assets/menu-img01.webp";

const Menu = () => {
  const { addToCart } = useCart();
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 px-6 md:px-20"
      style={{ backgroundImage: `url(${imgBackgroundMenu})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-md backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl mb-6 text-center">
          Nosso <span className="personalizado">Cardápio</span>
        </h1>

        {/* GRID em desktop */}
        <div className="hidden md:grid gap-10 md:grid-cols-3 text-white">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#3c2f2f] rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-2xl font-chewy text-mostarda mb-2">
                  {item.nome}
                </h3>
                <p className="text-sm text-white/80 mb-4">{item.descricao}</p>
                <span className="block text-lg text-[#C62828] font-bold text-mostarda">
                  {item.preco}
                </span>
                <button
                    onClick={() => addToCart(item)}
                 className="relative overflow-hidden group bg-[#C62828] text-[#212121] px-6 py-3 rounded-lg transition duration-300 mt-10 hover:text-white">
                  <span class="absolute inset-0 w-0 bg-[#F4A300] transition-all duration-300 ease-out group-hover:w-full "></span>
                  <span className="relative z-10">Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CARROSSEL no mobile */}
        <div className="block md:hidden text-white">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
          >
            {menuItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#3c2f2f] rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl font-chewy text-mostarda mb-2">
                      {item.nome}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      {item.descricao}
                    </p>
                    <span className="block text-lg font-bold text-[#C62828] ">
                      {item.preco}
                    </span>
                    <button
                    onClick={() => addToCart(item)}
                    className="mt-4 bg-[#F4A300] text-[#212121] px-4 py-2 rounded hover:bg-[#C62828] transition">
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Menu;
