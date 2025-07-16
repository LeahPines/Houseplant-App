import { Ruler } from "lucide-react";
import PlantSection from "../PlantSection";

const PlantSizeSection = ({ plant }) => {
  if (!plant.Growth && !plant["Height at purchase"] && !plant["Width at purchase"] && !plant["Height potential"] && !plant["Width potential"] && !plant["Potential height"] && !plant["Potential width"]) {
    return null;
  }

  return (
    <PlantSection icon={Ruler} title="Size Information">
      <div className="grid md:grid-cols-2 gap-4 text-left">
        <div className="space-y-2 text-left">
          {(plant["Height at purchase"] || plant["Width at purchase"]) && (
            <div className="text-left">
              <span className="text-sm font-medium text-emerald-700 text-left">Current Size:</span>
              <p className="text-emerald-600 text-left">
                {typeof plant["Height at purchase"] === 'object' ? `${plant["Height at purchase"].CM}cm` : (plant["Height at purchase"] || 'Unknown')} × {typeof plant["Width at purchase"] === 'object' ? `${plant["Width at purchase"].CM}cm` : (plant["Width at purchase"] || 'Unknown')}
              </p>
            </div>
          )}
          {(plant["Height potential"] || plant["Width potential"] || plant["Potential height"] || plant["Potential width"]) && (
            <div className="text-left">
              <span className="text-sm font-medium text-emerald-700 text-left">Mature Size:</span>
              <p className="text-emerald-600 text-left">
                {typeof (plant["Height potential"] || plant["Potential height"]) === 'object' ? `${(plant["Height potential"] || plant["Potential height"]).CM}cm` : ((plant["Height potential"] || plant["Potential height"]) || 'Unknown')} × {typeof (plant["Width potential"] || plant["Potential width"]) === 'object' ? `${(plant["Width potential"] || plant["Potential width"]).CM}cm` : ((plant["Width potential"] || plant["Potential width"]) || 'Unknown')}
              </p>
            </div>
          )}
        </div>
        <div className="space-y-2 text-left">
          {plant.Growth && (
            <div className="text-left">
              <span className="text-sm font-medium text-emerald-700 text-left">Growth Rate:</span>
              <p className="text-emerald-600 text-left">{plant.Growth}</p>
            </div>
          )}
          {plant.Bearing && (
            <div className="text-left">
              <span className="text-sm font-medium text-emerald-700 text-left">Growth Form:</span>
              <p className="text-emerald-600 text-left">{plant.Bearing}</p>
            </div>
          )}
        </div>
      </div>
    </PlantSection>
  );
};

export default PlantSizeSection;
