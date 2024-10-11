"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Genre from "@/components/filters/Genre";
import Price from "@/components/filters/Price";
import Rating from "@/components/filters/Rating";
import axios from "axios";
import BookCard from "@/components/BookCard";
const Page = () => {
  const [footer, setFooter] = useState(false);
  const [filter, setFilter] = useState(false);
  const [genre, setGenre] = useState(false);
  const [price, setPrice] = useState(false);
  const [rating, setRating] = useState(false);
  const [newest, setNewest] = useState(false);
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [type, setType] = useState("");

  let filteredBooks = [];
  const handleFilter = (name) => {
    if ((name = "genre")) {
      setGenre((genre) => !genre);
      filteredBooks = books.filter((book) => book.genre === type);
      setFiltered(filteredBooks);
    } else if ((name = "price")) {
      setPrice((price) => !price);
      filteredBooks = books.sort((book)=>book.salesPrice);
      setFiltered(filteredBooks);
    } else if ((name = "rating")) {
      setRating((rating) => !rating);
    } else if ((name = "newest")) {
      setNewest((newest) => !newest);
    }
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9850/api/v1/books/")
  //     .then((res) => {
  //       setFiltered(filteredBooks);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching books:", err);
  //     });
  // }, [type]);

  useEffect(() => {
    axios
      .get("http://localhost:9850/api/v1/books/")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  return (
    <div className="bg-[#feede5] py-2 ">
      <NavBar setFooter={setFooter} footer={footer} />
      <div>
        <div>
          <button
            onClick={() => {
              setFilter((filter) => !filter);
            }}
            className="bg-white hover:bg-gray-100 text-[#290d11] font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow"
          >
            {filter ? <div>Undo Filter</div> : <div>Filter</div>}
          </button>
        </div>
        {filter && (
          <div className=" w-fit ml-2 p-2  shadow-sm flex flex-col">
            <button
              className="bg-white hover:bg-gray-100 rounded"
              name="genre"
              onClick={() => {
                handleFilter();
              }}
            >
              <Genre genre={genre} type={type} setType={setType} />
            </button>
            <button
              className="bg-white hover:bg-gray-100 "
              name="price"
              onClick={() => {
                handleFilter();
              }}
            >
              <Price price={price} />
            </button>
            <button
              className="bg-white hover:bg-gray-100"
              name="rating"
              onClick={() => {
                handleFilter();
              }}
            >
              <Rating rating={rating} />
            </button>
            <button
              className="bg-white hover:bg-gray-100 rounded"
              name="newest"
              onClick={() => {
                handleFilter();
              }}
            >
              Newest
            </button>
          </div>
        )}

        {type && filter && (
          <div>
            <BookCard books={filtered} />
          </div>
        )}
        {newest && filter && (
          <div>
            {" "}
            <BookCard books={filtered} />
          </div>
        )}
        {!filter && (
          <div>
            <BookCard books={books} />
          </div>
        )}
      </div>
      {footer && <Footer />}
    </div>
  );
};

export default Page;
