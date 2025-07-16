import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PlantHeader = () => {
  return (
    <header className="w-screen bg-white/80 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
      <div className="w-full px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/plants"
            className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Plants
          </Link>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Plant Details
          </h1>
          <div className="w-20"></div>
        </div>
      </div>
    </header>
  );
};

export default PlantHeader;
