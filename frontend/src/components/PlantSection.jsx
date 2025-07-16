const PlantSection = ({ icon: Icon, title, children, showSeparator = true }) => {
  return (
    <>
      {showSeparator && <div className="border-t border-emerald-100"></div>}
      <div className="text-left">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-800 mb-3 text-left">
          <Icon className="h-5 w-5" />
          {title}
        </h3>
        {children}
      </div>
    </>
  );
};

export default PlantSection;
