import { startPurchase } from "@/context/cotract/methods";
import React, { useState } from "react";

function Timer() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const value = parseInt(input);
    startPurchase(value, setLoading);
  };
  const handleChange = (e:any) => {
    setInput(e.target.value)
  }
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="number"
          className="w-full border-b bg-transparent border-gray-600 text-gray-800 pb-1 font-raji focus:outline-none"
          placeholder="Enter timer limit"
          onChange={handleChange}
          value={input}
        />
        <button className="py-2 px-8 font-medium border border-main w-full mt-5 text-gray-500 rounded-md">
          {loading ? "Starting..." : "Start Timer"}
        </button>
      </form>
    </div>
  );
}

export default Timer;
