import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <h2 className="text-center"> All Right Reserved &copy; Techinfoyt</h2>
      <p className='text-center mt-3'>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/policy'>Privacy policy</Link>
      </p>
    </div>
  )
}

export default Footer
