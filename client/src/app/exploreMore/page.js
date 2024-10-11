"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";

const Page = () => {
  const [books, setBooks] = useState([]);
  const [statusbooks, setStatusBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9850/api/v1/books/")
      .then((res) => {
        const topbooks = res.data.filter((book) => book.nbRead > 50);
        setBooks(topbooks);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:9850/api/v1/books/")
      .then((res) => {
        const comingsoon = res.data.filter((book) => (book.status = "Pending"));
        setStatusBooks(comingsoon);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  const [footer, setFooter] = useState(false);

  return (
    <div className="bg-[#feede5] py-2">
      <NavBar setFooter={setFooter} footer={footer} />
      <div className="mt-14 ml-2 w-60 h-30 shadow-xl">
        <div className="bg-[#caf0f8] text-2xl text-[#290d11] font-bold border-4 border-[#290d11]">
          Top Books
        </div>
      </div>
      <div className="mt-2 ml-5 mr-5 bg-[#f5cac3] p-4 rounded shadow-md">
        <BookCard books={books} setBooks={setBooks} />
      </div>
      <div className="mt-14 ml-5 mr-5 h-30 shadow-xl flex bg-[#f5cac3] p-4 rounded">
        <div className=" w-1/2">
          <div className="bg-[#caf0f8] border-4 w-60 border-[#290d11] font-semibold text-xl text-[#290d11]">
            Top Authors
          </div>
          <div>
            {books.map((book) => {
              return <div key={book.id}>{book.author.authorName}</div>;
            })}
          </div>
        </div>
        <div className="w-1/2">
          <div className="bg-[#caf0f8] border-4 w-60 border-[#290d11] font-semibold text-xl text-[#290d11]">
            Their Top books
          </div>
          <div>
            {books.map((book) => {
              return <div key={book.id}>{book.title}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="mt-14 ml-5 mr-5 h-30 shadow-xl flex flex-col bg-[#f5cac3] p-4 rounded">
        <div className="bg-[#caf0f8] border-4 w-60 border-[#290d11] font-semibold text-xl text-[#290d11]">
          Coming Soon
        </div>
        {statusbooks ? (
          <div>
            {statusbooks.map((statusbook) => {
              return <div key={statusbook.id}>{statusbook.title}</div>;
            })}
          </div>
        ) : (
          <div>stay tuned !</div>
        )}
      </div>
      {footer && <Footer />}
    </div>
  );
};

export default Page;
