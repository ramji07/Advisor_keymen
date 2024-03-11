import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
       <footer id="footer">
				<div className="container">
					<div className="footer-top clearfix">
						
						<div className="row">
							<div className="col-md-3 col-sm-3">
								<div className="footer-logo animate fadeInLeft"><NavLink to="/"><img src="/images/logo1 (3).png" alt="" /></NavLink></div>
							</div>
							<div className="col-md-9 col-sm-9">
								<p>Advisor offers comprehensive financial planning services to help individuals and businesses achieve their financial goals. Our expert advisors tailor strategies to meet your unique needs.</p>
							</div>
						</div>
					
						<div className="height-50"></div>
						
						<div className="footer-left">
							
							<div className="row">
								<div className="col-md-6">
									<div className="usefull-links-widget clearfix">
										<h4>Use full Links</h4>
										<ul>
											<li><NavLink to="/">Home</NavLink></li>
											<li><NavLink to="/about">About Us</NavLink></li>
											<li><NavLink to="/login">Login</NavLink></li>
											<li><NavLink to="/contact">Contact Us</NavLink></li>
										</ul>
										<ul>
											<li><NavLink to="/japan-desk">Japan Desk</NavLink></li>
											<li><NavLink to="/Singapore-desk">Singapore Desk</NavLink></li>
											<li><NavLink to="/Nri-Desk">NRI Desk</NavLink></li>
											<li><NavLink to="/north-america-desk">North America Desk</NavLink></li>
											<li><NavLink to="/european-desk">European Desk</NavLink></li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<ul className="social" style={{marginTop: '100px'}}>
										<li className="animate bounceIn"><NavLink to="https://www.facebook.com/KeymenAdvisory" className="facebook" target="_blank"><i className="icon-facebook-1"></i></NavLink></li>
										<li className="animate bounceIn" data-delay="100"><NavLink to="https://twitter.com/k_keymen" className="twitter" target="_blank"><i className="icon-twitter-1"></i></NavLink></li>
										<li className="animate bounceIn" data-delay="200"><NavLink to="https://www.instagram.com/keymenadvisory/" className="google-plus" target="_blank"><i className="icon-instagram"></i></NavLink></li>
										<li className="animate bounceIn" data-delay="300"><NavLink to="https://www.linkedin.com/company/keymenadvisory/" className="linkedin" target="_blank"><i className="icon-linkedin3"></i></NavLink></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer-right">
							<div className="newsletter-widget">
								<h4>Our Newsletter</h4>
								<p>Navigating Your Financial Future with Precision.</p>
								<div className="form">
									<p className="subscribe_success" id="subscribe_success" style={{display:'none'}}></p>
									<p className="subscribe_error" id="subscribe_error" style={{display:'none'}}></p>
								
									<form id="subscribe_form"  action="/about" method="post" >
										<input type="text" data-delay="300" placeholder="Your Name" name="name" id="subscribe_name"  className="input"  required />
										<input type="text" data-delay="300" placeholder="Email Address" name="email" id="subscribe_email" className="input" required />
										<button className="btn btn-primary" name="Subscribe" type="submit" data-text="Subscribe">Subscribe</button>
									</form>
								
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6"><p>Coyright © 2024 Incubation Master All rights reserved.</p></div>
							<div className="col-md-6 col-sm-6"><p className="text-right">Designed by <NavLink to="#">Incubation Team</NavLink></p></div>
						</div>
					</div>
				</div>
				
			</footer>


    </>
  )
}

export default Footer
