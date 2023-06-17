
import Profile from '../Components/profile'
import logo from './assets/logo.png'
import {  GlobeAltIcon, UserIcon } from '@heroicons/react/24/solid'

function Page1() {
    // return(<div className='bg-red-300 border cursor-pointer'>hhhghgh</div>)
    return (

        <div className="border-b-[1px] hover:shadow-sm sm:shadow-none  h-16 flex flex-row">

            <div className="flex-1 flex flex-row justify-start items-center ">
                <img className='w-6 h-6 ml-2 cursor-pointer' border src={logo} alt="" />
                <p className="font-bold text-xl ml-2 text-red-500">airbnb</p>
            </div>
            <div className="hidden border sm:inline flex-1 bg-green-200/50">menu</div>
            <div className=" flex flex-row items-center flex-1 ">
                {/* <div className="sm:hidden">|||</div> */}
                <div className=' flex-1  hover:shadow-lg ' >search</div>
                {/* world */}
                <div className='flex-1   '>
                    <div className=" hover:bg-slate-200 rounded-full flex items-center justify-center  w-8 h-8  ">

                        <GlobeAltIcon className="h-4 w-4  text-black-500 cursor-pointer" />
                    </div>
                </div>
                <div className='flex-1 flex  justify-end'>

                <Profile ></Profile>
                </div>

                {/* <Profile></Profile> */}
            </div>

        </div>)
}
export default Page1