"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="bg-[#131921] text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-14 gap-4">
        <Link href="/" className="text-2xl font-bold text-white border border-transparent hover:border-white px-2 py-1">amazon</Link>
        <div className="flex-1 flex items-center">
          <input type="text" placeholder="Search Amazon" className="h-10 flex-1 rounded-l px-3 text-black focus:outline-none" />
          <button className="h-10 bg-[#febd69] px-3 rounded-r hover:bg-[#f3a847]">??</button>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="border border-transparent hover:border-white px-2 py-1 cursor-pointer">
            <p className="text-xs text-gray-300">Hello, Kevin</p>
            <p className="font-bold">Account</p>
          </div>
          <div className="border border-transparent hover:border-white px-2 py-1 cursor-pointer">
            <p className="text-xs text-gray-300">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <Link href="/cart" className="flex items-center gap-1 border border-transparent hover:border-white px-2 py-1">
            <span className="text-2xl">??</span>
            <span className="font-bold text-orange-400">{itemCount}</span>
          </Link>
        </div>
      </div>
      <div className="bg-[#232f3e] px-4 py-2 flex items-center gap-4 text-sm">
        <button className="hover:border hover:border-white px-2 py-1">? All</button>
        <button className="hover:border hover:border-white px-2 py-1">Deals</button>
        <button className="hover:border hover:border-white px-2 py-1">Customer Service</button>
        <button className="hover:border hover:border-white px-2 py-1">Registry</button>
        <button className="hover:border hover:border-white px-2 py-1">Gift Cards</button>
        <button className="hover:border hover:border-white px-2 py-1">Sell</button>
      </div>
    </nav>
  );
}
