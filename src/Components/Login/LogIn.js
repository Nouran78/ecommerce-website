import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import google_plus from "../../images/google_plus.png";
import facebook from "../../images/facebook.png";

const LogIn = () => {
  const[usermail,setmail]=useState(``)
  const[userPass,setpass]=useState(``)
  const [user ,setuser]=useState(``)
const showData=()=>{
setuser(alert(`${usermail} ${userPass} ` ))
}
  return (
    <Fragment>
      <div className="LoginPage">
      <div className="login-nav">
        <h2> login</h2>
        <ul>
          <Link to={'/home'}>home</Link>
          <Link to={""}>pages</Link>
          <Link to={""}>login</Link>
        </ul>
      </div>
      <div className="container-login">
        <div className="login">
          <h2>login</h2>
           <input type="text"  placeholder="Your Email"  onChange={(e)=>setmail(e.target.value)}/>
          <input type="password"  placeholder="Password" onChange={(e)=>setpass(e.target.value)} />
          <button onClick={()=>showData()}>Log In</button>

          <div className="restInput">
            <input type="checkbox" id="checkbox" />
              <label for="checkbox">
                <span>Remember me</span>
              </label>
            <Link to={""}>Forget password?</Link>
          </div>
          <span>OR</span>
          <div className="options">
            <Link to={""}><img src={facebook} alt=''/></Link>
            <Link to={""}><img src={google_plus} alt=''/></Link>
          </div>
          <div className="signup">
            <p>
              Don't Have an Account?
              <Link to={""}> sign up now</Link>
            </p>
          </div>
        </div>
        <h1>{user} </h1>
      </div>
      <div className='subscribe-login'>
        <h2>subscribe our Newsletter</h2>
       <div className='email-inputlog'>
       <input type='email' placeholder='Enter Email Address' />
        <button>subscribe</button>
       </div>
      </div>
      </div>
      
    </Fragment>
  );
};

export default LogIn;
