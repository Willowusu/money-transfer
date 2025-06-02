import React from "react";

const MobileMoneySection = () => {
  return (
    <section className="bg-[#ffcab3] text-center py-16 px-0 md:px-4">
      <h2 className="text-3xl font-bold text-green-900 mb-2">
        Convenient, safe and fast.
      </h2>
      <p className="text-green-900 max-w-2xl mx-auto mb-12">
        Our easy-to-use smartphone app lets you send money to family and friends
        with just a few taps and a debit card. No more waiting in line, or
        wondering whether loved ones received their transfers.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-around gap-10 mb-16 mx-10">
        {/* Stack of contact cards */}
        <div className="space-y-[-16px]">
          <div className="bg-white rounded shadow p-4 flex items-center gap-3 w-72">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-semibold">
              E
            </div>
            <div>
              <p className="font-semibold text-left">Emile Doudou</p>
              <p className="text-sm text-gray-600 text-left">
                +233 54 580 7040 (MTN)
              </p>
            </div>
          </div>
          <div className="bg-white/70 rounded shadow p-4 w-72 h-10"></div>
          <div className="bg-white/50 rounded shadow p-4 w-72 h-10"></div>
        </div>

        {/* Chat bubble */}
        <div className="relative bg-white rounded-lg shadow-md p-4 w-80 text-left">
          <span className="block text-gray-800">
            Congrats! Kwame sent you 632 GHS. The funds are now in your account
          </span>
          {/* Notification dot */}
          <div className="absolute top-[-8px] right-[-8px] w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          {/* Bubble tail */}
          <div className="absolute bottom-[-4px] right-1 w-4 h-4 bg-white rotate-45  z-0"></div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="flex flex-col md:flex-row justify-around gap-10 text-green-900">
        <div className="w-96">
          <h3 className="text-xl font-bold mb-2">As easy as texting</h3>
          <p>
            Sending mobile money is as easy as sending a text. All you need is
            your friend’s name and mobile number.
          </p>
        </div>
        <div className="w-96">
          <h3 className="text-xl font-bold mb-2">Fast transfers, no hassle</h3>
          <p>
            We immediately deposit funds from your debit card into your friend’s
            mobile money wallet.
          </p>
        </div>
      </div>

      <button className="mt-10 bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800">
        LEARN ABOUT MOBILE MONEY
      </button>
    </section>
  );
};

export default MobileMoneySection;
