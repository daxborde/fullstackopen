import React, { useState } from 'react'

const App = () => {
  const mapping = {
    good: 'G',
    neutral: 'N',
    bad: 'B',
  }
  // allratings is ["good", "neutral", "bad"] 
  const allratings = Object.keys(mapping);

  const [history, setHistory] = useState([]);

  const updateHistory = (history, setHistory, key) => setHistory(history.concat(mapping[key]));
  const countHistory = (history, key) => history.reduce((a, x) => a + (x === mapping[key] ? 1 : 0), 0);

  return (
    <>
      <h1>Give Feedback</h1>
      {
        allratings.map((r) => (
          <button onClick={() => updateHistory(history, setHistory, r)} key={r}>{r}</button>
        ))
      }

      <h1>Statistics</h1>
      {
        allratings.map((r) => (
          <p>{r} {countHistory(history, r)}</p>
        ))
      }

      good {history.reduce((a, x) => a + (x === mapping.good ? 1 : 0), 0)} <br />
      neutral {history.reduce((a, x) => a + (x === mapping.neutral ? 1 : 0), 0)} <br />
      bad {history.reduce((a, x) => a + (x === mapping.bad ? 1 : 0), 0)} <br />
    </>
  )
}

export default App