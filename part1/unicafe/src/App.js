import React, { useState } from 'react'

const App = () => {
  const mapping = {
    good: 0,
    neutral: 1,
    bad: 2,
  }
  const [ history, updateHistory ] = useState([]);

  console.log(history)
  
  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => updateHistory(history.concat(mapping.good))}>good</button>
      <button onClick={() => updateHistory(history.concat(mapping.neutral))}>neutral</button>
      <button onClick={() => updateHistory(history.concat(mapping.bad))}>bad</button>

      <h1>Statistics</h1>
      good {history.reduce((a, x) => a + (x === mapping.good ? 1 : 0), 0)} <br />
      neutral {history.reduce((a, x) => a + (x === mapping.neutral ? 1 : 0), 0)} <br />
      bad {history.reduce((a, x) => a + (x === mapping.bad ? 1 : 0), 0)} <br />
    </>
  )
}

export default App