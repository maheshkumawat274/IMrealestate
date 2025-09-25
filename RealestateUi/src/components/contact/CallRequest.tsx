const CallRequest = () => {
  return (
    <div id="contactus" className="relative flex justify-center items-center py-16 w-full px-4 bg-[url('/imgs/Beach-Residence-3.webp')] bg-cover bg-center">
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center space-y-4 max-w-4xl">
        <h1 className="text-3xl text-white font-bold">Would you like to speak to an expert?</h1>
        <p className="text-md sm:text-lg text-white">
          Whether you’re looking to buy, sell, or invest in Dubai real estate, our expert team is here to guide you every step of the way. Contact us today for personalized advice and exclusive property listings. Let’s turn your real estate goals into reality!
        </p>
        <button className="px-6 py-4 font-semibold text-white bg-[#1A3E72] hover:bg-yellow-600 cursor-pointer rounded-md">
          Request a consultation
        </button>
      </div>
    </div>
  )
}

export default CallRequest;
