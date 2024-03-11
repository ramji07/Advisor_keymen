import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const BookKeppingServices = () => {
  return (
    <Layout title={"Efficient Accounting & Bookkeeping Services | Keyman Advisor"} description={"Optimize your financial management with Keyman Advisor's efficient accounting and bookkeeping services. Our expert team ensures accuracy, compliance, and peace of mind for your business."} keywords={"Accounting services ,Bookkeeping services ,Financial management ,tax preparation ,Financial reporting ,Small business accounting , Account reconciliation ,Payroll services ,Budgeting and forecasting ,Compliance"} >
    
    <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>Accounting and Bookkeeping Services</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>Accounting and Bookkeeping Services</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i> Accounting and Bookkeeping Services</NavLink>
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
						<h2>Overview of Accounting and Bookkeeping Services</h2>
						<p>Bookkeeping is the process of recording and organizing financial transactions, such as income and expenses and creating important financial statements like income statements and balance sheets. It involves tasks like entering data into journals and maintaining a complete record of a company's accounts. This record is necessary to comply with legal and regulatory requirements. Bookkeeping services play a crucial role in managing a company's finances effectively.</p>
						<p>In bookkeeping, there are five types of accounts: assets (company's capital and resources), revenue (money earned by the business), liabilities (obligations and debts), equity (remaining value after liabilities) and expenses (cash used for utilities and salaries). </p>
                    

     </div>
     </div>
     </div>
     </section>
      
    </Layout>
  )
}

export default BookKeppingServices
