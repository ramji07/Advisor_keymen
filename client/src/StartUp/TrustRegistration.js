import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
const TrustRegistration = () => {
  return (
    <Layout title={" Expert Trust Registration Services | Keyman Advisor"} description={"Start your philanthropic journey with expert trust registration services from Keyman Advisor. Our experienced advisors ensure a smooth registration process and compliance for your charitable trust."} keywords={"Trust registration advisor ,Trust registration services ,Register trust online ,Charitable trust registration,Trust formation consultant,Trust registration process,Benefits of trust registration,Trust compliance requirements,Trust registration guidance,Expert trust advisors"}>


<section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>Trust Registration</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>Trust Registration</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>
				Trust Registration</NavLink>
			</div>
		</section>
		
		
		
		<section>
			<div className="container">
				
				<div className="row">
				
					<div className="col-md-12 animate fadeInRight">
						<div className="single-item-carousel  owl-carousel">
							<img src="images/services-img1.jpg" alt="" />
						</div>
						<br />
						<br />
						<h2>Overview of Trust Registration</h2>
						<p>In India, trust registration is governed by the Indian Trust Act of 1882, simplifying the necessary legal processes. The Trust, essentially an organizational structure, involves the transfer of property from the Trust's owner to the designated Trustee. Its purpose lies in ensuring the equitable distribution of the Trustor's assets among specific beneficiaries, following the Trust deed's conditions.</p>
						<p>Upon establishment, the Trustor appoints a trustee responsible for managing and eventually allocating the Trustor's assets to the chosen beneficiaries. In India, trust beneficiaries are typically heirs, family members or charitable organizations. </p>
						<br />
						<h3>What are the Benefits of Trust Registration?</h3>
						<p>Given below are the various advantages of trust registration in India: </p>
						<ul style={{marginLeft:"10px"}}>
							<li> To Involve in Charitable Undertaking
								<p>
									Trust registration enables individuals to set up charitable trusts to benefit both concerned beneficiaries and a chosen charity. This allows the use of nonessential assets like stocks or real estate to aid society through various charitable activities.


								</p>
							</li>
							<li> Accessibility to Tax Exemptions
								<p>
									Registered trusts in India gain access to multiple tax exemptions provided by the Income-tax department. As the primary objective of a trust is not profit generation, they become eligible for various tax relaxations, ensuring better coverage for the settlor, beneficiaries and trust assets from stringent tax provisions.
								</p>
								 </li>
							<li> Provide Benefits to Financially Aggrieved Individuals
								<p>
									Registered trusts play a vital role in providing much-needed financial aid to the underprivileged and the masses through charitable activities.
								</p>
							</li>
						
						</ul>
						<br />
						<br />
						 <h3>What are the Essential Eligibility Criteria for Trust Registration?</h3>
						 <p>The following is the eligibility criteria for trust registration:</p>
					
						<div className="row">
							<div className="col-md-12">
								<div className="chart-widget">
								<ul>
									<li> Number of Persons: When forming the trust, it is required that there must be at least two or more persons involved.</li>
									<li> Compliance with Indian Trusts Act, 1882: The trust must be formed in accordance with the provisions outlined in the Indian Trusts Act of 1882,ensuring compliance with the relevant legal framework.</li>
									<li>Certificate of Incorporation and MoA/AoA: Section 8 companies are required to provide a Certificate of Incorporation and copies of the MoA and AoA of the company.</li>
									<li> Disqualification: It is essential that none of the parties involved in the trust formation are disqualified under any law currently in force in India, safeguarding the trust's legitimacy.</li>
									<li> Alignment with Indian Laws: The objectives of the trust must not contravene any existing laws in force in India.</li>
									<li> Valid Purposes: If the trust has more than two purposes, both objectives must be valid. If one purpose is valid while the other is invalid, the trust cannot be formed.</li>
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

export default TrustRegistration
