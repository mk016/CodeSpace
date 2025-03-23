import React from 'react';
import { Terminal, GitBranch, Package, Database } from 'lucide-react';

export default function ExploreSection() {
  const categories = [
    { icon: <Terminal className="h-6 w-6" />, name: "Scripts & Tools", count: 234 },
    { icon: <GitBranch className="h-6 w-6" />, name: "Algorithms", count: 156 },
    { icon: <Package className="h-6 w-6" />, name: "Components", count: 389 },
    { icon: <Database className="h-6 w-6" />, name: "Backend Solutions", count: 167 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover a wide range of code solutions across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-gray-400">{category.count} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}