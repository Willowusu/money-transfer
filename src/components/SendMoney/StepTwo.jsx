// src/components/send-money/StepTwo.jsx

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Raihan Fikri",
    email: "raihanfikri@gmail.com",
    avatar: "R",
    arto: false,
  },
  {
    id: 2,
    name: "Christine Valkri",
    email: "christine.valkri@gmail.com",
    avatar: "/images/avatar1.jpg",
    arto: true,
  },
  {
    id: 3,
    name: "Fajar Nugra",
    email: "fajarnughra11@gmail.com",
    avatar: "/images/avatar2.jpg",
    arto: true,
  },
  {
    id: 4,
    name: "Ahmad Khafi",
    email: "ahmadkhaf@gmail.com",
    avatar: "/images/avatar3.jpg",
    arto: true,
  },
  {
    id: 5,
    name: "Veronica Fils",
    email: "veronica21@gmail.com",
    avatar: "V",
    arto: false,
  },
  {
    id: 6,
    name: "Andrew",
    email: "andrew@gmail.com",
    avatar: "/images/avatar4.jpg",
    arto: true,
  },
  {
    id: 7,
    name: "Alora Graf",
    email: "alora.graf@gmail.com",
    avatar: "A",
    arto: false,
  },
  {
    id: 8,
    name: "Vioni Laila",
    email: "vionilaila@gmail.com",
    avatar: "/images/avatar5.jpg",
    arto: true,
  },
  {
    id: 9,
    name: "Sammy Sebastian",
    email: "Smammy.seb@gmail.com",
    avatar: "/images/avatar6.jpg",
    arto: false,
  },
  {
    id: 10,
    name: "Cindy Puspita",
    email: "christine.valkri@gmail.com",
    avatar: "/images/avatar7.jpg",
    arto: true,
  },
  {
    id: 11,
    name: "Jenny Fairly",
    email: "jfenny98@gmail.com",
    avatar: "J",
    arto: false,
  },
  {
    id: 12,
    name: "Sofia Jellery",
    email: "sofia.jell209@gmail.com",
    avatar: "S",
    arto: false,
  },
];

export default function StepTwo({ onNext, onBack }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="max-w-5xl mx-auto text-center space-y-6">
      <h2 className="text-2xl font-semibold">
        Who do you want to send money to?
      </h2>

      {/* Search (placeholder for now) */}
      <input
        type="text"
        placeholder="Search"
        className="w-full md:w-96 mx-auto px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
      />

      {/* Contact Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left mt-6">
        {contacts.map((c) => {
          const isSelected = selectedId === c.id;
          const isImage =
            typeof c.avatar === "string" && c.avatar.includes("/");

          return (
            <div
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`relative p-4 border rounded-lg cursor-pointer transition
                ${
                  isSelected
                    ? "border-green-500 ring-2 ring-green-400"
                    : "border-gray-200 hover:border-gray-400"
                }
              `}
            >
              {/* Avatar */}
              {isImage ? (
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-10 h-10 rounded-full object-cover mb-2"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full mb-2 text-white font-bold">
                  {c.avatar}
                </div>
              )}

              <div>
                <h3 className="font-medium">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.email}</p>
                {c.arto && (
                  <span className="text-xs text-blue-500 font-medium"></span>
                )}
              </div>

              {/* Check icon */}
              {isSelected && (
                <CheckCircle2 className="absolute top-2 right-2 text-green-500 w-5 h-5" />
              )}
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-8 px-4 md:px-0">
        <button onClick={onBack} className="text-sm text-gray-500 underline">
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedId}
          className={`px-6 py-3 rounded-full text-white text-sm font-medium transition
            ${
              selectedId
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
