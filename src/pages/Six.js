import React, { useState } from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { BiSolidBinoculars } from "react-icons/bi";
import Seven from './Seven';
function Six() {
    const [show,setShow] = useState(false)

    const click = () =>{
        setShow(!show)
    }

  return (
    <div>
        <div className='true'><div id='lp' > <BsArrowReturnRight/> &nbsp;Need more clarification on the section?&nbsp;&nbsp;&nbsp;  <HiMiniPlusCircle/></div></div>
        <div className='bino1' > <h1 id='bino' onClick={click}><BiSolidBinoculars /> &nbsp;How do I connect this to my business context?</h1></div> 
        {
            show&&(<Seven/>)
        }
    </div>
  )
}

export default Six                


