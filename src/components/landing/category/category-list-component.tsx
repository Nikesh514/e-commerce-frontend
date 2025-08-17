import { useQuery } from "@tanstack/react-query";
import ComponentTitle from "../component-title-with-button";
import CategoryCard from "./category-card";
import { getAllCategory } from "../../../api/category.api";
import type { ICategoryData } from "../../../types/category-types";
import CategoryCardLoader from "../../loaders/category-loader";

const CategoryList = () => {

  const {data,isLoading} = useQuery({
      queryFn:getAllCategory,
      queryKey:['get_all_category']
  })

  console.log(isLoading,data)


  return (
      <div className='mt-10 px-36'>
          <ComponentTitle
              title='Browse Our Best Selling Product Categories'
              subTitle='Discover top-rated products by category loved by our customers.'
          />
          { !isLoading && data?.data.length === 0 && (
              <div className='text-center mt-10'>
                  <p className='text-lg font-semibold'>No categories found.</p>
              </div>
          )}
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>

              {
                  isLoading ? 
                  Array.from({length:9},(_,i:number)=> i + 1).map((data) => <CategoryCardLoader key={data}/>)
                  :
                  data?.data.map((category:ICategoryData,) => <CategoryCard key={category._id} category={category}/>)
              }
          </div>

      </div>
  )
}

export default CategoryList