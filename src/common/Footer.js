import React from "react";

function Footer(){
    return(
       <>
	   <footer className="section pb-4">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-8 text-md-left text-center">
					<p className="mb-md-0 mb-4">Copyright © 2020 Designed and Developed by <a
							href="https://themefisher.com/">themefisher</a></p>
				</div>
				<div className="col-md-4 text-md-right text-center">
					<ul className="list-inline">
						<li className="list-inline-item"><a className="text-color d-inline-block p-2" href="#"><i
									className="ti-facebook"></i></a></li>
						<li className="list-inline-item"><a className="text-color d-inline-block p-2" href="#"><i
									className="ti-twitter-alt"></i></a></li>
						<li className="list-inline-item"><a className="text-color d-inline-block p-2" href="#"><i className="ti-github"></i></a>
						</li>
						<li className="list-inline-item"><a className="text-color d-inline-block p-2" href="#"><i
									className="ti-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	   </>
    )
}
export default Footer;