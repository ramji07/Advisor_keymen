import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
const Contact = () => {
  
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')


	const contactHandler = async (e) => {
        e.preventDefault();
		try {
			const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/contact`,{name , email , phone , message})

			if(res.data.success)
			{
				toast.success(res.data.message)
			}else{
				toast.error(res.data.message)
			}


		} catch (error) {
			
			toast.error('Internal Server Error')

		}
 
	}

  return (
    <Layout title={"Get in Touch with Keyman Advisor for Personalized Financial Guidance"} description={"Contact Keyman Advisor today for personalized financial guidance tailored to your needs. Our dedicated team is here to assist you with expert advice and solutions. Reach out now to start your journey towards financial success." }  keywords={"Contact Keyman Advisor today for personalized financial guidance tailored to your needs. Our dedicated team is here to assist you with expert advice and solutions. Reach out now to start your journey towards financial success."} > 
    
    <section className="subpage-header">
			<div className="container">
				<div className="site-title clearfix">
					<h2>Contact Us</h2>
					<ul className="breadcrumbs">
						<li><NavLink to="/">Home</NavLink></li>
						<li>Contact Us</li>
					</ul>
				</div>
				
			</div>
		</section>
		
      
		
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6 animate fadeInLeft">
						<h3>Your  Queries</h3>
						<div className="row">
							<div className="col-md-4 col-sm-4">
								<img src="images/sales-quries-img.jpg" className="quries-img" alt="" />
								<div className="height-20"></div>
							</div>
							<div className="col-md-8 col-sm-8">
								<p>You have questions about our financial services, need assistance with your account, or have general inquiries, we're here to help. Please feel free to reach out using the contact information provided above.</p>
							</div>
						</div>
						<div className="height-20"></div>
						<div className="height-50"></div>
					</div>
					
					
					<div className="col-md-6 col-sm-6 animate fadeInRight">
					
						<p className="success" id="success" style={{display:'none'}}></p>
						<p className="error" id="error"  style={{display:'none'}}></p>
					
						<form className="contact-form" onSubmit={contactHandler} >
							<div className="row">
								<div className="col-md-6">
									<input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
								</div>
								<div className="col-md-6">
									<input type="text"  placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<input type="text"  placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" required />
								</div>
							</div>
							<textarea data-delay="500" className="required valid" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" name="message" required></textarea>
							<button className="btn btn-primary"  type="submit" data-text="Send Message">Send Message</button>
						</form>
						
						
					</div>
					
					
				</div>
			</div>
		</section>
			
			
      
    </Layout>
  )
}

export default Contact
