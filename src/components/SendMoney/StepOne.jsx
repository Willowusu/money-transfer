// src/components/send-money/StepOne.jsx

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const options = [
  {
    id: "new",
    title: "New Recipient",
    description: "Send money to people whose contacts you don’t have.",
    icon: "🧑‍💼",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Send money to one of the contact lists I have.",
    icon: "📇",
  },
  {
    id: "self",
    title: "My Self",
    description: "Withdraw the balance of money to my local bank.",
    icon: "🏦",
  },
];

export default function StepOne({ onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full max-w-3xl mx-auto text-center space-y-8">
      <h2 className="text-2xl font-semibold">
        Where would you send the money?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option) => {
          const isSelected = selected === option.id;

          return (
            <div
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`relative cursor-pointer border rounded-xl p-6 transition-all
                ${
                  isSelected
                    ? "border-green-500 ring-2 ring-green-400"
                    : "border-gray-200 hover:border-gray-400"
                }
              `}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="font-medium text-lg">{option.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{option.description}</p>

              {isSelected && (
                <CheckCircle2 className="absolute top-2 right-2 text-green-500 w-5 h-5" />
              )}
            </div>
          );
        })}
      </div>

      <button
        disabled={!selected}
        onClick={onNext}
        className={`mt-6 px-6 py-3 rounded-full text-white text-sm font-medium transition
          ${
            selected
              ? "bg-black hover:bg-gray-800"
              : "bg-gray-300 cursor-not-allowed"
          }
        `}
      >
        Continue →
      </button>
    </div>
  );
}
