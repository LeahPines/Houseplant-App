import { Droplets, Scissors } from "lucide-react";
import PlantSection from "../PlantSection";

const PlantCareSection = ({ plant }) => {
  return (
    <PlantSection icon={Droplets} title="Care Information">
      <div className="grid md:grid-cols-2 gap-4 text-left">
        <div className="text-left">
          <span className="text-sm font-medium text-emerald-700 text-left">Watering:</span>
          <p className="text-emerald-600 text-left">{plant.Watering}</p>
        </div>
        {plant.Pruning && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 flex items-center gap-1 text-left">
              <Scissors className="h-4 w-4" />
              Pruning:
            </span>
            <p className="text-emerald-600 text-left">{plant.Pruning}</p>
          </div>
        )}
      </div>
    </PlantSection>
  );
};

export default PlantCareSection;
