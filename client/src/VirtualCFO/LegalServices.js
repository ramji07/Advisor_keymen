import React from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const LegalServices = () => {
  return (
    <Layout title={"Expert Legal Services for Startups | Keyman Advisor"} description={"Ensure legal compliance and protect your startup with Keyman Advisor's expert legal services. Our experienced advisors provide tailored solutions to address legal challenges and support your growth."} keywords={"Legal services for startups,Startup legal advice,Startup legal assistance,Startup legal counsel,Legal support for startups ,Startup law firm ,Legal guidance for startups ,Startup legal solutions ,Startup attorney services ,Legal compliance for startups"}>

<section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>Legal Services for  Start-ups</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>Legal Services for  Start-ups</li>
					</ul>
				</div>
				<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i> Legal Services for  Start-ups</NavLink>
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
						<h2>Overview of Legal Services for  Start-ups</h2>
						<p>StartupFino specializes in providing legal services to startups to make their enterprise function in an efficient and hassle-free manner. The legal services package that startups can avail at StartupFino include HR policies, customer service agreements, vendor agreements, maternity policy, leave policy for employees, legal agreements ranging from founders’ agreement to employment agreements.</p>
						<p>The legal services package that startups can avail at StartupFino include:
							<li> HR policies for startups.</li>
								<li>ESOP policies for startups.</li>
							<li>Customer service agreements for start-ups.</li>
							<li>Vendor agreements for start-ups.</li>
							<li>Maternity policy for women employees of startups.</li>
							<li>Leave policy for employees of startups.</li>
							<li>Founders’ Agreements for start-ups.</li>
							<li>Other agreements of legal nature like employment agreements.</li>
							 </p>
						
						
						
				</div>
				
			</div>
			</div>
		</section>

      
    </Layout>
  )
}

export default LegalServices
