import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirtsComponent from '../Components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)
  const buttonClick1= ()=>{ 

    alert("Ali")
  }
  const buttonClick2= ()=>{ 

    alert("Sag")
  }
  return (
    <div> <h1 className="text-3xl text-red-400 font-bold underline">
    Hello world!
  </h1>
  
  <FirtsComponent  mybuttonClick={buttonClick1} bgColor="bg-red-400"    title="Submit"></FirtsComponent>
  <FirtsComponent  mybuttonClick={buttonClick2} bgColor="bg-green-400"  title="Cancle"></FirtsComponent>
  <FirtsComponent  bgColor="bg-yellow-400" title="Return"></FirtsComponent>


  </div>
    
  )
}

export default App
