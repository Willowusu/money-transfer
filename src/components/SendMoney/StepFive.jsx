import { useState } from "react";

export default function StepFive({ onNext, onBack }) {
  const [selectedType, setSelectedType] = useState("arto-account");

  const transferTypes = [
    {
      id: "arto-account",
      category: "Arto+ account transfer",
      title: "Arto+ account transfer",
      description:
        "Use money in your Arto account to pay for your transfer instantly. Should arrive in seconds.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 4v4m0 4v2m-6 0h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
      fees: "$0 CAD",
    },
    {
      id: "debit-card",
      category: "Fast and easy transfer",
      title: "Debit card",
      description:
        "Send from your Visa or Master card. Should arrive in seconds.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
      ),
      fees: "$0 CAD",
    },
    {
      id: "credit-card",
      category: "Fast and easy transfer",
      title: "Credit card",
      description:
        "Send from your Visa or Master card. Should arrive in seconds.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
      ),
      fees: "$0 CAD",
    },
    {
      id: "bank-transfer",
      category: "Low cost transfer",
      title: "Transfer from your bank account",
      description:
        "Transfer the money using your bank account. Should arrive in seconds.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
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
      ),
      fees: "$0 CAD",
    },
  ];

  const groupedTransferTypes = transferTypes.reduce((acc, type) => {
    (acc[type.category] = acc[type.category] || []).push(type);
    return acc;
  }, {});

  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">
        Choose your transfer type
      </h2>

      {Object.entries(groupedTransferTypes).map(([category, types]) => (
        <div key={category} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium text-gray-800 flex items-center">
              {category}
              <span className="ml-2 text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </h3>
            <span className="text-sm text-gray-500">
              Total Fees: {types[0].fees}
            </span>
          </div>

          <div className="space-y-3">
            {types.map((type) => (
              <div
                key={type.id}
                className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedType === type.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.icon}
                <div className="flex-grow">
                  <p className="text-base font-medium text-gray-900">
                    {type.title}
                  </p>
                  <p className="text-sm text-gray-500">{type.description}</p>
                </div>
                {selectedType === type.id && (
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
        </div>
      ))}

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
