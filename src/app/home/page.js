"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [footer, setFooter] = useState(false);
  const router = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.31:9850/api/v1/books/").then((res) => {
      setBooks(res.data);
    });
  }, []);

  console.log(books);
  return (
    <div className="bg-[#feede5] h-screen py-2">
      <NavBar setFooter={setFooter} footer={footer} />
      <div>
        <div className="flex items-start bg-[#f4acb7] rounded flex-col shadow-lg m-2 w-1/2">
          <div className="text-2xl font-bold text-[#290d11] p-2">Booked Up</div>
          <div className="space-y-3 text-white p-2">
            <p className="leading-relaxed">
              BookedUp is your go-to platform for connecting authors and readers
              in a vibrant digital marketplace.
            </p>
            <p className="leading-relaxed">
              Our mission is to empower authors to share their stories and ideas
              with the world, while providing readers with a diverse selection
              of books to buy or rent.
            </p>
            <p className="leading-relaxed">
              Whether you're an author looking to publish your latest work or a
              reader searching for your next great read, BookedUp offers a
              seamless, user-friendly experience tailored to your needs.
            </p>
            <p className="leading-relaxed">
              Dive into a world of stories and let your reading journey begin!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>Trending Right Now</div>
        {books.length > 0 ? (
          books.map((book) => <div key={book.id}>{book.title}</div>)
        ) : (
          <div>No books available.</div>
        )}
      </div>
      {footer && (
        <div className="fixed bottom-0 bg-[#BDE0FE] rounded p-4 shadow-lg w-screen flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-xl font-semibold text-gray-900 mb-4">Info</div>
            <div className="space-y-3">
              <p className="leading-relaxed">
                Welcome to{" "}
                <span className="font-bold text-red-600">BookedUp</span>! Our
                web application allows authors to publish their books,
              </p>
              <p className="leading-relaxed">
                and readers to easily browse, purchase, or rent them.
              </p>
              <p className="leading-relaxed">
                Authors can upload their books with cover images and
                descriptions,
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
      )}
    </div>
  );
};

export default Page;
