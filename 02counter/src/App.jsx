import { useState } from 'react'



function App() {
  const [counter,setCounter] = useState(1);

  // let counter = 15;
  const addValue = ()=>{
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("counter",counter)
  }

  const removeValue = () =>{
    if(counter !== 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
