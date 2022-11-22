import React, { useState,useEffect } from "react";
import axios from 'axios'; 

function Newsidebar(){
    const catbaseURL = "https://timesproperty.360realtors.com/apitest/Apitest/getnewscategory";
    const [catpost, setPostcat] = useState(null);
	useEffect(() => {
		axios.get(catbaseURL).then((response) => {
            setPostcat(response.data.result);
            console.log(response.data.result);
		});
	  }, []);
	if (!catpost) return null;

    return(
    <>
        <div className="bg-white shadow d-block match-height">
            <div  className="card">
                <article  className="card-group-item">
                    <header  className="card-header"><h4  className="title"> News Category</h4></header>
                    <div  className="filter-content">
                        <div  className="list-group list-group-flush">
                            {catpost.map((cat_data) =>{
                                return  (
                                    <>
                                    <a href="" className="list-group-item" style={{color:"#000"}}>{cat_data.category_name}</a>
                                    
                                    </>
                                )
                            })}
                        </div> 
                    </div>
                </article> 
            </div>
        </div>
    </>
    )
}
export default Newsidebar;