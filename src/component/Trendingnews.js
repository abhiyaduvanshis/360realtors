import React, { useState,useEffect } from "react";
import axios from 'axios';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getallbloglist?limit=6";
function Trendingnews(){

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

	const [post, setPost] = useState(null);
	useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setPost(response.data.result);
		});
	  }, []);
	  if (!post) return null;

 return(
    <>
    <section className="section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 text-center">
					<h2 className="section-title">Trending News</h2>
				</div>
				<OwlCarousel className='owl-theme' loop margin={10} responsive={options.responsive}>
				{post.map((x) => {
            return (
				<>
				<div className="item col-md-12 mb-4" key={x.id}>
				<a href={`/Newsdetails/${x.id}`}>
					<div className="newsimage">
					<img className="img-responsive" src={`https://stagingstatic.360realtors.ws/blog/${x.id}/${x.imgname}`} />
					</div>
					</a>
					<a href={`/Newsdetails/${x.id}`} className="px-4 py-4 bg-white shadow d-block match-height">
						<h4 className="mb-3 mt-0">{x.title.substring(0, 25)}</h4>
						<p className="mb-0">{x.content.replace(/<[^>]+>/g, '').substring(0, 100)}</p>
						<span className="pull-left propertysmallptitle"> {x.publish_date}</span>
						<span className="pull-right propertysmallptitle">By:Timesproperty</span>
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
export default Trendingnews;