import { useState } from "react";

const currencies = [
  { code: "USD", label: "United States Dollar", flag: "🇺🇸" },
  { code: "CAD", label: "Canadian Dollar", flag: "🇨🇦" },
  { code: "GBP", label: "Great Britain Pound", flag: "🇬🇧" },
  { code: "IDR", label: "Indonesian Rupiah", flag: "🇮🇩" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
];

export default function StepThree({ onNext, onBack }) {
  const [amount, setAmount] = useState("1.000");
  const [recipientAmount, setRecipientAmount] = useState("1364.83");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("IDR");
  const [tab, setTab] = useState("international");

  return (
    <div className="space-y-8 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">
        How much do you want to send?
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-2">
        <button
          className={`px-4 py-2 rounded-full font-medium transition ${
            tab === "international"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setTab("international")}
        >
          International
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium transition ${
            tab === "same"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setTab("same")}
        >
          Same Currency
        </button>
      </div>

      {/* Amount Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            You will send
          </label>
          <div className="flex items-center border rounded-lg px-4 py-3">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full outline-none text-lg"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="ml-2 bg-transparent text-gray-600"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Recipient will get
          </label>
          <div className="flex items-center border rounded-lg px-4 py-3">
            <input
              type="number"
              value={recipientAmount}
              onChange={(e) => setRecipientAmount(e.target.value)}
              className="w-full outline-none text-lg"
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="ml-2 bg-transparent text-gray-600"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Fee Info */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-sm text-left space-y-1">
        <p>
          <strong>Arto+ fees</strong>: $0.00
        </p>
        <p>
          <strong>You will pay</strong>: ${amount}
        </p>
        <p>
          <strong>Total amount will be converted</strong>
        </p>
        <p className="text-gray-500">Guaranteed rate (12h) ⓘ</p>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button onClick={onBack} className="text-sm text-gray-500 underline">
          Cancel
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
