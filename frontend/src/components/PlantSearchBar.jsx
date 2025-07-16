import { Search } from "lucide-react";

const PlantSearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by Latin name or Family"
          value={searchTerm}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-sm md:text-base"
        />
      </div>
    </div>
  );
}

export default PlantSearchBar;