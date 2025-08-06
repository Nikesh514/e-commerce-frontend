const CategoryCardLoader = () => {
    return (
      <div className="p-4 flex items-center gap-2 bg-[#f8f8f8] rounded-md animate-pulse">
        {/* Shimmer icon */}
        <div className="w-[30px] h-[30px] bg-gray-300 rounded-full" />
        
        {/* Shimmer text */}
        <div className="flex-1">
          <div className="w-24 h-4 bg-gray-300 rounded mb-1" />
          <div className="w-36 h-3 bg-gray-200 rounded" />
        </div>
      </div>
    );
  };
  
  export default CategoryCardLoader;