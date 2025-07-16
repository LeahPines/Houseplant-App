import { Link } from "react-router-dom";
import { Sun, Droplets, Ruler } from "lucide-react";
import plantLogo from "../assets/plant.png";
const features = [
  {
    icon: <Sun className="h-8 w-8 text-green-600" />,
    title: "Light Requirements",
    description: "Find plants perfect for your lighting condition.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-green-600" />,
    title: "Care Instructions",
    description: "Detailed watering and care guidelines.",
  },
  {
    icon: <Ruler className="h-8 w-8 text-green-600" />,
    title: "Size Information",
    description: "Know how big your plants will grow.",
  },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="w-screen flex items-center justify-between px-4 md:px-8 lg:px-12 py-2 bg-white/80 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={plantLogo} alt="Plant Logo" className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800">Plant Paradise</h1>
            <p className="text-xs text-emerald-600 font-medium tracking-wide">Premium Collection</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-screen min-h-screen text-center py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-slate-50 flex flex-col justify-start pt-16 md:pt-20">
        <div className="w-full mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-emerald-200/50">
              <img src={plantLogo} alt="Hero Logo" className="h-10 w-10 opacity-80" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to Your
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Plant Paradise
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-600 leading-relaxed font-light">
            Discover the perfect houseplants for your space. Browse our curated
            collection of beautiful plants with detailed care information and growing tips.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-screen min-h-screen bg-white py-20 md:py-24 px-4 md:px-8 lg:px-12 flex flex-col justify-center">
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our Collection?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <div className="w-full text-center">
          <Link
            to="/plants"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Browse Plant Catalog
            <svg
              className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <br />

      {/* Footer */}
      <footer className="w-screen bg-slate-800 text-slate-300 py-8 px-4 md:px-8 lg:px-12">
        <div className="w-full text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <img src={plantLogo} alt="Footer Logo" className="h-4 w-4 filter brightness-0 invert" />
            </div>
            <span className="text-lg font-bold text-white">Plant Paradise</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Plant Paradise. Cultivating beauty, one plant at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
