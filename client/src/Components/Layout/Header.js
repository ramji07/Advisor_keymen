import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';




const Header = () => {
  //eslint-disable-next-line
   const [Auth ,setAuth] = useAuth()
  

   const LogoutHandler = () => {
    setAuth({
      ...Auth,
      Admin:null,
      token:''
    })

    localStorage.removeItem('auth')
    alert('logout Successfully')
   }
  return (
    <>
   
                    <header id="header" className="header-two h-two-h">
                                
                                <div className="top-bar-simple clearfix">
                                  <div className="container">
                                    <p>connect@keymenadvisory.com</p>
                                    <ul className="social">
                                      <li><NavLink to="https://www.facebook.com/KeymenAdvisory" className="facebook" target="_blank"><i className="icon-facebook-1"></i></NavLink></li>
                                      <li><NavLink to="https://twitter.com/k_keymen" className="twitter" target="_blank"><i className="icon-twitter-1"></i></NavLink></li>
                                      <li><NavLink to="https://www.instagram.com/keymenadvisory/" className="google-plus" target="_blank"><i className="icon-instagram"></i></NavLink></li>
                                      <li><NavLink to="https://www.linkedin.com/company/keymenadvisory/" className="linkedin" target="_blank"><i className="icon-linkedin3"></i></NavLink></li>
                                    </ul>
                                  </div>
                                </div>
                                
                                
                                <div className="container-fluid">
                                  
                                  <div className="header clearfix">
                                    
                                    <NavLink to="/" className="logo"><img src="/images/logo1 (3).png" width="150px" alt="" style={{marginLeft: '50px'}} /></NavLink>
                                    
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-nav" aria-expanded="false">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                    </button>
                                    
                                    <div className="search-btn">
                                      <NavLink to="{}" className="search-trigger"><i className="icon-icons185"></i></NavLink>
                                    </div>
                                    
                                    
                                    <div className="search-container">
                                      <i className="fa fa-times header-search-close"></i>
                                      <div className="search-overlay"></div>
                                      <div className="search">
                                        <form>
                                          <label>Search:</label>
                                          <input type="text" placeholder="" />
                                          <button><i className="fa fa-search"></i></button>
                                        </form>
                                      </div>
                                    </div>
                                    
                                    
                                   
                                    
                                    
                                  </div>
                                  
                                  
                                  <nav className="main-nav navbar-collapse collapse" id="primary-nav" >
                                    <ul className="nav nav-pills">
                                      <li className="dropdown active"><NavLink to="/">Home</NavLink>
                                        
                                      </li>
                                      <li className="dropdown"><NavLink to="#">    Start Up <i className="fa fa-caret-down"></i></NavLink>	
                                                            <ul className="dropdown-menu">
                                            <li><NavLink to="/LLP-Registration">Limited Liability Partnership (LLP)</NavLink></li>
                                            <li><NavLink to="/onePersonCompany">One Person Company (OPC)</NavLink></li>
                                            <li><NavLink to="/PartnershipFirm">Partnership Firm Registration</NavLink></li>
                                            <li><NavLink to="/Section8Company">Section 8 Company (NGO)</NavLink></li>
                                            <li><NavLink to="/TrustRegistration">Trust Registration</NavLink></li>
                                            <li><NavLink to="/SocietyRegistration">Society Registration</NavLink></li>
                                            <li><NavLink to="/PartnershipLLPRegistration">Partnership to LLP Registration</NavLink></li>
                                            <li><NavLink to="/BusinessConsultantStartups">Business Consultant for Startups</NavLink></li>
                                            </ul>
                                          
                                      </li>
                                          <li className="dropdown"><NavLink to="#">Tax <i className="fa fa-caret-down"></i></NavLink>
                        
                                                            <ul className="dropdown-menu">
                                            <li><NavLink to="/gst-Registration">GST Registration</NavLink></li>
                                            <li><NavLink to="/panApplication">PAN/TAN Application</NavLink></li>
                                            <li><NavLink to="/12ARegistration">12A and 80G Registration</NavLink></li>
                                          
                                          
                                            </ul>
                                        </li>	
                        
                                          <li className="dropdown"><NavLink to="#">Compliance <i className="fa fa-caret-down"></i></NavLink>
                        
                                                            <ul className="dropdown-menu">
                                            <li><NavLink to="/Account-Receivable-management">Accounts Receivable Management</NavLink></li>
                                            <li><NavLink to="/Account-Payable-management">Accounts Payable Management</NavLink></li>
                                            <li><NavLink to="/Account-Book-Keeping-Services"> Accounting and Bookkeeping Services</NavLink></li>
                                            <li><NavLink to="/GST-Compliance">GST Compliance </NavLink></li>
                                            <li><NavLink to="/IncomeTax-Compliances">Income Tax Compliances</NavLink></li>
                                            <li><NavLink to="/TDS-Compliances">TDS Compliance</NavLink></li>
                                            <li><NavLink to="/Accounting-Outsourcing-Services">Accounting Outsourcing Services </NavLink></li>
                                          
                                          
                                            </ul>
                                        </li>	
                                                        
                                      
                                      <li className="dropdown"><NavLink to="#">Virtual CFO <i className="fa fa-caret-down"></i></NavLink>
                                        <ul className="dropdown-menu">
                                          <li><NavLink to="/VirtualCFO"> Virtual CFO Services</NavLink></li>
                                          <li><NavLink to="/CAServicesforStartups">CA Services for Startups</NavLink></li>
                                          <li><NavLink to="/LegalServicesforStartUp">Legal Services for Start-ups</NavLink></li>
                                          <li><NavLink to="/CompanyValuationforStartups">Company Valuation for Startups</NavLink></li>
                                          <li><NavLink to="/FinancialModellingforStartups">Financial Modelling for Startups</NavLink></li>
                                          <li><NavLink to="/StartupConsultancyServices">Startup Consultancy Services</NavLink></li>
                                          <li><NavLink to="/FinancialReportingServices">Financial Reporting Services</NavLink></li>
                                          <li><NavLink to="/TaxConsultancyServices">Tax Consultancy Services</NavLink></li>
                                          <li><NavLink to="/RemoteCFOServices">Remote CFO Services</NavLink></li>
                                          <li><NavLink to="/OnDemandCFO">On Demand CFO</NavLink></li>
                                        </ul>
                                      </li>
                                      <li className="dropdown"><NavLink to="#.">International Desk <i className="fa fa-caret-down"></i></NavLink>
                                        <ul className="dropdown-menu">
                                          <li><NavLink to="/Japan-business-desk">Japan  Business Desk</NavLink></li>
                                          <li><NavLink to="/North-America-desk">North America Business Desk</NavLink></li>
                                          <li><NavLink to="/European-Business-desk">European Business Desk</NavLink></li>
                                          <li><NavLink to="/SingaPore-desk">Singapore Business Desk</NavLink></li>
                                          <li><NavLink to="/Nri-business-desk">NRI Business Desk</NavLink></li>
                                        </ul>
                                      </li>
                                      <li><NavLink to="/about">About Us</NavLink></li>
                                      <li><NavLink to="/contact">Contact Us</NavLink></li>
                                      {
                                        !Auth.Admin ? (<>
                                        
                                          <li><NavLink to="/login">LOGIN</NavLink></li>
                                        </>) : (<>
                                          <li className="dropdown"><NavLink to="#."> Admin <i className="fa fa-caret-down"></i></NavLink>
                                          <ul className="dropdown-menu">
                                          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                                          <li><NavLink onClick={LogoutHandler} to="/login">Logout</NavLink></li>
                                        </ul>
                                        </li>
                                        </>)
                                      }
                                     
                                    </ul>
                                  </nav>
                                  
                                  
                                        </div>
                                
                                    </header>
                  

    </>
  );
}

export default Header;
