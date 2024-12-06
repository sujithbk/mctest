import React, { useState } from 'react'
import { SlArrowUp } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Five from './Five';

function ThirdSection() {

    const text = <h3 className='h3'>Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).</h3>
   
  const [viewMore,setViewmore] = useState(false)

  const more = () =>{
    setViewmore(!viewMore)
  }


  return (
    <div className='task'>

    <div className='orange'>.

    </div>

    <div id='p1'> 
      <div className='class2'>
          <div id='head1'>
          <h3 className='h3'>STEP 2 </h3>
          <h3 className='h3'> <Link to= '/'><SlArrowUp /></Link> </h3>
          </div>
          <div id='p2'>
          <div id='head2'>
          <h1 id='textcost'>Cost Identification</h1>
          </div>
          <h3 className='h3'>Identify and categorize the various costs influencing margins &nbsp; <span onClick={more}>{viewMore ? text : 'View more..'}</span></h3>
          <br></br>
          <hr></hr>
            <Five/>

          </div>
      </div>
    </div >

 </div>
  )
  
}

export default ThirdSection