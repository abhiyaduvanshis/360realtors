import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getfeaturecity";

function Featuredcity(){
	const options =  {
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		}
	};
	
	const [featuredcity, setfeaturedcity]= useState(null);
	useEffect(()=>{
		axios.get(baseURL).then((response)=>{
			setfeaturedcity(response.data.result);
		});
	}, []);

	if(!featuredcity) return null;

    return(
        <>
           <section className="section"  style={{background:"#fff"}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 text-center">
							<h2 className="section-title">Featured Cities</h2>
						</div>
						<OwlCarousel className='owl-theme' loop margin={10} responsive={options.responsive}>
						{featuredcity.map((ftrcity) => {
						return (
						<>
						<div className="col-lg-12 col-sm-12 mb-4 item"  key={ftrcity.id}>
							<div className="newsimage">
							<img className="img-responsive" src={`images/${ftrcity.imgname}`} />
							</div>
							<a href="/" className="px-4 py-4 bg-white shadow d-block match-height">
								<h4 className="mb-3 mt-0 text-center">{ftrcity.city}</h4>
							</a>
						</div>
						</>
						)
						})
						}
						</OwlCarousel>
					</div>
				</div>
			</section>

		</>
    )
}

export default Featuredcity