import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import PlantHeader from "../components/PlantHeader";
import PlantImageCard from "../components/PlantImageCard";
import PlantLightSection from "../components/PlantSections/PlantLightSection";
import PlantCareSection from "../components/PlantSections/PlantCareSection";
import PlantSizeSection from "../components/PlantSections/PlantSizeSection";
import PlantOriginSection from "../components/PlantSections/PlantOriginSection";
import PlantIssuesSection from "../components/PlantSections/PlantIssuesSection";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchPlantById } from "../store/plantSlice";

const PlantDetails = () => {
  const { plantId } = useParams();
  const dispatch = useDispatch();
  const { currentPlant: plant, loading, error } = useSelector(state => state.plants);

  useEffect(() => {
    dispatch(fetchPlantById(plantId));
  }, [dispatch, plantId]);

  if (loading) {
    return <LoadingSpinner message="Loading plant details..." />;
  }

  if (error || !plant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-600 mb-2">Plant not found</h2>
          <p className="text-slate-500 mb-6">
            {error ? error : "The plant you're looking for doesn't exist."}
          </p>
          <Link
            to="/plants"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <PlantHeader />
      <div className="w-full px-4 md:px-8 lg:px-12 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-emerald-200">
            <PlantImageCard plant={plant} />
            <div className="p-6 space-y-6 text-left">
              <PlantLightSection plant={plant} />
              <PlantCareSection plant={plant} />
              <PlantSizeSection plant={plant} />
              <PlantIssuesSection plant={plant} />
              <PlantOriginSection plant={plant} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;