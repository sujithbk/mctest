import React, { useState } from 'react'
import { PiListPlus } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Toggle from './Toggle';

function Seven() {
   
    const [toggle,setToggle] = useState(false)

    const downArrow = () =>{
        setToggle(!toggle)
    }

  return (

    <div className='body1'>

        <div className='last'  >

        <div className='lastHead' onClick={downArrow}>
        <PiListPlus />  Add raw materials costs as variable costs <IoIosArrowDown />
        </div>
        <div className='lastbody'>
        Energy and Utility costs are Lorem ipsum dolor sit amet...
        </div>

        {
            toggle&&(
                <Toggle/> 
            )
        }

        </div> 
                
    <div className='last'  >

            <div className='lastHead' onClick={downArrow}>
            <PiListPlus />  Add raw materials costs as variable costs <IoIosArrowDown />
            </div>
            <div className='lastbody'>
            Energy and Utility costs are Lorem ipsum dolor sit amet...
            </div>

            {
                toggle&&(
                    <Toggle/> 
                )
            }

       </div>  


    </div>
  )
}

export default Seven