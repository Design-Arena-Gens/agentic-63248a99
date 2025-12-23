"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import VehicleShowcase from '@/components/VehicleShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-12">
        {!showChat ? (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
              <h1 className="text-6xl md:text-7xl font-display font-bold tracking-wider">
                <span className="bg-gradient-to-r from-objexis-cyan via-objexis-purple to-objexis-cyan bg-clip-text text-transparent">
                  OBJEXIS TOY INC.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Original Toy Vehicles for the Future
              </p>
              <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Future-focused toy vehicle design studio specializing in original, luxury-inspired,
                and futuristic miniature automobiles crafted exclusively for 3D printing.
              </p>

              <button
                onClick={() => setShowChat(true)}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-objexis-cyan to-objexis-purple text-white font-display font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow"
              >
                TALK TO OUR AI DESIGN AGENT
              </button>
            </div>

            {/* Mission Statement */}
            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-objexis-cyan/30 hover:border-objexis-cyan transition-colors">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-display font-bold text-objexis-cyan mb-3">Original IP</h3>
                <p className="text-gray-300">
                  Every vehicle is developed from the ground up with unique silhouettes, bold proportions, and refined surface language.
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-objexis-purple/30 hover:border-objexis-purple transition-colors">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-display font-bold text-objexis-purple mb-3">Design Excellence</h3>
                <p className="text-gray-300">
                  Merging automotive artistry, industrial design precision, and imaginative storytelling for never-before-seen concepts.
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-objexis-cyan/30 hover:border-objexis-cyan transition-colors">
                <div className="text-4xl mb-4">🖨️</div>
                <h3 className="text-xl font-display font-bold text-objexis-cyan mb-3">3D Print Ready</h3>
                <p className="text-gray-300">
                  Balancing visual sophistication with toy-friendly durability, ensuring structural integrity and smooth printability.
                </p>
              </div>
            </div>

            {/* Vehicle Showcase */}
            <VehicleShowcase />

            {/* Design Philosophy */}
            <div className="py-12 text-center space-y-6">
              <h2 className="text-4xl font-display font-bold text-objexis-cyan">Our Design Philosophy</h2>
              <div className="max-w-4xl mx-auto text-gray-300 space-y-4 text-left">
                <p>
                  We approach each model as both a collectible object and a functional toy, integrating:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Creative lighting elements that bring vehicles to life</li>
                  <li>Expressive wheel designs that define character and motion</li>
                  <li>Futuristic interiors with imaginative cockpit layouts</li>
                  <li>Architectural body forms that push boundaries of automotive design</li>
                </ul>
                <p className="mt-6">
                  Our vehicles feel at home in a fictional or future automotive universe, forming a cohesive
                  and recognizable design language across our growing collection.
                </p>
                <p className="font-display text-objexis-cyan mt-6">
                  Mission: Redefine toy cars through innovation, originality, and craftsmanship—building
                  a premium 3D-printable toy car brand that feels timeless, imaginative, and entirely new.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ChatInterface onBack={() => setShowChat(false)} />
        )}
      </section>

      <Footer />
    </main>
  );
}
