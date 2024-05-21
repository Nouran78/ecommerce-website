import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './error.css'
const Error = () => {
  return (
    <Fragment>
      <div className='pageError'>
      <div className="Error">
        <h2> page not found </h2>
        <ul>
          <Link to={'/home'}>home</Link>
          <Link to={""}>pages</Link>
          <Link to={""}>404</Link>
        </ul>
      </div>

      <div className='mainError'>
        <div className='fourOfour'>404</div>
        <div className='errorContent'>
            <h5>oops! The page you requested was not found!</h5>
            <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
        <input type='text' placeholder='search'/>
        <Link>back To home</Link>
        </div>
      </div>
      
      <div className='subscribe-Error'>
        <h2>subscribe our Newsletter</h2>
       <div className='email-inputError'>
       <input type='email' placeholder='Enter Email Address' />
        <button>subscribe</button>
       </div>
      </div>

      
      </div>
      
    </Fragment>
  )
}

export default Error
