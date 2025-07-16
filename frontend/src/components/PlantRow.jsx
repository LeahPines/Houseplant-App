import { useNavigate } from "react-router-dom";

const PlantRow = ({ plant, index }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 hover:bg-slate-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
            }`}
        >
            <div className="col-span-4 text-sm md:text-base font-medium text-slate-800 truncate">
                {plant.latin}
            </div>
            <div className="col-span-3 text-sm md:text-base text-slate-600 truncate">
                {plant.family}
            </div>
            <div className="col-span-3 text-sm md:text-base">
                {plant.category && (
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full truncate">
                        {plant.category}
                    </span>
                )}
            </div>
            <div className="col-span-2 flex justify-center">
                <button
                    onClick={() => navigate(`/plants/${plant.id}`)}
                    className="px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    View
                </button>
            </div>
        </div>
    );
};

export default PlantRow;