const ShimmerVideoCard = () => {
    return (
        <div className="bg-black p-6 rounded-lg shadow-lg relative overflow-hidden w-full h-3/4">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse "></div>
        
        {/* Main content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="h-4 bg-gray-800 w-2/3 mb-4"></div>
          
          {/* Description */}
          <div className="h-3 bg-gray-800 w-3/4 mb-6"></div>
          
          {/* Button */}
          <div className="h-10 bg-gray-800 w-1/2"></div>
        </div>
      </div>
    );
  };
  
  export default ShimmerVideoCard;