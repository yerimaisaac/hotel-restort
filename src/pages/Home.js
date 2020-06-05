import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";
export default function Home() {
    return(
    <>
        <Hero>
            <Banner title="luxurious rooms" substitle="deluxe rooms starting from $299">
                <Link to='/rooms' className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeturedRooms /> 
    </>
    );
}
