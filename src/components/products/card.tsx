import productImage from "../../assets/product.webp";

const ProductCard = () => {
  return (
    <div className="max-w-[300px] flex flex-col p-4 py-8 bg-[#f8f8f8]">
      {/* image */}
      <div className="h-[200px] w-[200px] aspect-square mx-auto cursor-pointer ">
        <img
          src={productImage}
          alt="Product Image"
          className="h-full w-full object-contain hover:scale-110 transition-all duration-300 grayscale-50"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-[#A31621] font-bold text-lg line-clamp-1">
          Lenovo Legion 5 Pro 16" Gaming Laptop
        </h1>
        <p className="text-[14px] mt-2 line-clamp-3">
          16" WQXGA | Ryzen 7 6800H | 32GB RAM | RTX 3070 Ti | 1TB SSD
        </p>
      </div>
      <div className="flex mt-2 justify-between">
        <p>$ 990.00</p>
        <p>stock: <span className="text-green-500">5</span></p>
      </div>
      <div className="flex justify-between mt-6 gap-3">
        <button className="bg-[#A31621] w-full p-2 rounded-md text-white text-[16px] font-bold cursor-pointer">
          View Details
        </button>
        <button className="border border-[#A31621]  w-full p-2 px-1 rounded-md text-[#A31621] text-[16] font-[500] cursor-pointer">
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
