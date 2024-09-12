"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BookPage = () => {
  const { id } = useParams(); // Get the book id from the dynamic route
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:9850/api/v1/books/${id}`)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => {
          console.error("Error fetching book details:", err);
        });
    }
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-2 ml-5 mr-5 bg-[#f5cac3] p-4 rounded shadow-md">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>{book.description}</p>
      <div>Rent Price: {book.rentPrice}</div>
      <div>Buy Price: {book.salesPrice}</div>
      {/* You can add more book details here */}
    </div>
  );
};

export default BookPage;
