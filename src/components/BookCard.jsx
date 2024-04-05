//import React, { useState } from "react";
import "../global.css";
import { Button } from "@mui/material";

//
const BookCard = ({
  id,
  title,
  author,
  pageCount,
  publishedDate,
  price,
  thumbnailUrl,
  category,
  BuyAction,
}) => {
  //console.log(BookCard);
  //
  const addToCart = (e) => {
    const BookId = e.target.id;
    //setBooks([...Books, BookId]);
    BuyAction(BookId);
  };

  return (
    <div className="book-card" key={id}>
      {/* <h1>{Books.toString()}</h1> */}
      <img
        src={
          !thumbnailUrl
            ? "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
            : thumbnailUrl
        }
        alt={title}
      />
      <div className="card-content">
        <p className="font-bold">
          <span className="font-bold"></span>
          {title}
        </p>
        <p className="text-center p-2">
          <span className="font-bold">Author:</span>
          {author}
        </p>
        <p className="text-center p-2">
          <span className="font-bold">Pages:</span>
          {pageCount}
        </p>
        <p className="text-center p-2">
          <span className="font-bold">Category:</span>
          {category}
        </p>
        <p className="text-center p-2">
          <span className="font-bold">Price:</span>
          {price}
        </p>
        <Button
          className="w-full rounded p-2 text-white font-semibold bg-primary-color"
          id={id}
          type="Button"
          onClick={(e) => {
            addToCart(e);
          }}
        >
          Rent
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
