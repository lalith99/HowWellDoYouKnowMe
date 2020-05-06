import React from 'react'
import './App.css'

const  DataComponent = props =>{
    
    
        return(
       <div>
           <p className = 'ques'>  {props.question }  </p>
           {props.children}
        
       </div>
       )
    }

export default DataComponent