import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const PanTanRegistration = () => {
  return (
    <Layout title={"PAN Application Services | Keyman Advisor"} description={"Get your PAN quickly and hassle-free with Keyman Advisor's efficient PAN application services. Our expert advisors guide you through the application process, ensuring accuracy and compliance."}  keywords={"PAN application advisor,PAN card application services,Apply for PAN online,PAN registration assistance,PAN application consultant,PAN application process,PAN card issuance,PAN card renewal services,PAN card correction,PAN application guidance"} >
       <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>PAN/TAN Application</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>PAN/TAN Application</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>PAN/TAN Application</NavLink>
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
						<h2>Overview of PAN/TAN</h2>
						<p>PAN is mandatory for almost all financial transactions and also for opening a bank account. It is also required by an individual so as to receive a taxable salary or professional fees. High-value transactions cannot be carried out without a PAN Card. PAN is governed as per section 139 A of the Income Tax Act, 1961 under the supervision of a Central Board of Direct Taxes (CBDT).</p>
						<p>TAN stands for Tax Deduction and Collection Account Number. It is governed under section 203A of the Income Tax Act, 1961 under the supervision of the Central Board of Direct Taxes (CBDT). TAN is required by the businesses who deduct TDS from the vendor invoices or salaries.</p>
						<br />
						<h3>What Are the Benefits of PAN/TAN?</h3>
						<ul style={{marginLeft: '10px'}}>
							<li> PAN Card is legally accepted as a Photo Identification Proof.</li>
							<li>Tax or TDS amount is lost, if a person doesn't have a PAN number at the time of deduction.</li>
							<li>PAN Card is a mandated document to open a Bank Account but however, an individual can open a bank account without a PAN card but for a limited amount of transactions only.</li>
							<li> High-value assets are bought and sold with the help of a PAN Card only.</li>
							<li> Filing of Income Tax Return is only possible with PAN number only.</li>
							<li>TAN number is compulsory for businesses at the time of carrying out a transaction that includes TDS.</li>
						</ul>
						<br />
						<br />
						 <h3>Documents Required for Business?</h3>
						 <p>The following GST classifications are commonly observed in India:</p>
						<div className="row">
							<div className="col-md-12">
								<div className="chart-widget">
								<ul>
									<li>Registration Certificate (Certificate of Incorporation, Partnership Deed, etc)</li>
									<li>Bye laws of the business (Memorandum & Articles of Association etc)</li>
									<li>Electricity and water bill that is not more than 2 months old.</li>
									<li>In case of Individual (Self Attested Copy of ID and Address Proof)</li>
								</ul>
								</div>
							</div>
						</div>
						<br />
						<br/>
						 <h4 >Procedure for PAN/TAN</h4>
						<div className="row">
							<div className="col-md-12">
								<div className="chart-widget" >
								 <ul>
									<li>Login to the Income Tax Portal and fill Form-49A or Form-49B.</li>
									<li>Fill in the respective details and submit the form.</li>
									<li>After successfully filling in the required details online, the signature of authorized signatory is required on the acknowledgement copy.</li>
									<li>Post the signed form at the Income Tax Department.</li>
									<li>PAN or TAN id issued by the department after verifying the documents. The procedure generally takes approximately 10-15 days.</li>
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

export default PanTanRegistration
