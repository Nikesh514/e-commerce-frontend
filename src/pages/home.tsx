import NavBar from "../components/header"
import Hero from "../components/landing/hero"

import FeaturedProduct from "../components/landing/featured-products"
import SummerSale from "../components/landing/summer-sale"
import MostSale from "../components/landing/most-sale"
import CategoryList from "../components/landing/category/category-list-component"


const HomePage = () =>{

    return (
        <main>
            <NavBar/>
            <Hero/>
            <CategoryList/>
            <FeaturedProduct/>
            <SummerSale/>
            <MostSale/>
        </main>
    )

}


export default HomePage