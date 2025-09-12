import { useQuery } from "@tanstack/react-query";
import NavBar from "../components/header";
import { getAllProducts } from "../api/product.api";
import ProductCard from "../components/products/card";
import type { IProductData } from "../types/product.types";

const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all_products"],
    queryFn: getAllProducts,
  });

  return (
    <main>
      <div className="px-36 mt-10">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <div>
          {isLoading ? (
            Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="w-40 h-60 bg-gray-200 animate-pulse" />
            ))
          ) : data?.data?.length === 0 ? (
            <p>No products found.</p>
          ) : (
            data?.data.map((product: IProductData) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Products;
