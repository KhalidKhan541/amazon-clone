"use client";
import { Navbar } from "@/components/Navbar";
import { CartItem } from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
            <a href="/" className="text-blue-600 hover:underline">Continue Shopping</a>
          </div>
        ) : (
          <div className="flex gap-8">
            <div className="flex-1 bg-white rounded-lg p-4">
              {items.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="w-80 bg-white rounded-lg p-4 h-fit">
              <p className="text-sm text-gray-600 mb-2">Subtotal ({items.length} items): <span className="font-bold"></span></p>
              <button className="w-full bg-[#ffd814] py-2 rounded text-sm font-medium hover:bg-[#f7ca00]">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
