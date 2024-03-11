import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const aRegistration = () => {
  return (
    <Layout title={"12A and 80G Registration Guide | Keyman Advisor"} description={"Discover how to obtain 12A and 80G registration for your organization with Keyman Advisor's comprehensive guide. Maximize tax benefits and streamline your charitable activities today."} keywords={"12A registration ,80G registration ,Tax benefits ,Charitable organizations ,Nonprofit registration ,Tax exemption ,Donation ,benefits ,Philanthropy ,Legal compliance , Tax savings"} >
       <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>12A and 80G Registration</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="index.php">Home</NavLink></li>
						<li>12A and 80G Registration</li>
					</ul>
				</div>
				<NavLink to="contact-us.php" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>12A and 80G Registration</NavLink>
			</div>
		</section>
		
		
		
		<section>
			<div className="container">
				
				<div className="row">

					<div className="col-md-8 animate fadeInRight">
						<div className="single-item-carousel classic-arrows2 owl-carousel">
							<img src="images/services-img1.jpg" alt="" />
						</div>
						<br />
						<br />
						<h2>Overview of 12A and 80G Registration</h2>
						<p>For NGOs in India, Sections 12A and 80G registrations are of significant benefit. Under Section 12A of the Income Tax Act, 1961, NGOs are granted a one-time tax exemption on their surplus income, effectively relieving them from tax obligations.</p>
						<p>On the other hand, an 80G registration enables NGOs to issue tax-exemption certificates to donors, motivating them to contribute funds. Donors who contribute to NGOs with an 80G certificate can enjoy significant deductions from their taxable income. These registrations play a pivotal role in fostering transparency, accountability and financial support for the charitable and non-profit sector, bolstering their impact in the nation. </p>
						<p>The Income Tax Department issues an 80G Certificate to non-governmental organizations (NGOs) like charitable trusts or Section 8 Companies which is meant to incentivize donors to contribute funds to these non-profit organizations.</p>
						<br />
						<h3>What are the Benefits of 12A and 80G Registration?</h3>
						<p>The benefits of registration under Sections 12A and 80G are as follows: </p>
						<ul style={{marginLeft: '10px'}}>
							<li> Eligibility for Government Funding</li>
							<li>Grants and Aid</li>
							<li>Continuity of Exemption</li>
							<li>Enhances Credibility</li>
							<li>Administrative Benefits</li>
							<li>Donor Attraction</li>
							<li>Tax Deduction</li>
							<li>Increased Funding Potential</li>
							<li>Wider Donor Base</li>
							<li>Long-Term Support</li>
						</ul>
						<br />
						<br />
						 <h3>What are the Documents Required for 12A and 80G Registration?</h3>
						 <p>Documents Required for 12A registration are:</p>
					
						<div className="row">
							<div className="col-md-12">
								<div className="chart-widget">
								<ul>
									<li>Trust Deed: Documental evidence, such as the Trust Deed, is needed to demonstrate the creation of the Trust.</li>
									<li>Registration Certificate and Memorandum of Association (MOA): For NGOs operating as societies, the Registration Certificate and MOA should be submitted.</li>
									<li>Certificate of Incorporation and MoA/AoA: Section 8 companies are required to provide a Certificate of Incorporation and copies of the MoA and AoA of the company.</li>
									<li>Form 10A: The application form for 12A registration, known as Form 10A, should be filled out accurately with all the necessary details.</li>
									<li>Three-Year Bank Account Statement: A bank account statement for the Trust reflecting transactions for the past three years must be provided to showcase the financial activities and stability of the organization.</li>
									<li>PAN of the Organization: The PAN (Permanent Account Number) of the organization should be submitted as proof of identification.</li>
								</ul>
								</div>
							</div>
						</div>
						
						</div>

					</div> 
				</div>
				
		
		</section>
    </Layout>
  )
}

export default aRegistration
