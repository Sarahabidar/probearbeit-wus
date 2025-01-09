import { useEffect, useState } from "react";

/*export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("/api/quote");
      const data = await res.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    const res = await fetch("/api/quote");
    const data = await res.json();
    setQuote(data);
  };*/
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("/api/quote");
        setQuote(res.data);
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    };
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    try {
      const res = await axios.get("/api/quote");
      setQuote(res.data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1792px] flex items-center justify-between bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6 w-full">
          <img
            src="now.jpg"
            alt="Placeholder"
            className="w-1/2 h-auto rounded-lg shadow-md"
          />

          <div className="flex flex-col items-start justify-center w-1/2">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              {quote}
            </h4>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 focus:ring-2 focus:ring-pink-300"
              onClick={handleNewQuote}
            >
              Get New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
