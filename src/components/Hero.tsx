import React from 'react';
import { Rocket, Code2, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            CODE SPACE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            A decentralized marketplace for developers to buy and sell high-quality code snippets, 
            powered by blockchain technology.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-purple-600 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-600 rounded-full text-lg font-semibold hover:bg-purple-600/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <Code2 className="h-8 w-8 text-purple-400" />,
              title: "Quality Code",
              description: "Curated collection of premium code snippets and solutions"
            },
            {
              icon: <Shield className="h-8 w-8 text-purple-400" />,
              title: "Secure Transactions",
              description: "Protected by blockchain technology and smart contracts"
            },
            {
              icon: <Rocket className="h-8 w-8 text-purple-400" />,
              title: "Instant Delivery",
              description: "Get immediate access to purchased code"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}