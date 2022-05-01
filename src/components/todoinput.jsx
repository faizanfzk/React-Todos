import { useState } from "react";

import css from "./todoinput.css"

export const TodoInput=({getdata})=>{
  const [text,setstate]=useState("")
  

return (
<div>
<input
className="input"
onChange={(e)=>{
  // console.log(e.target.value)
  setstate(e.target.value)
}}
type="text"
placeholder="Write Something"
/>
<button
onClick={()=>{
getdata(text);
}}
 >+</button>

</div>
)



}