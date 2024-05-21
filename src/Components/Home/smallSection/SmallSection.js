import React, { Fragment } from 'react'
import './smallSec.css'
import shipped from '../../../images/shipped.png'
import save_money from '../../../images/save_money.png'
import technical_support from '../../../images/technical_support.png'
import secure_payment from '../../../images/secure_payment.png'
const SmallSection = () => {
  return (
    <Fragment>
<div class="smallSection">
    <div class="item">
         <img src={shipped} alt='' />
        <h3>free delivery</h3>
        <h5>worldwide</h5>
    </div>
    <div class="item">
        <img src={save_money} alt=''/>
        <h3>money returns</h3>
        <h5>30 days money returns</h5>
    </div>
    <div class="item">
        <img src={technical_support} alt=''/>
        <h3>27/4 online support</h3>
        <h5>customer support</h5>
    </div>
    <div class="item">
        <img src={ secure_payment } alt=''/>
        <h3>payment security</h3>
        <h5>safe payment</h5>
    </div>
</div>
    </Fragment>
  )
}

export default SmallSection
