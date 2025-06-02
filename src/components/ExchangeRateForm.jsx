import { useState } from "react";

const currencies = [
    { code: "USD", flag: "🇺🇸" },
    { code: "EUR", flag: "🇪🇺" },
    { code: "GBP", flag: "🇬🇧" },
    { code: "GHS", flag: "🇬🇭" },
    { code: "NGN", flag: "🇳🇬" },
];

export default function ExchangeRateForm() {
    const [sendAmount, setSendAmount] = useState("1000");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl mx-auto border border-gray-200 space-y-6">
            {/* Rate Info */}
            <div className="text-sm text-gray-700">
                <span className="font-medium text-green-700">Rate guaranteed (8h):</span>{" "}
                1 {fromCurrency} = 0.8737 {toCurrency}
            </div>

            {/* Send Row */}
            <div>
                <label className="text-sm text-gray-500">You send exactly</label>
                <div className="flex items-center gap-3 mt-1">
                    <input
                        type="number"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        className="flex-grow min-w-0 px-3 py-2 border border-gray-300 rounded-md text-base sm:text-lg font-medium"
                    />
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-lg font-medium"
                    >
                        {currencies.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.flag} {c.code}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Sending over 20,000 {fromCurrency}? We’ll discount our fee.
                </p>
            </div>

            {/* Recipient Gets */}
            <div>
                <label className="text-sm text-gray-500">Recipient gets</label>
                <div className="flex items-center gap-3 mt-1">
                    <div className="flex-grow px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-2xl font-bold text-green-700">
                        865.12
                    </div>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-lg font-medium"
                    >
                        {currencies.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.flag} {c.code}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Payment Method */}
            <div className="flex items-center justify-between text-sm text-gray-700 border-t pt-4">
                <div>
                    <span className="text-gray-500">Paying with</span>{" "}
                    <span className="font-medium">Wire transfer</span>
                </div>
                <button className="text-green-600 font-medium hover:underline text-sm">Change</button>
            </div>

            {/* Fees Breakdown */}
            <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                    <span>Wire transfer fee</span>
                    <span>6.11 {fromCurrency}</span>
                </div>
                <div className="flex justify-between">
                    <span>Our fee</span>
                    <span>3.76 {fromCurrency}</span>
                </div>
                <div className="flex justify-between font-medium text-gray-800 border-t pt-2">
                    <span>Total included fees (0.99%)</span>
                    <span>9.87 {fromCurrency}</span>
                </div>
                <div className="text-green-600 font-medium pt-2">
                    You could save up to 30.80 {fromCurrency}
                </div>
            </div>

            {/* Delivery Info */}
            <div className="text-sm text-gray-500 pt-4 border-t">
                <span className="font-medium text-gray-700">Should arrive by:</span>{" "}
                Wednesday
            </div>
        </div>
    );
}
