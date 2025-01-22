import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Learncomponents } from './Components/Learncomponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
<>I am Niresh Kumar A , React developer
</>
<Learncomponents />

     </div>
     
       
    </>
  )
}

export default App
