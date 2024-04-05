import { useEffect, useState } from "react";
import CartBook from "./CartBook";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null)
    const [items, setItems] = useState([]);
    //const [total, setTotal] = useState(0);
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

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const total = items.map((book) => {
            return book.price;
        })
        console.log('total', total)

        const initialValue = 0;
        let sumWithInitial = total.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );
        sumWithInitial = parseInt(sumWithInitial);
        sumWithInitial = sumWithInitial * 100;

        const result = await fetch('http://localhost:5001/api/payment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "amount": sumWithInitial
            })
        })
        const data = await result.json();

        const options = {
            "key": "rzp_test_WABtCzajHnqhc4", // Enter the Key ID generated from the Dashboard
            "amount": data.amount,
            "currency": "INR",
            "name": localStorage.getItem('username'),
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": data.id,
            handler: async function (response) {
                const data = {
                    orderCreationId: response.order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await fetch("http://localhost:5001/api/payment/success", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const success = await result.json();
                navigate('/success', { data: success });

            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <>
            <div>
                <Navbar />
                <div className="w-10/12" style={{ width: '90%', margin: '0 auto' }}>
                    {items.map((book) => {
                        return (<CartBook book={book} />)
                    })}
                </div>
                <div className="mx-auto text-center mt-[50px]">
                    <Button variant="contained" onClick={displayRazorpay}>Payment</Button>
                </div>
            </div>
        </>

    )
}
export default Cart;