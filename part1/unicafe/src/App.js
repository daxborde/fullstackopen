import React, { useState } from 'react'



const App = () => {  
  const [ goodc, setGoodC ] = useState(0);
  const [ neutralc, setNeutralC ] = useState(0);
  const [ badc, setBadC ] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGoodC(goodc + 1)}>good</button>
      <button onClick={() => setNeutralC(neutralc + 1)}>neutral</button>
      <button onClick={() => setBadC(badc + 1)}>bad</button>

      <h1>Statistics</h1>
      good {goodc} <br />
      neutral {neutralc} <br />
      bad {badc} <br />
    </>
  )
}

export default App