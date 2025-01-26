import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./css/App.css";
import './App.css'
import { Learncomponents } from './Components/Learncomponents'
import { Header } from './Components/Header'
import { Student } from './Components/Student';
import { ChildComponent } from './Components/ChildComponent';
import { ArraySample } from './Components/ArraySample';
import { OneOfSamaple } from './Components/OneOfSamaple';
import { MultiTypeComponent } from './Components/MultiTypeComponent';
import { FunctionSample } from './Components/FunctionSample';
function App() {
  const [count, setCount] = useState(0)

  const items = [{id:1, name:"Item1"},{id:2, name:"Item2"},{id:3, name:"Item3"},{id:4, name:"Item4"}];

  const handleClick = () => {
    alert('You clicked me!');
  };

  return (
    <>
     <div>
<>I am Niresh Kumar A , React developer
</>
<Learncomponents />
<Header />
<Student  name = "Niresh Kumar" age = {25} isMarried = {false} />
<Student  name = "Jhon Doe " age = {26} isMarried = {true} />
<Student  name = "Mani " age = {28} isMarried = {true} />
<Student  name = "Mohit" />
<Student  />
<ChildComponent> 
<p>This is inside the ChildComponent 1</p>
<p>This is inside the ChildComponent 2 </p>

</ChildComponent>

<ArraySample  items = {items}/>
<OneOfSamaple color = "red"/>
<MultiTypeComponent  value = {1}/>
<MultiTypeComponent  value = {true}/>
<MultiTypeComponent  value = {"Hello"}/>

<div>
  <h2>Parent Component</h2>
  <FunctionSample handleClick={handleClick} />
</div>



     </div>
     
       
    </>
  )
}

export default App
