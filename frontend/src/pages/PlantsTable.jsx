import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CategoryFilter from "../components/CategoryFilter";
import PlantSearchBar from "../components/PlantSearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import PlantRow from "../components/PlantRow";
import { fetchPlants } from '../store/plantSlice';

const PlantsTable = () => {
    const dispatch = useDispatch();
    const { plants, loading, error } = useSelector(state => state.plants);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [...new Set(plants.map((p) => p.category).filter(Boolean))];

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    const filteredPlants = plants
        .filter((p) => !selectedCategory || p.category === selectedCategory)
        .filter((p) =>
            p.latin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.family?.toLowerCase().includes(searchTerm.toLowerCase())
        );

    useEffect(() => {
        dispatch(fetchPlants());
    }, [dispatch]);

    if (loading) {
        return <LoadingSpinner message="Loading plants..." />
    }

    if (error) {
        return (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-slate-200/60">
                <div className="text-4xl md:text-6xl text-slate-300 mb-4">⚠️</div>
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2">Error loading plants</h3>
                <p className="text-sm md:text-base text-slate-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
            <header className="w-screen bg-white/80 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
                <div className="w-full px-4 md:px-8 lg:px-12 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Home
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Plant Collection
                        </h1>
                        <div className="w-40"></div>
                    </div>
                </div>
            </header>

            <div className="w-full px-4 md:px-8 lg:px-12 py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-slate-200/60">
                    <div className="flex flex-col md:flex-row gap-4">
                        <PlantSearchBar
                            searchTerm={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onChange={handleCategoryChange}
                        />
                    </div>
                    <div className="mt-3 text-xs md:text-sm text-slate-600">
                        Showing {filteredPlants.length} of {plants.length} plants
                    </div>
                </div>
                {filteredPlants.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-slate-200/60">
                        <div className="text-4xl md:text-6xl text-slate-300 mb-4">🌱</div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-600 mb-2">No plants found</h3>
                        <p className="text-sm md:text-base text-slate-500">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200/60 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-slate-200 px-4 md:px-6 py-3 md:py-4">
                            <div className="grid grid-cols-12 gap-2 md:gap-4 text-xs md:text-sm font-semibold text-slate-700 uppercase tracking-wide">
                                <div className="col-span-4">Latin Name</div>
                                <div className="col-span-3">Family</div>
                                <div className="col-span-3">Category</div>
                            </div>
                        </div>
                        <div className="divide-y divide-slate-200">
                            {filteredPlants.map((plant, index) => (
                                <PlantRow
                                    key={plant.id}
                                    plant={plant}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlantsTable;