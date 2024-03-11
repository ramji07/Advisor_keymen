import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <Layout title={"About Keyman Advisor: Your Trusted Partner in Financial Solutions"}  description={"Learn about Keyman Advisor, your trusted partner in navigating financial challenges. Discover our expertise, dedication, and commitment to helping you achieve financial success."} keywords={"Financial expertise, Trusted partner , Financial solutions, Expert guidance , Dedicated team ,Client-focused approach , Financial services ,Industry experience ,Professionalism ,Commitment to excellence"} >
      <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>About Us</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>About Us</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>Contact us</NavLink>
			</div>
		</section>
		
		
		
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-6 animate fadeInLeft">
						<h2>Company overview</h2>
						<div className="height-10"></div>
						<p>Keyman Advisory offers comprehensive financial planning services to help individuals and businesses achieve their financial goals. Our expert advisors tailor strategies to meet your unique needs.</p>
					</div>
					<div className="col-md-6 animate fadeInRight">
						<div className="image-widget">
							<img src="images/about-img1.jpg" className="img-shadow" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>


		<section>
			<div className="container">
				<ul className="highlighted-sec clearfix">
					<li>
						<div className="text-box animate bounceIn">
							<i className="icon-img-1 white"></i>
							<h4>KeymenAdvisory</h4>
						</div>
					</li>
					<li>
						<div className="text-box animate bounceIn" data-delay="100">
							<i className="icon-img-2 white"></i>
							<h4>Save Money</h4>
						</div>
					</li>
					<li>
						<div className="text-box animate bounceIn" data-delay="200">
							<i className="icon-img-3 white"></i>
							<h4>Secure Future</h4>
						</div>
					</li>
					<li>
						<div className="text-box animate bounceIn" data-delay="300">
							<i className="icon-img-4 white"></i>
							<h4>Business Services</h4>
						</div>
					</li>
					<li>
						<div className="text-box animate bounceIn" data-delay="400">
							<i className="icon-img-5 white"></i>
							<h4>Financial Services</h4>
						</div>
					</li>
					<li>
						<div className="text-box animate bounceIn" data-delay="500">
							<i className="icon-img-6 white"></i>
							<h4>Transport & Logistics</h4>
						</div>
					</li>
				</ul>
			</div>
		</section>
	

		
		
    </Layout>
  )
}

export default About
