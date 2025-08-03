import NavBar from "../components/header"
import Hero from "../components/landing/hero"

import FeaturedProduct from "../components/landing/featured-products"
import SummerSale from "../components/landing/summer-sale"
import MostSale from "../components/landing/most-sale"


const HomePage = () =>{

    return (
        <main>
            <NavBar/>
            <Hero/>
            <FeaturedProduct/>
            <SummerSale/>
            <MostSale/>
        </main>
    )

}


export default HomePage