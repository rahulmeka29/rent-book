//import logo from './logo.svg';
//import Header from "./components/Header";
//import TextForm from "./components/TextForm";
//import Menu from "./components/Menu";
//import Signup from "./components/Signup";
//import Card from './components/Card';
//import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
//import { app } from "./firebase";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useRoutes } from "react-router-dom";
import Signup from "./components/Signup";
import Cart from "./components/BookCart";
import "./assets/main.css";
import Service from "./components/Service";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
//import React, { useState } from "react";
//import Carousel from "./components/Carousel";
//import BookCard from "./components/BookCard";
//const auth = getAuth(app);
function App() {
  //const Payment = () => {
  //  const [paymentSuccess, setPaymentSuccess] = useState(false);
  //
  //  const handlePaymentSuccess = () => {
  //    setPaymentSuccess(true);
  //  };
  //
  //  return (
  //    <div>
  //      {paymentSuccess ? (
  //        <div>
  //          <h2>Payment Successful!</h2>
  //          <p>Thank you for your payment.</p>
  //        </div>
  //      ) : (
  //        <Payment totalAmount={50} onPaymentSuccess={handlePaymentSuccess} />
  //      )}
  //    </div>
  //  );
  //};

  //   const SignupUser = () => {
  //     createUserWithEmailAndPassword(
  //       auth,
  //       "sohamhi06@gmail.com",
  //       "soham@0622"
  //     ).then((value) => console.log(value));
  //   };
  // return (
  //   <div className="app">
  //     <Navbar />
  //     <ListBooks />
  //   </div>
  // );
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "cart", element: <Cart /> },
    { path: "Service", element: <Service /> },
    { path: "Aboutus", element: <Aboutus /> },
    { path: "ContactUs", element: <ContactUs /> },
    { path: "Footer", element: <Footer /> },
  ]);

  return routes;
}
export default App;
