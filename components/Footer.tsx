"use client";

export default function Footer() {
  return (
    <footer className="border-t border-objexis-cyan/30 bg-objexis-blue/50 backdrop-blur-md mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-objexis-cyan mb-3">OBJEXIS TOY INC.</h3>
            <p className="text-sm text-gray-400">
              Original Toy Vehicles for the Future
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-3">Our Mission</h4>
            <p className="text-sm text-gray-400">
              Redefine toy cars through innovation, originality, and craftsmanship
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-3">Design Focus</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• 3D Printable</li>
              <li>• Original IP</li>
              <li>• Future Aesthetics</li>
              <li>• Collectible Quality</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-objexis-cyan/20 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Objexis Toy Inc. All vehicles and designs are original intellectual property.</p>
        </div>
      </div>
    </footer>
  );
}
