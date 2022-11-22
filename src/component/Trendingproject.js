import React, { useState,useEffect } from "react";
import priceformatter from "priceformatter";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'; 

function Trendingproject(){
	const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/trandingProject";
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

	let imge='';
	const [property, setproperty] = useState(null);
	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setproperty(response.data.result);
		});
	}, []);
	if (!property) return null;

 return(
    <>
    <section className="section" style={{background:"#fff"}}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 text-center">
					<h2 className="section-title">Trending Projects</h2>
				</div>
				<OwlCarousel className='owl-theme owl-loading' loop={false} responsive={options.responsive} margin={10} >
				{property.map((prop) => {
					if(prop.image){
					imge= "https://stagingstatic.360realtors.ws/properties/photos/"+prop.id+"/mini/"+prop.image;
					}else{
					imge="images/tour-2.jpg";		
					}
				return (
				<>
				<div className="col-lg-12 col-sm-12 mb-4 item"   key={prop.length + 1}>
					<a href={`/property/${prop.id}`}>
					<div className="newsimage">
					<img className="img-responsive" src={`${imge}`} />
					</div>
					<div className="px-3 py-4 bg-white shadow d-block match-height">
						<div className="propdetails">
						<h5 className="mt-0">{prop.property_name}</h5>
						<p className="mb-0 propertysmallptitle">By {prop.devname}</p>
                        <p className="mb-0 propertysmallptitle">{prop.location}, {prop.city}</p>
                        <p className="mb-0 smallptext">{prop.bedrooms}</p>
                        <p className="mb-0 smallptext">{prop.possession_date} </p>
						</div>
                        <div className="pricesection">
                        <h3 className="price"> {priceformatter(prop.minprice)} - {priceformatter(prop.maxprice)} <span>Contact</span></h3>
                        </div>
					</div>
					</a>
				</div>
				</>
            	)	
			})}	
			</OwlCarousel>
			</div>
		</div>
	</section>

    </>
 )
}
export default Trendingproject;