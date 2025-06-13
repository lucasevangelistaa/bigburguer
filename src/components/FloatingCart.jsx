import { FaCartPlus } from "react-icons/fa";

export default function FloatingCart() {
    return (
        <div className="fixed bottom-10 right-12 bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition duration-300 cursor-pointer">
        <FaCartPlus size={24} />
        </div>
    );
};