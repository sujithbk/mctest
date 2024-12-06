import React from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { GrFormClose } from "react-icons/gr";
import './style.css'
function Toggle() {
  return (
    <div>

   <button id='download'>Accept &nbsp;<FaCircleArrowDown />&nbsp;</button> &nbsp;&nbsp;  <button id='down'>Dismiss &nbsp;<GrFormClose /></button>&nbsp;...

    </div>
  )
}

export default Toggle