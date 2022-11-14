import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getfeaturecity";

function Featuredcity(){
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
						{featuredcity.map((ftrcity) => {
						return (
						<>
						<div className="col-lg-4 col-sm-6 mb-4"  key={ftrcity.id}>
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
					</div>
				</div>
			</section>
		</>
    )
}

export default Featuredcity