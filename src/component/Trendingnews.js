import React, { useState,useEffect } from "react";
import axios from 'axios';  
const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getallbloglist";
function Trendingnews(){
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
				{post.map((x) => {
            return (
				<>
				<div className="col-lg-4 col-sm-6 mb-4" key={x.id}>
					<div className="newsimage">
					<img className="img-responsive" src={`https://stagingstatic.360realtors.ws/blog/${x.id}/${x.imgname}`}   style={{minHeight: "219px"}}/>
					</div>
					<a href="single.html" className="px-4 py-4 bg-white shadow d-block match-height">
						<h4 className="mb-3 mt-0">{x.title.substring(0, 25)}</h4>
						<p className="mb-0">{x.content.replace(/<[^>]+>/g, '').substring(0, 100)}</p>
						<span className="pull-left propertysmallptitle"> {x.publish_date}</span>
						<span className="pull-right propertysmallptitle">By:Timesproperty</span>
					</a>
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
export default Trendingnews;