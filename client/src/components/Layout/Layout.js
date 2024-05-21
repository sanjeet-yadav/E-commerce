import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Helmet} from "react-helmet";
const Layout = ({children,title,description,keywords,author}) =>{
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content= {keywords} />
                <meta name="" content={author}/>
                <title>{title}</title>
            </Helmet>
      <Header/>
      <main style={{minHeight:'70vh'}}>{children}</main>
      <Footer/>
    </div>
  )
}
// defult descrption and keyords etc 
Layout.defaultProps = {
  title: 'Ecommerce app - shop now',
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Sanjeet",
}

export default Layout;

