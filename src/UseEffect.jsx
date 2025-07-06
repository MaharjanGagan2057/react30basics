import React from 'react'

const UseEffect = () => {
    const[count, setCount] = useState(0);

  return (
    <div>UseEffect
        <p>This page demonstrates the use of the useEffect hook in React.</p>
        <p>UseEffect is used to perform side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM.</p>
        <p>It runs after the render and can be configured to run only when certain dependencies change.</p>
        <p>For more information, refer to the official React documentation on useEffect.</p>
        <h1> {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect