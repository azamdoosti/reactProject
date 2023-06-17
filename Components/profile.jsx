import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
 import Menu from './menu'

function Profile() {
 const [showmenu,setShowmenu]=useState(false)
    
    return (   
        <div onClick={()=>{setShowmenu(!showmenu)}} className='relative flex flex-row mr-3 border rounded-3xl p-2 space-x-4 hover:shadow-md '>
            <div className='w-5 h-5 '><Bars3Icon></Bars3Icon></div>
            <div className=' w-4 h-4  ' > <UserIcon></UserIcon></div>
            {/* {showmenu && <div> <div className='absolute top-10 rounded-xl shadow-md  bg-slate-100 w-[200px] h-48 right-0'>menu</div>menu</div>}  */}
            
             {/* {showmenu && <Menu/> } */}
             {showmenu===true?<Menu></Menu>:<div></div>}
        </div>

    )
}

export default Profile