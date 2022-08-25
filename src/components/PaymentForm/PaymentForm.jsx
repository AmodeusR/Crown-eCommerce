import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";

import "./payment-form.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: 10000 })
    }).then(response => response.json());

    const { paymentIntent: { client_secret } } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Amodeus R."
        }
      }
    });

    if (paymentResult.error) {
      alert(paymentResult.alert);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment sucessful");
    }
  }

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={(e) => handlePayment(e)}>
        <h2 className="payment-form__title">Card Payment</h2>
      <CardElement />
      <Button title="Confirm payment" className="inverted" />
      </form>
    </div>
  );
};

export default PaymentForm;
