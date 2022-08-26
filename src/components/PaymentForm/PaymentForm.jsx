import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";

import "./payment-form.scss";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: cartTotal * 100 })
    }).then(response => response.json());

    const { paymentIntent: { client_secret } } = response;

    setIsProcessingPayment(true);
    
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest"
        }
      }
    });
    
    if (paymentResult.error) {
      alert(paymentResult.alert);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment sucessful");
    }
    setIsProcessingPayment(false);
  }

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={(e) => handlePayment(e)}>
        <h2 className="payment-form__title">Card Payment</h2>
      <CardElement />
      <Button title="Confirm payment" className="inverted" isLoading={isProcessingPayment} />
      </form>
    </div>
  );
};

export default PaymentForm;
