import { useQuery } from '@tanstack/react-query'
import ComponentTitle from './component-title-with-button'
import { getFeaturedProducts } from '../../api/product.api'
import ProductCardLoader from '../loaders/product-loader'
import NotFoundComponent from '../common/not-found-card/not-found'
import type { IProductData } from '../../types/product-types'
import ProductCard from '../products/card'






const FeaturedProducts = () => {

  const {data,isLoading} = useQuery({
    queryFn:getFeaturedProducts,
    queryKey:['get_featured_products']
  })

  console.log(data,isLoading)

  

  return (
    <div className='mt-10 px-36'>
      <ComponentTitle
      title='Featured Products'
      subTitle='Our featured products'
      key={'featured_component_title'}
      link='#'
      />
      <div className='mt-4 flex flex-wrap gap-6'>

        <div className='w-full'>
          {
            data && data.data.length === 0 && <NotFoundComponent message='Products Not Found'/>
          }
        </div>

        {
          // [1,2,3,4,,,,,,,13]
          isLoading ? Array.from({length:12},(_,i) => i + 1).map((index) => <ProductCardLoader key={index}/>)
        :
        data.data.map((product:IProductData) => {
          return <ProductCard product={product}  key={product._id} />
        })}

      </div>

    </div>
  )
}

export default FeaturedProducts