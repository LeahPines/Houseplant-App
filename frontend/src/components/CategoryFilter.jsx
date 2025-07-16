import { Filter } from "lucide-react";

const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
  return (
    <div className="md:w-64">
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        <select
          value={selectedCategory}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2 md:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors appearance-none bg-white text-sm md:text-base"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;