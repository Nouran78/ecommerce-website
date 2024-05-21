import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import facebook from '../../images/facebook.png'
import Nav from '../Navbar/Nav'
import google_plus from '../../images/google_plus.png'
import Footer from '../Footer/Footer'
const Register = () => {
  const[name,setname]=useState(``)
  const[email,setemail]=useState(``)
  const[password,setpw]=useState(``)
  const[cpw,setcpw]=useState(``)
  const[output,setoutput]=useState(``)
  const showData=()=>{
    setoutput(`${name},${email},${password},${cpw} `)

  }
  return (
  
    <Fragment>
      <Nav/>
      <div className='register'> 
<h2> register</h2>
<ul>
    <Link to={'/home'}>home</Link>
    <Link to={''}>pages</Link>
    <Link to={''}>register</Link>
</ul>
      </div>
      <div className='container-form'>
      <div className='form'>
        <h2>create account</h2>
<input type='text' value={name}placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)}/>
<input type='email'value={email} placeholder='Enter Your Email'  onChange={(e)=>setemail(e.target.value)}/>
<input type='password' value={password}placeholder=' password'  onChange={(e)=>setpw(e.target.value)}/>
<input type='password'value={cpw} placeholder='confirm password'  onChange={(e)=>setcpw(e.target.value)}/>
<div className='checkbox'>
<input type="checkbox"/>
<label for="Rcheckbox">
                <p>i agree to the terms and conditions</p>
              </label>
</div>
<button onClick={()=> showData()}>Register</button>
<h1>{output}</h1>
  <hr  />
   

<div className='otherOptions'>
<span>OR</span>
    <Link to={''}>
      <img src={facebook} alt=''/></Link>
    <Link to={''}>
      <img src={google_plus} alt=''/></Link> 
</div>
<div className='noo'>
        <p>Already have an account? 
          <Link to={''} > Log in</Link></p>
      </div>
      </div>
  
      
      <div className='subscribe'>
        <h2>subscribe our Newsletter</h2>
       <div className='email-input'>
       <input type='email' placeholder='Enter Email Address' />
        <button>subscribe</button>
       </div>
      </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default Register
