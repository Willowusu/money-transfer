import { useState } from "react";

export default function StepSix({ onBack, onSubmit }) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Review details of your transfer
      </h1>

      {/* Recipient Summary */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-orange-200 text-orange-700 font-bold rounded-full flex items-center justify-center text-xl">
          R
        </div>
        <div className="flex-grow">
          <p className="text-lg font-medium text-gray-900">Raihan Fikri</p>
          <p className="text-sm text-gray-500">raihanfikri@gmail.com</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900">$1,361.61 CAD</p>
          <p className="text-sm text-gray-500">$1,000 USD</p>
        </div>
      </div>

      {/* Transfer Details */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800 flex items-center">
            Transfer details
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            Edit
          </button>
        </div>

        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>You send</span>
            <span className="font-medium">$1,000 USD</span>
          </div>
          <div className="flex justify-between">
            <span>Arto+ fees</span>
            <span>$5 USD</span>
          </div>
          <div className="flex justify-between">
            <span>Payment method fees</span>
            <span>$5 USD</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-200">
            <span>You will pay</span>
            <span>$1,010 USD</span>
          </div>
          <div className="bg-green-50 p-3 rounded-lg flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">Raihan will get</span>
              <span className="text-xs text-gray-500">
                Conversion rate: CAD 1 = 11,205.44 IDR
              </span>
            </div>
            <span className="font-semibold text-gray-900">$1,361.61 CAD</span>
          </div>
        </div>
      </div>

      {/* Recipient Details */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800">
            Recipient details
          </h2>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            Edit
          </button>
        </div>

        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Email</span>
            <span className="text-gray-900">raihanfikri@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span>Account Holder</span>
            <span className="text-gray-900">Raihan Fikri</span>
          </div>
          <div className="flex justify-between">
            <span>Routing Number</span>
            <span className="text-gray-900">**** 0932</span>
          </div>
          <div className="flex justify-between">
            <span>Bank Name</span>
            <span className="text-gray-900">
              CENAIDJA - Bank Central Asia (BCA)
            </span>
          </div>
          <div className="flex justify-between">
            <span>Transfer Schedule</span>
            <span className="text-gray-900">28 Sept 2023, repeats weekly</span>
          </div>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center mb-8">
        <input
          type="checkbox"
          id="terms-checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 rounded"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
        />
        <label htmlFor="terms-checkbox" className="ml-2 text-gray-700 text-sm">
          I accept the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          className="text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className={`px-6 py-3 rounded-full flex items-center space-x-2 font-medium transition duration-200 ${
            agreedToTerms
              ? "bg-gray-800 text-white hover:bg-gray-900"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={onSubmit}
          disabled={!agreedToTerms}
        >
          <span>Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
