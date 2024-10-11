import React from "react";
import { FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <div className="fixed bottom-0 bg-[#BDE0FE] rounded p-4 shadow-lg w-screen flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="text-xl font-semibold text-gray-900 mb-4">Info</div>
          <div className="space-y-3">
            <p className="leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-red-600">BookedUp</span>! Our web
              application allows authors to publish their books,
            </p>
            <p className="leading-relaxed">
              and readers to easily browse, purchase, or rent them.
            </p>
            <p className="leading-relaxed">
              Authors can upload their books with cover images and descriptions,
            </p>
            <p className="leading-relaxed">
              setting their prices for sale or rent. Readers can explore the
              available titles,
            </p>
            <p className="leading-relaxed">
              and complete their purchases or rentals after entering their
              credit card details and becoming a customer!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="mt-2 mb-4 font-semibold">Contact Us</div>
          <div className="flex flex-row gap-8">
            <button
              onClick={() => {
                router.push(
                  "https://www.facebook.com/profile.php?id=61565194411026"
                );
              }}
            >
              <FaFacebook
                size={32}
                className="text-[#1877F2] hover:text-white"
              />
              <span className="text-xs text-[#290d11] mt-1">Facebook</span>
            </button>

            <button>
              <FaTwitter
                size={32}
                className="text-[#1DA1F2] hover:text-white"
              />
              <span className="text-xs text-[#290d11] mt-1">Twitter</span>
            </button>

            <button>
              <MdOutlineMail
                size={32}
                className="text-[#D44638] hover:text-white"
              />
              <span className="text-xs text-[#290d11] mt-1">Email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
