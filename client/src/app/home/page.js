"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";

const Page = () => {
  const [footer, setFooter] = useState(false);
  const router = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9850/api/v1/books/")
      .then((res) => {
        const trendingBooks = res.data.filter((book) => book.nbRead > 5);
        setBooks(trendingBooks);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  return (
    <div className="bg-[#feede5] py-2">
      <NavBar setFooter={setFooter} footer={footer} />
      <div>
        <div className="flex items-start bg-[#f4acb7] rounded flex-col shadow-lg m-2 w-1/2">
          <div className="text-2xl font-bold text-[#290d11] p-2 border-4 border-white">
            Booked Up
          </div>
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

      <div className="mt-20 ml-2 w-60 h-30 shadow-xl">
        <div className="bg-[#caf0f8] text-2xl text-[#290d11] font-bold border-4 border-[#290d11]">
          Trending Right Now
        </div>
      </div>
      <div className="mt-2 ml-5 mr-5 bg-[#f5cac3] p-4 rounded shadow-md">
        <BookCard books={books} setBooks={setBooks} />
        <div className="text-lg text-[#290d11] font-semibold">
          {" "}
          Cant Find what you're looking for? <br />{" "}
          <button
            className="flex flex-row gap-2 text-[#290d11]"
            onClick={() => {
              router.push("/exploreMore");
            }}
          >
            Explore more <FaArrowRight color="#290d11" />
          </button>
        </div>
      </div>

      {footer && <Footer />}
    </div>
  );
};

export default Page;
