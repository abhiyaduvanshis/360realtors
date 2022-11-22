import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Newsdetails from './component/Newsdetails';
import Newslist from './component/Newslist';
import Propertydetail from './component/propertydetail';
const Landingpage = lazy(()=> import('./component/Home'));
const Newsdetail = lazy(()=> import('./component/Newsdetails'));
const Newslst = lazy(()=>import('./component/Newslist'));
const Propdetail = lazy(()=>import('./component/propertydetail'));
function Routers(){
    return(
        <Routes>
            <Route path="/" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Landingpage />
            </Suspense>
            } />
            <Route path="/newsdetails/:id" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Newsdetail />
            </Suspense>
            } />
            <Route path="/news" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Newslst />
            </Suspense>
            } />
             <Route path="/property/:id" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Propdetail />
            </Suspense>
            } />
        </Routes> 

    );

}
export default Routers;