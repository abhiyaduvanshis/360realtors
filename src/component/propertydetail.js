import React, { useState,useEffect } from "react";
import axios from 'axios'; 
import { useParams } from "react-router"; 
import priceformatter from "priceformatter";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Propertylead_form from "./Propertylead_form";
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
		  setPost(response.data);
        // console.log(response.data.result.propertyImageMIni);
		});
	  }, []);
	if (!post) return null;
    const propimg = post.result.propertyImageMIni;

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 500) : text}
            <span onClick={toggleReadMore} className="read-or-hide" style={{color:"#a3043a",fontWeight:"bold"}}>
              {isReadMore ? "...Read more" : " Show less"}
            </span>
          </p>
        );
      };
   
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
                                        {propimg.map((propimage) => {
                                            return(
                                                <>
                                                <div className="item prodt">
                                                    <img src={`https://stagingstatic.360realtors.ws/properties/photos/${propimage.propty_id}/mini/${propimage.image}`}/>
                                                </div>
                                                </>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                                <div className="col-12 px-4 py-4 mb-1">
                                    <div className="row mb-4">
                                        <div className="col-9">
                                        <h2>{post.result.property_name}</h2>
                                        </div>
                                        <div className="col-3">
                                        <h4> {priceformatter(post.result.minPrice)} *</h4>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                        <h6>Project Area</h6>
                                        <p>{post.result.minSize}-{post.result.maxSize} {post.result.unit}</p>
                                        </div>
                                        <div className="col-4">
                                        <h6>Project Type</h6>
                                        <p>{post.result.propertyType}</p>
                                        </div>
                                        <div className="col-4">
                                        <h6>Project Status</h6>
                                        <p>{post.result.ProjectStatus}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                        <h6>Possession on</h6>
                                        <p>{post.result.possession_date}</p>
                                        </div>
                                        <div className="col-4">
                                        <h6>Configurations</h6>
                                        <p>{post.result.bedrooms}</p>
                                        </div>
                                        <div className="col-4">
                                        <h6>Developed By</h6>
                                        <p>{post.result.developer}</p>
                                        </div>
                                    </div>
                                    
                                        
                                </div>
                            </div>
                            <div className="bg-white shadow d-block match-height" style={{marginTop:"5px"}}>
                                <div className="col-12 px-4 py-4">
                                <h4>Overview of {post.result.property_name}</h4>
                                <ReadMore>
                                {post.result.new_overview.replace(/<[^>]*>?/gm, '')}
                                </ReadMore>
                                </div>
                            </div>
                            <div className="bg-white shadow d-block match-height" style={{marginTop:"5px"}}>
                                <div className="col-12 px-4 py-4">
                                <h4>Amenities of {post.result.property_name}</h4>
                                <div className="row" dangerouslySetInnerHTML={{__html:post.result.projectAmenitiesWeb}} />
                                </div>       
                            </div>
                            <div className="bg-white shadow d-block match-height" style={{marginTop:"5px"}}>
                                <div className="col-12 px-4 py-4">
                                <h4>Specification of {post.result.property_name}</h4>
                                <div className="specificationulli" dangerouslySetInnerHTML={{__html:post.result.highlights}} />
                                </div>       
                            </div>
                            <div className="bg-white shadow d-block match-height" style={{marginTop:"5px"}}>
                                <div className="col-12 px-4 py-4">
                                <h4>Payments of {post.result.property_name}</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th >Unit Type</th>
                                            <th>Size ({post.result.unit})</th>
                                            <th>Price ({post.result.unit})</th>
                                            <th>Amount</th>
                                            <th>Booking Amt</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {post.pricetable.map((price) => {
                                        return(
                                            <>
                                           <tr>
                                           <td>{price.type}</td>
                                            <td>{price.size}</td>
                                            <td> ₹ {price.price}</td>
                                            <td> ₹ {price.amount}</td>
                                            <td>{price.booking_amount}</td>
                                           </tr>
                                            </>
                                        )
                                    })}
                                     
                                    </tbody>
                                </table>
                                </div>       
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4"> 
                        <Propertylead_form post={post}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}
export default Propertydetail;