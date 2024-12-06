import React from 'react'
import './style.css'
import { SlArrowRight } from "react-icons/sl";
import { Link} from 'react-router-dom';
import Second from './Second';
function First() {
  return (
    <div className='task'>

      <div className='orange'>.

      </div>

      <div id='p1'> 
        <div className='class1'>
            <div id='head1'>
            <h3 className='h3'>STEP 1/3 </h3>
            <h3 className='h3'>4 Prompts | 5 mins</h3>
            </div>
            <div id='p2'>
           
            <div id='head2'>
            <h1 id='textcost'>Cost Identification</h1>
            
            {/* <button id='btn1' > <Link to='/second'>Get Started <SlArrowRight id='btn2'/></Link> </button> */}
            <Link to='/second' id='btn1'>Get Started <SlArrowRight id='btn2'/></Link>
            </div>
            <h3 className='h4'>Identify and categorize the various costs influencing margins.</h3>
            </div>
        </div>
      </div >

   </div>
  )
}

export default First