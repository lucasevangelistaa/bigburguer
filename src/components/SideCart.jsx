import { useCart } from "../context/CartContext";
import { IoClose } from "react-icons/io5";

const SideCart = () => {
  const { cartItems, isCartOpen, toggleCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-[#3c2f2f] shadow-lg z-50 transform transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-[#F4A300]">
        <h2 className="text-lg text-white font-bold">Seu Carrinho</h2>
        <button onClick={toggleCart}>
          <IoClose size={24} className="text-white" />
        </button>
      </div>

      <div className="p-4 text-white space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-white/70">Carrinho vazio 🍟</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <h4 className="text-mostarda font-bold">{item.nome}</h4>
                <p className="text-sm text-white/70">{item.preco}</p>
              </div>
            </div>
          ))
        )}
        {/* Botão finalizar comprar formatado pedido completo para o whatsapp da hamburgueri */}
        {cartItems.length > 0 && (
          <a
            href={`https://api.whatsapp.com/send?phone=5598984986243&text=${encodeURIComponent(
              `Olá, gostaria de fazer o pedido: ${cartItems
                .map((item) => `${item.nome} - ${item.preco}`)
                .join(", ")}`
            )}`}
            className="block text-center bg-[#F4A300] text-black py-2 rounded hover:bg-[#e3a000]"
          >
            Finalizar Pedido
          </a>
        )}
      </div>
    </div>
  );
};

export default SideCart;
