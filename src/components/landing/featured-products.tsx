import react from 'react'
import ProductCard from '../products/card'

const data = new Array(9).map((_,i) => i)

const FeaturedProduct = () => {
    return (
        <div className='mt-4 px-36'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold text-[#A31621]'>Featured Product</h1>
                </div>
                <div>
                    <p>Explore All</p>
                </div>
            </div>
            <div className='mt-4 flex flex-wrap gap-6'>
                {[1,2,3,4,5].map(()=>{
                    return <ProductCard/>
                })}
            </div>
        </div>
    )
}

export default FeaturedProduct