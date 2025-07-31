import react from "react";
import { Link } from "react-router-dom";

const navLinks = [
    {
        label: "Home",
        link:'/',
    },
    {
        label: "products",
        link: "/products",
    },
    {
        label: "about",
        link: "/about",
    },
    {
        label: "contact",
        link: "/contact",
    }
]

// arr.map
const NavLinks = () => {
    return (
        <div>
            {
                navLinks.map((item) => {
                    return (
                        <Link to={item.link}>
                            <span>{item.label}</span>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NavLinks;