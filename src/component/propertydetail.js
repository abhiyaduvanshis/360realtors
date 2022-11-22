import React, { useState,useEffect } from "react";
import axios from 'axios'; 
import { useParams } from "react-router"; 
import Header from "../common/Header";
import Footer from "../common/Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Propertydetail(){
    const options =  {
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		}
	};
    const slug = useParams();
    const baseURL = 'https://timesproperty.360realtors.com/apitest/Apitest/getpropertydetails?id='+slug.id;
    const [post, setPost] = useState(null);
	useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setPost(response.data.result[0]);
          console.log(response.data.result[0].propertyImageArr);
		});
	  }, []);
	if (!post) return null;

    return(
        <>
        <Header/>
        <section className="section" style={{paddingTop:"110px"}}>
                <div className="container">
                    <div className="row justify-content-center" >
                        <div className="col-lg-8 col-sm-6 mb-8">
                            <div className="bg-white shadow d-block match-height">
                                <div  className="articaldetails">
                                <OwlCarousel className='owl-theme owl-loading' loop={false} responsive={options.responsive} margin={10} >

                                </OwlCarousel>
                                </div>
                                <div className="col-12 px-4 py-4">
                                    <h2>{post.property_name}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                        <h1>Property Sidebar</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}
export default Propertydetail;