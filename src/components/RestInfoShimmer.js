const RestInfoShimmer = () => {
  const placeholderArray = new Array(6).fill(0); // Renders 6 shimmer items

  return (
    <div className="w-[65%] mx-auto mt-20">
      {placeholderArray.map((_, index) => (
        <div key={index} className="flex w-full justify-between mb-6 p-2 animate-pulse">
          <div className="w-[70%] space-y-2">
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-10"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="w-[20%] relative flex justify-center">
            <div className="w-39 h-36 bg-gray-300 rounded-2xl"></div>
            <div className="absolute top-28 w-25 h-9.5 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestInfoShimmer;