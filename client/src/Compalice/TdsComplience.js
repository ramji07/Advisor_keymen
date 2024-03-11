import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const TdsComplience = () => {
  return (
    <Layout title={"TDS Compliance with Expert Guidance | Keyman Advisor"} description={"Stay compliant with TDS regulations using Keyman Advisor's expert advisory services. Our experienced advisors provide tailored solutions to help you navigate TDS compliances efficiently."} keywords={"TDS compliance advisor,TDS compliance services,Tax deducted at source advisor,TDS regulations guidance,TDS advisory services,TDS compliance solutions,TDS filing assistance,TDS compliance consultant,TDS deduction guidance,Expert TDS advisors"}>
      <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>TDS Compliances</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>TDS Compliances</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i> TDS Compliances</NavLink>
			</div>
		</section>
		
		
		
		<section>
			<div className="container">
				
				<div className="row">
					
					<div className="col-md-8 animate fadeInRight">
						<div className="single-item-carousel  owl-carousel">
							<img src="images/services-img1.jpg" alt="" />
						</div>
						<br />
						<br />
						<h2>Overview of TDS Compliances</h2>
						<p>TDS or Tax Deducted at Source, is the amount of tax deducted from money paid at the time of making specified payments such as rent, commission, professional fees, salary, interest and so on.</p>
						<p>TDS is deducted when a salary or life insurance policy is paid. The TDS sum is then submitted with the Income Tax department. TDS is a method of automatically paying a portion of the tax to the Income Tax department. As a result, TDS is regarded as a method of reducing tax avoidance. </p>



				</div>
				</div>
				</div>
				</section>










    </Layout>
  )
}

export default TdsComplience
