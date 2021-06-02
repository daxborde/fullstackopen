import React, { useState } from 'react'

const Statistics = ({ mapping, history }) => {
  // allratings is ["good", "neutral", "bad"]
  const allratings = Object.keys(mapping);
  const countHistory = (history, key) => history.reduce((a, x) => a + (x === mapping[key] ? 1 : 0), 0);

  const average = (countHistory(history, "good") - countHistory(history, "bad")) / history.length

  return (
    <>
      <h1>Statistics</h1>
      {
        allratings.map((r) => (
          <p>{r} {countHistory(history, r)}</p>
        ))
      }

      <p>all {history.length}</p>

      <p>average {average}</p>
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