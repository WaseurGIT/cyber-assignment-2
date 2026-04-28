const Banner = () => {
  return (
    <div className="px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Secure, reliable, and innovative cyber security solutions
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-3">Security</h3>
            <p className="text-gray-400">
              Enterprise-grade security protocols to keep your data safe and
              protected from threats.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Performance</h3>
            <p className="text-gray-400">
              Lightning-fast performance with optimized infrastructure and
              minimal latency.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-white mb-3">Global Reach</h3>
            <p className="text-gray-400">
              Available worldwide with support in multiple regions and
              languages.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of organizations protecting their digital assets with
            our platform.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
