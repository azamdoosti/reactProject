import { useState } from "react"


function FirtsComponent({bgColor,title,mybuttonClick}) {

    const [visibility,setVisibility]=useState(true)
   

    
    return (

        <div>

        {visibility && <button>hi</button>}
            <input type="text"/> 
            <br />
            <button onClick={()=>{setVisibility(!visibility)}}  className={`
            border
            text-white-black
            p-2
            px-4
            w-36
            rounded-md
            shadow-lg
            hover:bg-slate-300
            m-4
            ${bgColor}
            `}
            
              >{title}</button>


        </div>
    )
}

export default FirtsComponent
