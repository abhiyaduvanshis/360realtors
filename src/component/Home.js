import React  from "react";
import {Helmet} from "react-helmet";
import Searchhedar from "../common/Searchheader";
import Footer from "../common/Footer";
import Trendingnews from "./Trendingnews";
import Trendingproject from "./Trendingproject";
import Curaatedcollection from "./Curatedcollection";
import Featuredcity from "./Featuredcity";
import Projectdeveloper from "./Projectdeveloper";

function Home(){
    return(
        <>
			<Helmet>
			<title>The Ultimate Home for Indian Real Estate Updates | Times Property</title>
			<meta name="keywords" content="Times Property, Indian Real Estate, Property Updates, Real Estate News, TimesProperty.com"/>
			<meta name="description" content="Times Property - A one-stop-shop for all your new property search, discovery and in-depth analysis. TimesProperty.com brings to you genuine property listings provided directly by the Developers."/>
			</Helmet>
			<Searchhedar/>
			<Trendingnews/>
			<Trendingproject/>
			<Curaatedcollection/>
			<Featuredcity/>
			<Projectdeveloper/>
			<Footer/>
        </>
    )
}
export default Home;