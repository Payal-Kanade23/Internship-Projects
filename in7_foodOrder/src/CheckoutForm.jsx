import React, { useState, useRef } from "react";
import SuccessModel from "./SuccessModel";
import Success from "./Success";

function CheckoutForm({ checkModelEnd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postal: "",
  });

  const successModel = useRef();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkModelEnd();
    successModel.current.open();
  }

  const handleConfirmSuccess = () => {
    successModel.current.close();
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <SuccessModel ref={successModel}>
        <Success handleConfirmSuccess={handleConfirmSuccess} />
      </SuccessModel>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        {/* Header */}
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="mt-2 text-gray-600">
            Total Amount:
            <span className="font-semibold text-green-600 ml-2">
              ₹2,499
            </span>
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            name="postal"
            value={form.postal}
            onChange={handleChange}
            placeholder="Enter postal code"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>

        {/* Street */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Street
          </label>
          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            placeholder="Street address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>

        


        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={checkModelEnd}
            className="rounded-lg border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-green-600 px-6 py-2.5 font-semibold text-white transition hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;