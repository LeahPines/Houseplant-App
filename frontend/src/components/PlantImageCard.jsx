import { Sun, Droplets } from "lucide-react";

const PlantImageCard = ({ plant }) => {
  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <div className="aspect-square bg-emerald-50 rounded-lg overflow-hidden border border-emerald-200">
            {plant["Img"] || plant.image ? (
              <img
                src={plant["Img"] || plant.image}
                alt={plant["Latin name"] || plant.latin}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-emerald-600 text-sm font-medium">No Image Available</span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-2/3 space-y-4 text-left">
          <div>
            <h1 className="text-3xl font-bold text-emerald-800 mb-2 text-left">
              {plant["Latin name"] || plant.latin}
            </h1>
            {(plant["Common name"] && Array.isArray(plant["Common name"])) && (
              <p className="text-xl text-emerald-600 mb-3 text-left">{plant["Common name"].join(", ")}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {(plant.Categories || plant.category) && (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {plant.Categories || plant.category}
                </span>
              )}
              {(plant.Family || plant.family) && (
                <span className="px-3 py-1 border border-emerald-200 text-emerald-600 rounded-full text-sm font-medium">
                  {plant.Family || plant.family}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {(plant["Light ideal"] || plant["Light tolerated"] || plant.light) && (
              <div className="flex items-center gap-2 text-emerald-700">
                <Sun className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Light: {plant["Light ideal"] || plant.light || "See details"}
                </span>
              </div>
            )}
            {(plant["Watering instructions"] || plant.watering || plant.Watering) && (
              <div className="flex items-center gap-2 text-emerald-700">
                <Droplets className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Water: {plant["Watering instructions"] || plant.watering || plant.Watering}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantImageCard;
