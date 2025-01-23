

export const Header = () => {

let customCSS = "code";


const isLoggIn = true;

const greeting = isLoggIn ? <p>Welcome back !!</p> :  <p>Please login!</p>

const items = ["Item1", "Item2", "Item3","Item4"];

  return (
 <>
 
 <div>

<h1 className="bannerText">component Header</h1>

<p className="slogan">This is the second component named as the Header</p>

<h2>
JavaScript expression in JSX: and dynamic styling </h2>

<p>25+25 = {25+25}</p>

<p>25-5 = {25-25}</p>

<p className={customCSS}>dynamic styling</p>

<p className={customCSS}>dynamic styling</p>

<p className={customCSS}>dynamic styling</p>


<p style={{fontSize:"50px", color: "red"}}> This is in-line styling</p>
 </div>

<h3> Conditional rendering</h3>

{greeting}

<h3>JSX with List</h3>

<h3>JSX with list</h3>
<ul>
{items.map((item , index) => (<li key = {item}>{item}</li>))}

</ul>

 </>
  )
}
