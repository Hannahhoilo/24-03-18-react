import { useState } from "react";


function RandomQuote() {
  const [oneQuote, setOneQuote] = useState('');
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
  ];

  function generateRandomNum() {
    const randomNum = Math.floor(Math.random() * 6);
    setOneQuote(quotes[randomNum])
  }

  return (
    <>
      <h2>Here is the quote: {oneQuote}</h2>
      <button onClick={generateRandomNum}>Click here!</button>
    </>
  );
}

export default RandomQuote;
