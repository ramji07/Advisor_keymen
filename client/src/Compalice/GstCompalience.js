import React from 'react'
import Layout from '.././Components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const GstCompalience = () => {
  return (
    <Layout title={"Streamline Your GST Compliance with Keyman Advisor | Expert Solutions"} description={"Simplify GST compliance with Keyman Advisor's expert services. Our team ensures accurate filing, timely returns, and seamless compliance, helping your business stay on track and avoid penalties."} keywords={"GST compliance services,Goods and Services Tax compliance,GST filing assistance,GST return preparation,GST audit support,GST registration,Tax compliance solutions,Indirect tax compliance,GST advisory services,GST consulting"} >



<section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>GST Compliance</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>GST Compliance</li>
					</ul>
				</div>
				<NavLink to="contact-us.php" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i> GST Compliance</NavLink>
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
						<h2>Overview of GST Compliance</h2>
						<p>Indian Government has introduced the concept of Goods and Services Tax (GST) with effect from 1st July 2017. It is implemented on all business activities performed in India. Today, GST is a PAN-India single unified tax imposed on both goods and services. This is levied only on ‘value added’ to goods and services at each stage in the economic supply chain. This new GST regime has introduced GST compliance guidelines that mandate businesses to remain obedient. However, these rules are updated from time to time based on the requirements set by the government.</p>
						<p>GST tax system was a much-needed reform which has introduced transparency and also eased administrative paperwork. Since its implementation, the new system has been good news for most businesses especially for startups, small and medium-sized enterprises that rely on technology to take care of tasks like GST registration and filing GST tax returns online. </p>
						<p>As per the GST guidelines, every business is liable to get register under GST Act. Once the business is registered, they must abide by various GST compliance, including:</p>
						
				</div>
				
			</div>
			</div>
		</section>
      
    </Layout>
  )
}

export default GstCompalience
