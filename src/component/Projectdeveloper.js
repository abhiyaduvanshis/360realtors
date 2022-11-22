import React, { useState,useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'; 
const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getprojectdeveloper";

function Projectdeveloper(){
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
				items: 6,
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
        <section className="section" >
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 text-center">
					<h2 className="section-title">Leading Real Estate Developers</h2>
				</div>
                <OwlCarousel className='owl-theme owl-loading devloperslider' loop={false} responsive={options.responsive} margin={10} >
                    {property.map((prop) => {
                    return (
                    <>
                        <div className="item">
                        <div className="col-md-12">
                        <img className="img-responsive" src={`https://stagingstatic.360realtors.ws/developer/${prop.id}/${prop.logo}`} />
                        </div>
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
export default Projectdeveloper;