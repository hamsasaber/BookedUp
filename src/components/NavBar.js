"use client";
import React from "react";
import { GoHomeFill, GoQuestion } from "react-icons/go";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

const NavBar = ({ setFooter, footer }) => {
  const router = useRouter();

  console.log(footer);

  return (
    <div className="bg-[#BDE0FE] rounded p-4 shadow-lg flex items-center justify-between">
      <div className="flex flex-row gap-8">
        <button
          name="home button"
          onClick={() => {
            router.push("/home");
          }}
        >
          <div className="flex flex-col items-center">
            <GoHomeFill size={28} className="text-[#290d11] hover:text-white" />
            <span className="text-xs text-[#290d11] mt-1">Home</span>
          </div>
        </button>

        <button
          name="shop button"
          onClick={() => {
            router.push("/shop");
          }}
        >
          <div className="flex flex-col items-center ">
            <FiShoppingBag
              size={28}
              className="text-[#290d11] hover:text-white"
            />
            <span className="text-xs text-[#290d11] mt-1">Shop</span>
          </div>
        </button>

        <button
          name="contact button"
          onClick={() => {
            setFooter(!footer);
          }}
        >
          <div className="flex flex-col items-center">
            <GoQuestion size={28} className="text-[#290d11] hover:text-white" />
            <span className="text-xs text-[#290d11] mt-1">Contact Us</span>
          </div>
        </button>
      </div>
      <div className="font-bold text-[#290d11] text-2xl flex ">BookedUp!!</div>

      <button
        name="wishlist button"
        onClick={() => {
          router.push("/profile");
        }}
      >
        <div className="flex items-center justify-center">
          <FiUser size={28} className="text-[#290d11] hover:text-white" />
          <span className="text-xs text-[#290d11] mt-1 ml-2">My Profile</span>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
