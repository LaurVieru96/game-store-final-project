import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import "./Support.css";
const Support = ({ user }) => {
  const [answers, setAnswers] = useState([
    {
      question:
        "I paid, but my transaction is not going through. What should I do ?",
      answer:
        "If your transaction is not going through after you've paid, you should first check if your payment method was charged. If it was charged and you still haven't received the product, contact customer support to resolve the issue.",
    },
    {
      question: "How to buy?",
      answer:
        "To buy a game online, you need to select the game you want to purchase, add it to your cart, and proceed to the checkout page. There, you will be prompted to enter your payment information and complete the transaction.",
    },
    {
      question: "How i pay ?",
      answer:
        "The payment options vary from store to store, but usually, you can pay with credit/debit cards, PayPal, or other online payment services.",
    },
    {
      question:
        "How can i contact the seller if I have a problem with my game ?",
      answer:
        "If you have a problem with your game, you should contact the seller's customer support team. Most online game stores have a dedicated customer support page with contact information.",
    },
    {
      question: "My order is processing. What does that mean ?",
      answer:
        "If your order is processing, it means that the seller is still verifying your payment information and preparing to send you the product. You should receive a notification when the product is ready for download.",
    },
    {
      question: "I purchased a wrong product. What can i do ?",
      answer:
        "If you purchased the wrong product, contact customer support immediately. Depending on the store's policy, they may be able to refund your purchase or help you exchange it for the correct product.",
    },
    {
      question: "What is SIMPLEX ?",
      answer:
        "SIMPLEX is a payment processing company that facilitates online transactions between buyers and sellers. It provides a secure and efficient way to transfer funds online.",
    },
  ]);

  const handleClick = (index) => {
    const newAnswers = [...answers];
    console.log("1" + newAnswers[0]);
    newAnswers[index].isOpen = !newAnswers[index].isOpen;
    console.log("2" + newAnswers[0]);
    setAnswers(newAnswers);
  };

  return (
    <div className="support-main-container">
      <NavigationBar user={user} />
      <div className="support-container">
        <h1>How can we help you ?</h1>
        <div className="faq-section">
          <div className="header-section-support">
            <h3>Popular topics</h3>
          </div>
          <div className="ul-section-support">
            <ul>
              {answers.map((item, index) => (
                <li key={index} onClick={() => handleClick(index)}>
                  {item.question}
                  {item.isOpen && <p>{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
