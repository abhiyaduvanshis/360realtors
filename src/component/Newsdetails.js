import React, { useState,useEffect } from "react";
import axios from 'axios'; 
import { useParams } from "react-router"; 
import Header from "../common/Header";
import Footer from "../common/Footer";
import Newsidebar from "../common/Newsidebar";

function Newsdetails(){
    const slug = useParams();
    const baseURL = 'https://timesproperty.360realtors.com/apitest/Apitest/getnewsdetails?id='+slug.id;
    const [post, setPost] = useState(null);
	useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setPost(response.data.result[0]);
          //console.log(response.data.result[0]);
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
                                <div className="newsimage">
                                <img className="img-responsive" src={`https://stagingstatic.360realtors.ws/blog/${post.id}/${post.imgname}`} />
                                </div>
                                <div className="col-12 px-4 py-4">
                                    <h2>{post.title}</h2>
                                    {post.content}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                        <Newsidebar/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Newsdetails;