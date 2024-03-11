import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children, title, description , keywords}) => {
  return (
    <>
    <Helmet>
    <title>{title}</title>
      <meta name='title' content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
   
      <Header/>
       <main>
       <ToastContainer/>
       {children}
       </main>
      <Footer/>
    </>
  )
}

export default Layout
