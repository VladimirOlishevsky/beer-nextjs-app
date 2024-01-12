import { BeerBottle } from "./components/bottle/bottle";
import "./globals.css";
import {
    Heading
} from "@chakra-ui/react"


const Home = async () => {
    return (
        <div className="main">
            <div className="bottle-wrapper">
                <BeerBottle />
            </div>
            <div className="home-content-wrapper">
                <Heading size='md'>
                    Welcome to the ultimate destination for beer enthusiasts – a virtual haven where the frothy world of craft brews comes alive! Our beer website is more than just a platform; it's a celebration of the art, science, and culture surrounding one of the oldest and most beloved beverages known to humanity – beer.
                </Heading>

                <Heading size='md'>
                    Dive into a kaleidoscope of flavors as we guide you through an extensive collection of meticulously curated beers from around the globe. Whether you're a seasoned connoisseur or a curious novice, our website caters to all levels of beer appreciation. Explore an array of styles, from hoppy IPAs and robust stouts to refreshing lagers and sour ales. We pride ourselves on offering a diverse selection that mirrors the rich tapestry of the brewing world.
                </Heading>
            </div>
        </div>
    )
}

export default Home
