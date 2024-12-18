import React from 'react';
import { Shield, Search, AlertTriangle, BarChart3, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Shield className="w-20 h-20 mx-auto mb-8 text-red-600" />
          <h1 className="text-6xl font-bold mb-6">Crime.si</h1>
          <p className="text-xl mb-8 text-gray-300">
            Advanced crime analytics and prevention platform for a safer tomorrow
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <Search className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-3">Real-time Analysis</h3>
              <p className="text-gray-400">Advanced algorithms to detect and prevent criminal activities in real-time</p>
            </div>
            <div className="text-center p-6">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-3">Threat Detection</h3>
              <p className="text-gray-400">Early warning systems to identify potential security threats</p>
            </div>
            <div className="text-center p-6">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-gray-400">Comprehensive crime statistics and predictive analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your security?</h2>
          <p className="text-xl mb-8">Join Crime.si today and access cutting-edge crime prevention tools</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Crime.si. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;