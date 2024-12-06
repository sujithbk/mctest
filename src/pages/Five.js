import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Six from './Six'

function Five() {
    const [touch,setTouch] = useState(true)

    const click = ()=>{
        setTouch(!touch)
    }

  return (
    <div className='third'>
     <div className='mini'>
        <h1 id='q1'>Question 1 out of 3</h1>
        <h1 id='q1' onClick={click}>{touch ?   <FaMinus /> : <FaPlus />     }</h1>
     </div>
       <h1 id='textcost'>What are the primary components of variable & semi-variable costs impacting gross margins?</h1>
             {touch &&( <Six/> )}
    </div>
  )
}

export default Five