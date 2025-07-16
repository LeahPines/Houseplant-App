const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-xl text-slate-600 font-light">{message}</p>
    </div>
  </div>
);
export default LoadingSpinner;