// src/components/RatesSection.jsx
import ExchangeRateForm from "./ExchangeRateForm";
const supportedCountries = [
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "India", flag: "🇮🇳" },
    { name: "Bangladesh", flag: "🇧🇩" },
    { name: "Haiti", flag: "🇭🇹" },
    { name: "Philippines", flag: "🇵🇭" },
    { name: "Pakistan", flag: "🇵🇰" },
];

export default function RatesSection() {
    return (
        <section className="bg-custom-blue-400 py-20 md:px-10">
            <div className="container mx-auto px-4">
                {/* Centered Text */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get great rates every time.
                    </h2>
                    <p className="text-white text-lg">
                        Taptap Send is currently available to these countries. More countries coming soon.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col md:flex-row gap-10 items-start md:items-stretch">
                    {/* Left: Countries */}
                    <div className="w-full md:w-1/2 space-y-4">
                        {supportedCountries.map((country, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 bg-custom-blue-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <span className="text-2xl">{country.flag}</span>
                                <span className="text-gray-800 font-medium">{country.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: Mock Exchange Form */}
                    <div className="w-full md:w-1/2">
                        <ExchangeRateForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
