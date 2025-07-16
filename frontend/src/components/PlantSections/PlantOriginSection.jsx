import { MapPin, Thermometer } from "lucide-react";
import PlantSection from "../PlantSection";

const PlantOriginSection = ({ plant }) => {
  if (!plant.Origin && !plant.Climat && !plant["Temperature min"] && !plant["Temperature max"] && !plant.Avaibility) {
    return null;
  }

  return (
    <PlantSection icon={MapPin} title="Origin & Environment">
      <div className="grid md:grid-cols-3 gap-4 text-left">
        {plant.Origin && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Origin:</span>
            <p className="text-emerald-600 text-left">{Array.isArray(plant.Origin) ? plant.Origin.join(", ") : plant.Origin}</p>
          </div>
        )}
        {plant.Climat && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 flex items-center gap-1 text-left">
              <Thermometer className="h-4 w-4" />
              Climate:
            </span>
            <p className="text-emerald-600 text-left">{plant.Climat}</p>
          </div>
        )}
        {(plant["Temperature min"] || plant["Temperature max"]) && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Temperature:</span>
            <div className="text-emerald-600 text-left">
              {plant["Temperature min"] && <p className="text-left">{plant["Temperature min"].C}°C min</p>}
              {plant["Temperature max"] && <p className="text-left">{plant["Temperature max"].C}°C max</p>}
            </div>
          </div>
        )}
      </div>
      {plant.Avaibility && (
        <div className="mt-3 text-left">
          <span className="text-sm font-medium text-emerald-700 text-left">Availability:</span>
          <p className="text-emerald-600 text-left">{plant.Avaibility}</p>
        </div>
      )}
    </PlantSection>
  );
};

export default PlantOriginSection;
