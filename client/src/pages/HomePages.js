import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './Home.css'

const HomePages = () => {
  return (
    <Layout title={"Keyman Advisor with Financial Solutions"} description={"Navigate financial challenges confidently with Keyman Advisor. Our expert guidance and tailored strategies empower you to overcome obstacles and achieve your goals. Explore personalized solutions today"} keywords={"Financial problem-solving , Keyman insurance , Financial guidance , Expert strategies ,Wealth management , Financial planning ,Risk mitigation ,Investment solutions ,Retirement planning ,Asset protection"} >
    <Carousel style={{ marginTop: '5rem' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/main-banner/2/1.jpg"
          alt="First slide"
        />
        <div className="carousel-caption">
          <h3>
            Money Doesn’t Come <span>Without Care</span>
          </h3>
          <p style={{ color: 'black', fontSize: '20px' }}>
            Finding your next Financial Advisor is as easy as counting from one to five.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/main-banner/2/2.jpg"
          alt="Second slide"
        />
        <div className="carousel-caption">
          <h3 >
            Clients <span>Investment</span> Guidance
          </h3>
          <p>We’ll ensure you always get the best guidance; we’re with you every step of the way.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/main-banner/2/3.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption">
          <h3 >
            Friendly <span>Assistance</span>
          </h3>
          <p>
            We’ll ensure you always get the best guidance. We’re with you every step of the way.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
			
			
            <section>
				<div className="container">
					<div className="heading text-center animate bounceIn">
						<h2>Our Services</h2>
					</div>
					
					<div className="height-50"></div>
					
					<div className="row">
						<div className="col-md-4">
							<div className="text-box text-center animate fadeInUp">
								<div className="bordered-thumb"><img src="/images/img2.jpg" alt="" /></div>
								<h4>Investment Planning</h4>
								<p>From budgeting to retirement strategies, we offer comprehensive financial planning services.</p>
							</div>
						</div>
						<div className="col-md-4 animate fadeInUp" data-delay="100">
							<div className="text-box text-center">
								<div className="bordered-thumb"><img src="/images/img3.jpg" alt="" /></div>
								<h4>Retirement</h4>
								<p>Secure your future with our customized retirement planning services.</p>
							</div>
						</div>
						<div className="col-md-4 animate fadeInUp" data-delay="200">
							<div className="text-box text-center">
								<div className="bordered-thumb"><img src="/images/img5.jpg" alt="" /></div>
								<h4>Lawyers Consulting</h4>
								<p>Explore a diverse range of investment options, from bonds to commodities and investment trusts</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		
            <section className="different-services text-center parallax">
				<div className="container">
					<div className="heading animate bounceIn">
						<h1 className="color-white">We Love What We Do</h1>
						
					</div>
				</div>
			</section>
			
			
			
			<div className="container">
				<div className="funfacts bg-white overlap-top text-center">
					<div className="advisor-overlay"></div>
					<div className="funfacts-inner">
						<h2>Helping Small Businesses</h2>
						<div className="row text-center" id="counters">
							<div className="col-md-3 col-xs-6">
								<div className="counter">
								   <span className="quantity-counter1 highlight">10</span>
								   <h6 className="counter-details">Employees</h6>
								 </div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="counter">
								   <span className="quantity-counter2 highlight">50</span>
								   <h6 className="counter-details">Location</h6>
								 </div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="counter">
								   <span className="quantity-counter3 highlight">100</span>
								   <h6 className="counter-details">% Satisfaction</h6>
								 </div>
							</div>
							<div className="col-md-3 col-xs-6">
								<div className="counter">
								   <span className="quantity-counter4 highlight">60</span>
								   <h6 className="counter-details">Happy Customers</h6>
								 </div>
							</div>
						</div>
					</div>
				</div>
				
				<section className="padding-top-5">
					<div className="services highlighted margin-0 text-center">
						<div className="three-items-carousel owl-carousel">
							<div className="service-box animate fadeInUp">
								<i className="icon-img-1 white"></i>
								<h4>Advisor</h4>
								
							</div>
							<div className="service-box animate fadeInUp" data-delay="100">
								<i className="icon-img-2 white"></i>
								<h4>Save Money</h4>
								
							</div>
							<div className="service-box animate fadeInUp" data-delay="200">
								<i className="icon-img-3 white"></i>
								<h4>Secure Future</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-4 white"></i>
								<h4>Advisor</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-5 white"></i>
								<h4>Save Money</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-6 white"></i>
								<h4>Secure Future</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-7 white"></i>
								<h4>Advisor</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-8 white"></i>
								<h4>Save Money</h4>
								
							</div>
							<div className="service-box">
								<i className="icon-img-9 white"></i>
								<h4>Secure Future</h4>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			

				
			<div className="contact-us-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<h4>If you have any query for related investment ... We are available</h4>
						</div>
						<div className="col-md-3">
							<div className="text-right">
								<NavLink to="/contact" className="btn btn-primary get-in-touch" data-text="Contact us"><i className="icon-telephone114"></i>Contact us</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		
            <section className="testi-bg parallax">
				<div className="container">
					<div className="heading text-center animate bounceIn">
						<h2>Happy Customers</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="testimonial animate fadeInUp">
								<div className="testimonial-content">
									<p>"As a first-time investor, Advisor made the daunting world of investment trusts incredibly accessible. The team's expertise and patience in explaining complex concepts were invaluable. They guided me through the process, helping me make informed decisions. I'm now seeing returns that exceed my expectations</p>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="testimonials-author">
											<img className="img-circle" src="/images/review-author-img.png" alt="" />
											<p>Boris Hunt<span>(Sales Agent)</span></p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="testimonial animate fadeInUp" data-delay="100">
								<div className="testimonial-content">
									<p>"Retirement planning with Advisor has been a game-changer for me. The advisors took the time to understand my retirement goals and crafted a customized plan that aligns perfectly with my aspirations. Their attention to detail, coupled with regular check-ins, provides peace of mind</p>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="testimonials-author">
											<img className="img-circle" src="/images/review-author-img.png" alt="" />
											<p>Vinod Bahadur</p>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						
					</div>
				</div>
				
				<div className="cd-testimonials-all">
					<div className="cd-testimonials-all-wrapper">
						<ul>
							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"Executing trades with Advisor is a breeze! The user-friendly platform, coupled with real-time market insights, has been instrumental in my trading success. The support team is responsive and always ready to assist. Advisor has truly simplified the trading experience, making it enjoyable and profitable. </p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Boris Hunt<span>(Sales Agent)</span></p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do eiusmod tempor exercitationemut labore Love life’s sweetest.</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Boris Hunt<span>(Sales Agent)</span></p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"Advisor's financial planning services have been a game-changer for my family. The comprehensive approach, attention to detail, and a clear roadmap for our financial future have exceeded our expectations. The advisors are not just experts; they genuinely care about our financial well-being. It's a partnership we value, and we're grateful to have Advisor on our side."</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Ankesh Dhariya</p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"The team at Advisor is not just about numbers; they genuinely care about their clients. I recently had a major life change, and they went above and beyond to adjust my financial plan accordingly. Their flexibility and understanding make them more than just financial advisors—they're partners in your financial journey."</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Linda Thompson</p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"Retirement planning with Advisor has been a game-changer for me. The advisors took the time to understand my retirement goals and crafted a customized plan that aligns perfectly with my aspirations. Their attention to detail, coupled with regular check-ins, provides peace of mind</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Boris Hunt<span>(Sales Agent)</span></p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"As a first-time investor, Advisor made the daunting world of investment trusts incredibly accessible. The team's expertise and patience in explaining complex concepts were invaluable. They guided me through the process, helping me make informed decisions. I'm now seeing returns that exceed my expectations</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Boris Hunt<span>(Sales Agent)</span></p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>I highly recommend Advisor to anyone seeking comprehensive and reliable financial services. Thank you, Advisor, for being a trustworthy partner in my financial journey!"</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>Boris<span>(Sales Agent)</span></p>
											</div>
										</div>
									
									</div>
								</div>
							</li>

							<li className="cd-testimonials-item">
								<div className="testimonial">
									<div className="testimonial-content">
										<p>"I've had experience with various financial services, but Advisor stands out for their commitment to innovation. Their user-friendly trading platform and up-to-date market insights have significantly improved my trading experience. The support team is quick to address any concerns. A reliable choice for traders."</p>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="testimonials-author">
												<img className="img-circle" src="/images/review-author-img.png" alt="" />
												<p>David Chen</p>
											</div>
										</div>
									
									</div>
								</div>
							</li>


							
						</ul>
					</div>

					<NavLink to="" className="close-btn">Close</NavLink>
					
				</div>
				
			</section>
			
    </Layout>
  )

}

export default HomePages
