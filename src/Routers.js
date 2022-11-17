import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Newsdetails from './component/Newsdetails';
const Myhome = lazy(()=> import('./component/Home'));
const Newsdetail = lazy(()=> import('./component/Newsdetails'));
function Routers(){
    return(
        <Routes>
            <Route path="/" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Myhome />
            </Suspense>
            } />
            <Route path="/newsdetails/:id" element={
            <Suspense fallback={<div className="mylodar"><div className="imagediv"><img src="images/loder.gif"/></div></div>}>
            <Newsdetail />
            </Suspense>
            } />
        </Routes> 

    );

}
export default Routers;