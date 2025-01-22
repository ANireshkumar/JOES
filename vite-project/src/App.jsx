import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./css/App.css";
import './App.css'
import { Learncomponents } from './Components/Learncomponents'
import { Header } from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
<>I am Niresh Kumar A , React developer
</>
<Learncomponents />
<Header />

     </div>
     
       
    </>
  )
}

export default App
