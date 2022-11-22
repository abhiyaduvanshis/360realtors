import React, { useState,useEffect } from "react";
import axios from 'axios';  
import Header from "../common/Header";
import Footer from "../common/Footer";
import Newsidebar from "../common/Newsidebar";
const baseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getallbloglist";

function Newslist(){
    const [post, setPost] = useState(null);
    useEffect(() => {
    axios.get(baseURL).then((response) => {
        setPost(response.data.result);
    });
    }, []);
    if (!post) return null;

    return ( 
        <>
            <Header/>
                <section className="section" style={{paddingTop:"110px"}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="row">
                            {post.map((x) => {
                                return (
                                    <>
                                        <div className="artical" key={x.id}>
                                            <a href={`/Newsdetails/${x.id}`}>
                                                <div>
                                                <img className="img-responsive" src={`https://stagingstatic.360realtors.ws/blog/${x.id}/${x.imgname}`} />
                                                </div>
                                            </a>
                                            <a href={`/Newsdetails/${x.id}`} className="px-4 py-4 bg-white shadow d-block match-height">
                                                <h4 className="mb-3 mt-0">{x.title.substring(0, 20)}</h4>
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
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <Newsidebar/>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>    
        </>
    );
}
export default Newslist;