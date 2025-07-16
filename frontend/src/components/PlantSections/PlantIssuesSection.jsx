import { ShieldAlert } from "lucide-react";
import PlantSection from "../PlantSection";

const PlantIssuesSection = ({ plant }) => {
  if (!plant.Insects && !plant.Disease) {
    return null;
  }

  return (
    <PlantSection icon={ShieldAlert} title="Potential Issues">
      <div className="grid md:grid-cols-2 gap-4 text-left">
        {plant.Insects && Array.isArray(plant.Insects) && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Pests:</span>
            <p className="text-emerald-600 text-left">{plant.Insects.join(", ")}</p>
          </div>
        )}
        {plant.Disease && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Disease:</span>
            <p className="text-emerald-600 text-left">{plant.Disease}</p>
          </div>
        )}
      </div>
    </PlantSection>
  );
};

export default PlantIssuesSection;
