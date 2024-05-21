import React, { Fragment, useEffect, useState } from 'react'
import './loading.css'
const Loading = () => {
    const [load,setload]=useState(false)
    useEffect(()=>{
      setTimeout( ()=>{
        setload(true)
        document.body.style.overflow ='visible'
    },1000)
    })
  return (
    <Fragment>
      <div className='loading' style={load ?{display:'none'} :{display:'flex'}}>
      <span class="loader"></span>
      </div>
    </Fragment>
  )
}

export default Loading
