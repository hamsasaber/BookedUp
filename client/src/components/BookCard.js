import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BookCard = ({ books }) => {
  const router = useRouter();

  const handleBookDetails = (bookId) => {
    router.push(`/book/${bookId}`); // Navigates to /book/[id] page
  };

  return (
    <div className="flex flex-wrap justify-evenly">
      {books && books.length > 0 ? (
        books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookDetails(book.id)}
            className="mb-4 p-4 bg-white rounded shadow w-56 h-80 cursor-pointer"
          >
            <Image
              src={
                book.coverImage
                  ? "http://localhost:9850/" + book.coverImage
                  : "/nocoverbook.png"
              }
              width={144}
              height={144}
              alt={book.title}
              className="rounded"
            />
            <div className="font-bold text-lg">{book.title}</div>
            <div className="font-semibold text-sm">
              Rent Now for: {book.rentPrice}
            </div>
            <div className="font-semibold text-sm">
              Buy Now for: {book.salesPrice}
            </div>
            {book.genre}
          </div>
        ))
      ) : (
        <div>No Books available</div>
      )}
    </div>
  );
};

export default BookCard;
