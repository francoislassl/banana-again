import React from 'react';

const BananaLandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Header Section */}
      <header className="bg-yellow-300 p-5 shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to Banana Land</h1>
        <p className="text-lg text-center text-gray-600">Discover the benefits and joy of bananas!</p>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-green-600 mb-5">Why Bananas?</h2>
          <p className="text-gray-700 mb-5">Bananas are packed with essential nutrients and are a great source of energy!</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Learn More</button>
        </section>

        {/* Image Section */}
        <div className="mb-10">
          <img src="https://example.com/banana-image.jpg" alt="Fresh Bananas" className="rounded-lg shadow-lg max-w-xs" />
        </div>

        {/* Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-yellow-700">Rich in Nutrients</h3>
            <p className="text-gray-600">Bananas are rich in potassium and vitamins that are essential for your health.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-yellow-700">Great for Energy</h3>
            <p className="text-gray-600">They provide a quick source of energy, perfect for workouts and active lifestyles.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-yellow-700">Easy to Digest</h3>
            <p className="text-gray-600">Bananas are gentle on the stomach and easy to digest, making them a perfect snack!</p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-yellow-300 p-5 mt-10">
        <p className="text-center text-gray-800">© 2023 Banana Land. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BananaLandingPage;