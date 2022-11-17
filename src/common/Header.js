import React from "react";

function Header(){
    return(
        <>
            <header className="banner overlay bg-cover" data-background="/images/banner.jpg" style={{background:"url(/images/banner.webp)"}}>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <a className="navbar-brand px-2" href="/"><img src="/images/logo.png" /></a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse text-center" id="navigation">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/">News</a>
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
            </header>
        </>
    );
}
export default Header;