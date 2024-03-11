import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const NriDesk = () => {
  return (
    <Layout title={"Expert NRI Advisory Services | Keyman Advisor"} description={"Unlock investment opportunities and financial solutions for NRIs with Keyman Advisor's expert NRI International Desk. Our specialized advisors provide tailored guidance for Non-Resident Indians looking to invest or manage finances in India."} keywords={"NRI advisory services,NRI investment advisory,NRI financial planning,NRI wealth management,NRI tax planning,NRI property investment,NRI banking services,NRI portfolio management,NRI repatriation guidance,NRI advisory experts"}>

<section className="subpage-header">
				<div className="container">
					<div className="site-title clearfix">
						<h2>NRI Business Desk</h2>
						<ul className="breadcrumbs">
							<li><NavLink to="/">Home</NavLink></li>
							<li>NRI Business Desk</li>
						</ul>
					</div>
					<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>Contact us</NavLink>
				</div>
			</section>
			
			<section>
				<div className="container">
					
					<div className="row">
						
						<div className="col-md-8 animate fadeInRight">
							<div className="single-item-carousel classic-arrows2 owl-carousel">
								<img src="images/nri.jpeg" alt="" />
							</div>
						   
							<br />
							<br />
							<h2 > NRI Business Desk</h2>
							<p>The business opportunities in India have extensively increased creating an investment-friendly environment for Non-Resident Indians (NRIs) considering the economic, demographic, geographical, and government initiatives taken in recent days. The Government of India took several economic reforms to attract foreign investment in India by offering facilities for NRIs in terms of investment benefits, tax benefits etc. However, the Income Tax Rules applicable to NRIs are different from those applicable to Resident Indians.</p>
							<p>NRI taxation in India is a constant matter of concern for the vast number of Indians living all over the world who have to send money home and make investment planning for themselves and their family. The concept of ‘Deemed Residency’ announced in the Finance Act 2020 has also created some ambiguity related to the residency of individuals and taxation of income in India. </p>
							<p>ASC Group’s NRIs Business Desk has a rich experience of 25 years in providing financial, management, legal, consulting, and advisory services to NRI Company Formation in India. We have a dedicated team of professionals & experts who serve to NRIs on several matters. The detailed list of services being provided by ASC to NRIs is as under:
			
							</p>
							<br />
							<div>
								<h3>A. Trust & family settlement  </h3>
								<ul style={{marginLeft: '40px'}}>
									<li>Creation of trust (private/family or public) and HUF (Hindu Undivided Family)</li>
									<li>Management of trusts settled in India or abroad </li>
									<li>Drafting of will, power of attorney, trust deed, partition deed, lease deed, succession certificate, family settlement agreement or any other agreement  </li>
									<li>Advisory on transfer and partition of land & property, succession planning, inheritance planning, estate planning, etc.
									</li>
									<li>Representation services before various authorities such as Sub Divisional Magistrate, Registrar, Courts, etc.</li>
								</ul>
							
									
							</div>
							<br />
					
						   
							<h3 style={{marginTop: '30px'}}>B. Property and Assets Management</h3>
							<div className="row">
								<div className="col-md-12">
									<ul style={{marginLeft: '40px'}}>
										<li>Identification of buyer & seller of the property
										</li>
										<li>Carrying physical inspection of property and title due diligence
										</li>
										<li>Verifying land ownership details from land records
										</li>
										<li>Vetting & drafting of legal agreements for sale/purchase of immovable property
										</li>
										<li>Obtaining a home loan from banks or financial institutions
										</li>
										<li>Mutation of property
										</li>
										<li>Valuation of property
										</li>
										<li>Management of immovable property like a collection of rent, finding new tenants, handling normal tear & wear of property, property insurance, etc.
										</li>
										<li>Wealth management by investment in shares, debentures, mutual funds, government securities, etc.
										</li>
										<li>Assisting in the transfer of shares, the transmission of shares, DEMAT of shares, conversion of shares & debentures, etc.
										</li>
										<li>Assisting in the recovery of unclaimed dividend, matured insurance, provident fund, mutual funds, deposits, inoperative bank accounts, etc.
										</li>
									</ul>
								</div>
								
							</div>
							<div className="height-50"></div>
							<h3 style={{marginTop: '30px'}}>C. Tax Returns & Assessments for NRI Company Formation in India </h3>
							 <ul style={{marginLeft: '40px'}}>
								<li>Obtaining Permanent Account Number and Tax Deduction Account Number
							</li>
							<li>Filing house tax returns of property located in India
							</li>
							<li>Determining residential status including Deemed Residency as per Indian Income Tax Laws
							</li>
							<li>Computation of income tax liability in India after taking foreign tax credits
							</li>
							<li>Compilation of information on foreign assets for disclosure
							</li>
							<li>Filing income tax returns
							</li>
							<li>Handling withholding tax compliances
							</li>
							<li>Obtaining No Objection Certificate (NOC) from Indian Income Tax Department
							</li>
							<li>Handling tax assessments/re-assessments or investigations before tax authorities, appellate tribunals, high court, the supreme court
							</li>
							<li>Tax planning & consulting services about overseas and domestic laws of India like double taxation avoidance agreements, RBI/FEMA regulations including repatriation of funds, etc.
							</li>
						 </ul>
						 <h3 style={{marginTop: '30px'}}>D. Incidental Services						 </h3>
						 <ul style={{marginLeft: '40px'}}>
							<li>Maintaining books of accounts in case of business or profession in India
							</li>
						
						<li>Rendering insolvency services in case of outstanding debts</li>
						<li>Assisting to get a refund of investment in delayed or halted real estate projects</li>
						<li>Handling dispute resolutions or settlement with builder/developer/colonizer and filing suits</li>
						<li>Rendering advisory services on Real Estate (Regulation and Development) Act, 2016</li>
						<li>Assistance in opening NRE/NRO bank account and making a contribution in Capital Gain Account Scheme</li>
						<li>Obtaining OCI card (Overseas Citizen of India) and PIO card (Person of Indian origin)</li>
						
						<li>Obtaining DSC (Digital Signature Certificate) and DIN (Director Identification Number)</li>
						<li>Co-ordination & assistance to overseas consultants/lawyers for complying with obligations overseas</li>
					 </ul>
							
							<br />
							
						</div>
					</div>
					
				</div>
			</section>




      
    </Layout>
  )
}

export default NriDesk
