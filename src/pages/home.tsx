import NavBar from "../components/header"
import Hero from "../components/landing/hero"
import ProductCard from "../components/products/card"
import FeaturedProduct from "../components/landing/featured-products"


const HomePage = () =>{

    return (
        <main>
            <NavBar/>
            <Hero/>
            <ProductCard/>
            <FeaturedProduct/>
        </main>
    )

}


export default HomePage