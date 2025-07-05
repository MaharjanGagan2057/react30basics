import { useState } from "react"

function About(){
  const[number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  }
    
  const decrement = () => {
    setNumber(number - 1);
  }
    return(
        <div>
            <h1>About Page</h1>
            <p>This is the About page of our application.</p>
           <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        
    )
}

export default About