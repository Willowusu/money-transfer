import React from "react";
import IndianImage from "../../assets/images/indian.jpg";
import WomanImage from "../../assets/images/woman.jpg";
import ManImage from "../../assets/images/man.jpg";

const testimonials = [
  {
    name: "Bashir Prudesh, London",
    text: `My experience with Continental Money  has been good - and cheap! Continental Money is a very good application, I use it to send money to my family. Even when I was in Ivory Coast on holiday I was using it to send money to myself.`,
    image: IndianImage,
  },
  {
    name: "Stella J, Toronto",
    text: `Continental Money is a mind blowing experience for me because of its great exchange rate, fast service and secure transferring process. Money was transferred within seconds and I even got extra $10 the first time using this app. Will share it with my friends here in Canada!`,
    image: WomanImage,
  },
  {
    name: "James Z, Paris",
    text: `Sending money has never been so easy! It’s cheap, with a good exchange rate and it’s so easy for my family to withdraw. It’s like being in Senegal! 😍`,
    image: ManImage,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-rose-50 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        See what others are saying
      </h2>
      <div className="grid gap-10 md:grid-cols-3 px-6 md:px-16">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4 text-yellow-400 text-xl">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {item.text}
            </p>
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="text-sm font-semibold text-gray-800">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
