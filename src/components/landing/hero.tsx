import heroImage from "../../assets/hero-1.webp";

const Hero = () => {
  return (
    <div id={"hero-section"} className="w-full h-[85vh] relative">
      {/* overlay */}
      <div className="bg-balck/40 absolute inset-0"></div>
      <img src={heroImage} className="h-full w-full" />
      {/* hero info */}
      <div className="absolute top-[30%] buttom-1/2 left-230 max-w-[600px]">
        <div>
          <h1 className="text-4xl text-[#CCCCCC] font-bold">
            Shop Quality. Shop Convenience. Shop Now.
          </h1>
          <p className=" text-lg text-[#CCCCCC] ">
            Explore an extensive selection of premium products, thoughtfully
            chosen to fit your everyday needs. Whether you’re revamping your
            style, adding comfort to your home, or finding that special gift,
            you’ll find endless options to suit every taste — all with a smooth
            and satisfying shopping journey.
          </p>
        </div>
        <button className="bg-[#A31621] border border-[#A31621] text-[#CCCCCC] hover:bg-[#CCCCCC] hover:border[#A31621] hover:text-[#A31621] transition-all duration-300 py-3 w-[150] rounded-md font-bold text-lg cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

// footer
