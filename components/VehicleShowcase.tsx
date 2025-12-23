"use client";

import { motion } from 'framer-motion';

const vehicles = [
  {
    name: "Nebula Striker",
    category: "Sport Coupe",
    features: ["LED Light Array", "Dual-Tone Body", "Racing Stance"],
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Quantum Hauler",
    category: "Future Truck",
    features: ["Modular Cargo Bay", "Tank Treads", "Command Bridge"],
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Aether Glide",
    category: "Luxury Sedan",
    features: ["Chrome Accents", "Floating Design", "Signature Grille"],
    color: "from-cyan-400 to-teal-600"
  },
  {
    name: "Vortex Racer",
    category: "Hypercar",
    features: ["Active Aero", "Holographic Windows", "Twin Exhausts"],
    color: "from-pink-500 to-purple-700"
  }
];

export default function VehicleShowcase() {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-display font-bold text-center text-objexis-cyan mb-12">
        Featured Designs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-objexis-cyan/30 hover:border-objexis-cyan transition-all overflow-hidden hover:scale-105 duration-300">
              {/* Vehicle Placeholder Image */}
              <div className={`h-48 bg-gradient-to-br ${vehicle.color} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚗</div>
                </div>
                <div className="absolute top-2 right-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-display">
                  {vehicle.category}
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-display font-bold text-white">
                  {vehicle.name}
                </h3>

                <div className="space-y-1">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="text-objexis-cyan mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-3 px-4 py-2 bg-objexis-cyan/10 hover:bg-objexis-cyan/20 border border-objexis-cyan/50 rounded-lg text-objexis-cyan font-display text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
