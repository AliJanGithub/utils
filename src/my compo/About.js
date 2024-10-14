import React from 'react'
import { useState } from 'react'
export default function About() { 
    const [btntext, setbtntext] = useState('enable white mode')
     const [meraStyle, setmerastyle] = useState(
        {
            color:'white',
            backgroundColor:'black'
        }
     )
     const toggle=()=>{
        if(meraStyle.color==='white'){
          setmerastyle(
            {
                color:'black',
                backgroundColor:'white'  
            }
            
          )
          setbtntext('enable dark mode')
        }
     
     else{
        setmerastyle(
            {
                color:'white',
                backgroundColor:'black'  
            }
            )
            setbtntext('enable white mode')
     }
     
    }
    
  return (
    <>
    <div className="container my-1 " style={meraStyle}>
    <div class="row g-3 align-items-center my-1" style={meraStyle}>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label" style={meraStyle}>Password</label>
  </div>
  <div class="col-auto my-1" style={meraStyle}>
    <input type="password" style={meraStyle} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto" style={meraStyle}>
    <span id="passwordHelpInline" class="form-text" style={meraStyle}>
      Must be 8-20 characters long.
    </span>
  </div>
</div>
</div>
<div className="container my-3" >
<button type="button" class="btn btn-primary" onClick={toggle}>{btntext}</button>
</div>
 </>
  )
}
