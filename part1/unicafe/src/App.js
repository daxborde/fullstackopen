import React, { useState } from 'react'

const Statistics = ({ mapping, history }) => {
  const countHistory = (history, key) => history.reduce((a, x) => a + (x === mapping[key] ? 1 : 0), 0);

  const numgood = countHistory(history, "good")
  const numneutral = countHistory(history, "neutral")
  const numbad = countHistory(history, "bad")

  const average = (numgood - numbad) / history.length
  const positive = numgood / history.length

  return (
    <>
      <h1>Statistics</h1>
      
      <p>good {numgood}</p>
      <p>neutral {numneutral}</p>
      <p>bad {numbad}</p>
      <p>all {history.length}</p>
      <p>average {average}</p>
      <p>positive %{positive * 100}</p>
    </>
  )
}

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

  return (
    <>
      <h1>Give Feedback</h1>
      {
        allratings.map((r) => (
          <button onClick={() => updateHistory(history, setHistory, r)} key={r}>{r}</button>
        ))
      }

      <Statistics mapping={mapping} history={history} />
    </>
  )
}

export default App