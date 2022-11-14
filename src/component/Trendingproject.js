import React, { useState,useEffect } from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import priceformatter from "priceformatter";
import axios from 'axios'; 
const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/trandingProject";

function Trendingproject(){
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
				{property.map((prop) => {
					if(prop.image){
					imge= "https://stagingstatic.360realtors.ws/properties/photos/"+prop.id+"/mini/"+prop.image;
					}else{
					imge="images/tour-2.jpg";		
					}
				return (
				<>
				<div className="col-lg-4 col-sm-6 mb-4"  key={prop.id}>
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
				</div>
				</>
            	)	
			})}	
			</div>
		</div>
	</section>

    </>
 )
}
export default Trendingproject;