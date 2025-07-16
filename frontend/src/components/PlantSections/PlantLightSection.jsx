import { Sun } from "lucide-react";
import PlantSection from "../PlantSection";

const PlantLightSection = ({ plant }) => {
  if (!plant["Light ideal"] && !plant["Light tolered"]) {
    return null;
  }

  return (
    <PlantSection icon={Sun} title="Light Requirements" showSeparator={false}>
      <div className="grid md:grid-cols-2 gap-4 text-left">
        {plant["Light ideal"] && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Ideal:</span>
            <p className="text-emerald-600 text-left">{plant["Light ideal"]}</p>
          </div>
        )}
        {plant["Light tolered"] && (
          <div className="text-left">
            <span className="text-sm font-medium text-emerald-700 text-left">Tolerated:</span>
            <p className="text-emerald-600 text-left">{plant["Light tolered"]}</p>
          </div>
        )}
      </div>
    </PlantSection>
  );
};

export default PlantLightSection;
