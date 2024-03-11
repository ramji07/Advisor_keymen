import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const GstRegistration = () => {
  return (
    <Layout title={"GST Registration Advisory Services | Keyman Advisor"} description={"Get your business GST-ready with Keyman Advisor's expert registration advisory services. Our experienced advisors guide you through the registration process efficiently, ensuring compliance and peace of mind."} keywords={"GST registration advisor ,Goods and Services Tax registration ,GST registration assistance ,GST registration consultant ,GST registration process ,GST registration support ,Register for GST ,GST enrollment services ,GST registration requirements ,GST registration guidance"}>

	
      <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>GST Registration</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>GST Registration</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>GST Registration</NavLink>
			</div>
		</section>
		
		
		
		<section>
			<div className="container">
				
				<div className="row">
							
					<div className="col-md-12 animate fadeInRight">
						<div className="single-item-carousel classic-arrows2 owl-carousel">
							<img src="images/services-img1.jpg" alt=""/>
							<img src="images/services-img1.jpg" alt="" />
							<img src="images/services-img1.jpg" alt="" />
						</div>
						<br/>
						<br/>
						<h2>Overview of GST Registration</h2>
						<p>GST registration in India is a mandatory requirement for businesses operating in India. It is a unified tax system that replaced multiple indirect taxes like VAT, service tax and excise duty and enables businesses to collect and remit GST to the government.</p>
						<p>To register for GST in India, businesses need to submit an online application on the GST portal. The application requires details such as business name, address, PAN (Permanent Account Number) and bank account information. After submission, the application is verified by the tax authorities and once approved, a unique GSTIN (GST Identification Number) is provided to the business. </p>
						<br />
						<h3>What are the Benefits of GST Registration?</h3>
						<p>Following are the merits of opting for GST registration in India: </p>
						<ul style={{marginLeft: '10px'}}>
							<li> Simplified Taxation Services</li>
							<li> Lower Prices for Goods and Services</li>
							<li> Assists in preventing time-consuming tax services</li>
							<li> Trying to Cut Down on Corruption and Sales Without Receipts</li>
							<li> Process of Taxation is uniform</li>
							<li> Limit for Registration is higher</li>
							<li> Small Business Composition Scheme</li>
							<li>Lesser compliances</li>
							<li> Helpful for unorganized sector</li>
						</ul>
						<br />
						<br />
						 <h3>What are the Various Types of GST?</h3>
						 <p>The following GST classifications are commonly observed in India:</p>
						<div className="row">
							<div className="col-md-6">
								<div className="chart-widget">
									<h6>1.Central GST (CGST):</h6>
									<p>CGST is the term used for Central Goods and Services Tax, which is levied by the central government on intrastate sales of goods.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="chart-widget">
									<h6>2. State GST (SGST):</h6>
									<p> State Goods and Services Tax is collected by the State Government and imposed on transactions occurring within the state's administrative boundaries.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="chart-widget">
								  <h6>3.Interstate GST(IGST):</h6>
									<p>The GST levied on transactions between two states, including exports, imports and interstate supply of goods and services, is known as interstate GST or integrated goods and services tax (IGST). The collection of IGST is done by the central government in India.</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="chart-widget">
									<h6>4. Union Territory GST (UTGST):</h6>
									<p>Union Territory Goods and Services Tax  applies to business transactions in Union Territories for both goods and services, in addition to CGST. In Union Territories such as Andaman and Nicobar Islands, Lakshadweep, Daman Diu, Chandigarh and Dadra & Nagar Haveli, IGST is imposed on the supply of goods.</p>
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

export default GstRegistration
