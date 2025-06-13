import React from "react";
import { useCart } from "../context/CartContext";

const CartToast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-md z-[999]">
      {toastMessage}
    </div>
  );
};
