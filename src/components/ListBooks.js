import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListBooks = () => {
  const [isCartExists, setIsCartExists] = useState(false);
  const [Books, setBooks] = useState([]);
  const [search, setSearch] = useState("ramayan");

  const handleSearch = () => {
    // Add your search functionality here
  };
  const navigate = useNavigate()
  const [buyBooks, setBuyBooks] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchCart = async () => {
    try {
      let userId = localStorage.getItem('username');
      const response = await fetch(`http://localhost:3004/api/cart/fetch?userId=${userId}`)
      if (!response.ok) {
        //throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parsing the JSON response
      setIsCartExists(true)
      return data; // Returning the data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrowing the error for the caller to handle
    }
  }

  const fetchdata = async (title = "") => {
    let url = `http://localhost:3001/api/books`
    if (title)
      url = `http://localhost:3001/api/books?title=${title}`
    const data = await fetch(url);
    const dataJSON = await data.json();
    setBooks(dataJSON);
  };

  function removeDuplicates(arr) {
    return arr.filter((item,
      index) => arr.indexOf(item) === index);
  }

  const handleBuyClick = (BookId) => {
    const newBooks = [...buyBooks, BookId];
    console.log(newBooks)
    setBuyBooks(removeDuplicates(newBooks));
  }
  const proceedToCart = async () => {
    const response = await fetchCart();
    //console.log(response);
    if (response !== undefined) {
      updateCart();
    } else {
      createCart();
    }
    navigate('/cart');
  }
  const createCart = async () => {
    const data = {
      "userId": localStorage.getItem("username"),
      "items": buyBooks
    }

    const setData = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    try {
      const response = await fetch('http://localhost:3004/api/cart/create', setData)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parsing the JSON response
      return data; // Returning the data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrowing the error for the caller to handle
    }
  }

  const updateCart = async (CartId) => {
    const data = {
      "userId": localStorage.getItem("username"),
      "items": buyBooks
    }
    const setData = {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    try {
      const response = await fetch('http://localhost:3004/api/cart/update', setData)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parsing the JSON response
      return data; // Returning the data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrowing the error for the caller to handle
    }
  }


  return (
    <div>
      <div className="flex justify-center m-4 p-4">
        <input className="border rounded w-[400px] p-4"
          name="book-search"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
            if (e.target.value.length > 5) fetchdata(search);
            if (e.target.value.length < 4) fetchdata();
          }}
        />
      </div>

      {(buyBooks.length === 0 ? "" : <div className="flex justify-end m-4">
        <button className="w-[200px] text-sm rounded p-2 bg-primary-color text-white font-semibold" onClick={proceedToCart}>
          Proceed To Cart
        </button>
      </div>)

      }
      <div className="books-container py-3">
        {
          //console.log(typeof(Books))
          //console.log(Books)
          Books.map((b) => {
            var data = {
              id: b.id,
              title: b.title,
              author: b.authors[0],
              pageCount: b.pageCount,
              publishedDate: b.publishedDate.$date,
              thumbnailUrl: b.thumbnailUrl,
              category: b.categories[0],
              price: b.price
            };
            return <BookCard {...data} BuyAction={handleBuyClick} />;
          })
        }
      </div>
    </div >
  );
}

export default ListBooks;
