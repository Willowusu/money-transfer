// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-custom-blue-100 py-20 md:px-10">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Send more, spend less.
          </h1>
          <p className="text-lg text-white mb-8">
            Send money from the UK, EU, US, UAE, Canada and Australia to Africa,
            Asia, the Caribbean and Latin America at a great rate. With fast
            transfers to mobile money wallets on popular networks, you can send
            money from your smartphone anytime, anywhere.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#" className="block" aria-label="Download on Google Play">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a
              href="#"
              className="block"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://placehold.co/300x600?text=Phone+Mockup&font=roboto"
            alt="Phone mockup"
            className="rounded-xl shadow-lg w-[250px] md:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
