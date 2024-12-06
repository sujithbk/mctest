import React, { useState } from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { WiStars } from "react-icons/wi";

import './style.css'
import Five from './Five';
import { Link } from 'react-router-dom';

function Four() {
    const[isVisbile,setIsVisible]= useState(false)
    const hide = ()=>{
        setIsVisible(!isVisbile)

    }
  return (
<div>
<div id='stars' >
        {/* <div id='lp' > <BsArrowReturnRight/> &nbsp;Need more clarification on the section?&nbsp;&nbsp;&nbsp;  <HiMiniPlusCircle/><Link to= '/third'></Link> </div>
        <div id='' ><WiStars /> &nbsp;Need more clarification on the section?&nbsp;&nbsp;&nbsp; <HiMiniPlusCircle /></div> */}
       <Link to= '/third' className='third'><BsArrowReturnRight/> &nbsp;Need more clarification on the section?&nbsp;&nbsp;&nbsp;  <HiMiniPlusCircle/></Link>
       <Link to= '/third ' className='third' ><WiStars /> &nbsp;Need more clarification on the section?&nbsp;&nbsp;&nbsp; <HiMiniPlusCircle /></Link>
    </div>
    {
        isVisbile&&(<Five/>)
    }
</div>


  

  )
}

export default Four

// <div id='lp' onClick={hide} > {isVisbile ? <FaMinus /> : < HiMiniPlusCircle /> }</div>