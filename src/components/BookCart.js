import { useEffect, useState } from "react";
import CartBook from "./CartBook";
import Navbar from "./Navbar";

const Cart = () => {
    const [username, setUsername] = useState(null)
    const [items, setItems] = useState([]);
    const fetchCart = async (userId) => {
        const data = await fetch(
            `http://localhost:3004/api/cart/fetch?userId=${userId}`
        );
        const cart = await data.json();

        const Books = await Promise.all(cart.items.map(async (id) => {
            const Bk = await fetchBook(id)
            return Bk
        }))
        setItems(Books);
    }

    const fetchBook = async (bookId) => {
        const data = await fetch(`http://localhost:3001/api/books/book?bookId=${bookId}`)
        const book = await data.json();
        return book;
    }
    useEffect(() => {
        const user = localStorage.getItem('username')
        setUsername(user)
        if (username != undefined || "")
            fetchCart(username);
    }, [username])

    return (
        <>
            <div>
                <Navbar />
                <div className="w-10/12" style={{ width: '90%', margin: '0 auto' }}>
                    {items.map((book) => {
                        return (<CartBook book={book} />)
                    })}
                </div>
            </div>
        </>

    )
}
export default Cart;