import React from "react";
function Searchhedar(){
    return(
        <>
            <header className="banner overlay bg-cover" data-background="images/banner.jpg" style={{background:"url(images/banner.webp)"}}>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <a className="navbar-brand px-2" href="index.html"><img src="images/logo.png" /></a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse text-center" id="navigation">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="index.html">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="faq.html">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="contact.html">contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="single.html">Inner Page</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container bannersection">
                    <div className="row">
                        <div className="col-lg-8 text-center mx-auto">
                            <h1 className="text-white mb-3">Search Properties in India</h1>
                            <p className="text-white mb-4">Find advice and answers from our support team fast or get in touch</p>
                            <div className="position-relative">
                                <input id="search" className="form-control" placeholder="Have a question? Just ask here or enter terms"/><i
                                    className="ti-search search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Searchhedar;