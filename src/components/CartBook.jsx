import "../components/CartBook.css";

const CartBook = (props) => {
  const { thumbnailUrl, title, shortDescription, price } = props.book;
  return (
    <div className="cart-book">
      <div className="cart-book-image">
        <img
          src={thumbnailUrl}
          alt="Product image"
          className="w-[200px] h-[200px]"
        />
      </div>
      <div className="cart-book-title item">
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-gray-600">{shortDescription}</span>
      </div>
      <div className="cart-book-price">
        <span className="ml-auto font-bold">Rs.{price}</span>
      </div>
    </div>
  );
};
export default CartBook;
