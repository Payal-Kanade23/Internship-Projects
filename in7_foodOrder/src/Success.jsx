import React from "react";

function Success({ handleConfirmSuccess }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
      {/* Success Icon */}
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Order Placed!
      </h1>

      {/* Message */}
      <p className="mt-3 text-gray-600 leading-relaxed">
        Your order has been placed successfully.
        <br />
        It will be shipped to your address shortly.
      </p>

      {/* Button */}
      <button
        onClick={handleConfirmSuccess}
        className="mt-8 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition duration-300 hover:bg-green-700"
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default Success;