import { useState } from "react";

export default function StepFour({ onNext, onBack }) {
  const [selectedBank, setSelectedBank] = useState("national");

  const banks = [
    { id: "national", name: "National Bank of Canada", lastFour: "2345" },
    {
      id: "imperial",
      name: "Canadian Imperial Bank of Commerce",
      lastFour: "6789",
    },
    { id: "scotia", name: "Scotia Bank", lastFour: "0098" },
  ];

  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">
        Select recipient bank destination
      </h2>

      {/* Recipient Info */}
      <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
        <div className="w-12 h-12 bg-orange-200 text-orange-700 font-bold rounded-full flex items-center justify-center text-xl">
          R
        </div>
        <div>
          <p className="text-lg font-medium text-gray-900">Raihan Fikri</p>
          <p className="text-sm text-gray-500">raihanfikri@gmail.com</p>
        </div>
      </div>

      {/* Bank Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-800">Bank account</h3>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Add new
        </button>
      </div>

      {/* Bank Cards */}
      <div className="space-y-4">
        {banks.map((bank) => (
          <div
            key={bank.id}
            className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedBank === bank.id
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedBank(bank.id)}
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                selectedBank === bank.id ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              {/* Bank icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            {/* Bank Info */}
            <div className="flex-grow">
              <p className="text-base font-medium text-gray-900">{bank.name}</p>
              <p className="text-sm text-gray-500">**** {bank.lastFour}</p>
            </div>
            {/* Checkmark */}
            {selectedBank === bank.id && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full text-gray-700 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 rounded-full text-white text-sm font-medium bg-black hover:bg-gray-800 transition"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
