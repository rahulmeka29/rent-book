import React, { useState } from "react";
import "../global.css";
//
const BookCard = ({ id, title, author, pageCount, publishedDate, price, thumbnailUrl, category, BuyAction }) => {
  //console.log(BookCard);
  //
  const addToCart = (e) => {
    const BookId = e.target.id;
    //setBooks([...Books, BookId]);
    BuyAction(BookId);
  }

  return (
    <div className="book-card" key={id}>
      {/* <h1>{Books.toString()}</h1> */}
      <img
        src={
          !thumbnailUrl
            ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHarry-Potter-Order-Phoenix-Illustrated%2Fdp%2F054579143X&psig=AOvVaw3Oqo1jjgTYi5MU4GRljjza&ust=1709455365125000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiBntCX1YQDFQAAAAAdAAAAABAE"
            : thumbnailUrl
        }
        alt={title}
      />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="text-center p-2"><span className="font-bold">Author:</span>{author}</p>
        <p className="text-center p-2"><span className="font-bold">Pages:</span>{pageCount}</p>
        <p className="text-center p-2"><span className="font-bold">Category:</span>{category}</p>
        <p className="text-center p-2"><span className="font-bold">Price: Rs.</span>{price}</p>
        <button className="w-full rounded p-2 text-white font-semibold bg-primary-color" id={id} type="Buy" onClick={(e) => { addToCart(e) }} >
          Rent
        </button>
      </div>
    </div>
  );
};

export default BookCard;
