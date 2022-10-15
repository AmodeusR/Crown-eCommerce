import { useState } from "react";
import { CheckoutCard, Button } from "../../components";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

import currencyFormatter from "../../utils/currencyFormatter";
import "./checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [ isPaymentModalOpen, setisPaymentModalOpen ] = useState(false);

  const FormattedtotalPrice = currencyFormatter.format(cartTotal);

  return (
    <div className="container checkout-body">
      <h1>Checkout</h1>
      <main className="payment-section">
        <div className="payment-section__products">
          {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
            <CheckoutCard
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
              quantity={quantity}
            />
          ))}{" "}
        </div>
        <div className="payment-section__confirmation">
          <Button title="Confirm Payment" className="payment-section__button" />
          <span className="payment-section__total-price">
            {FormattedtotalPrice}
          </span>
        </div>
        {/* <PaymentForm /> */}
      </main>
    </div>
  );
};

export default Checkout;
