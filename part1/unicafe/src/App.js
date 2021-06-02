import React, { useState } from 'react'

const Statistics = ({ mapping, history }) => {
  if (history.length === 0) {
    return <p>No feedback given</p>
  }

  const countHistory = (history, key) => history.reduce((a, x) => a + (x === mapping[key] ? 1 : 0), 0);

  const numgood = countHistory(history, "good")
  const numneutral = countHistory(history, "neutral")
  const numbad = countHistory(history, "bad")

  const average = (numgood - numbad) / history.length
  const positive = numgood / history.length

  return (
    <div>
      <p>good {numgood}</p>
      <p>neutral {numneutral}</p>
      <p>bad {numbad}</p>
      <p>all {history.length}</p>
      <p>average {average}</p>
      <p>positive %{positive * 100}</p>
    </div>
  )
}

const App = () => {
  const mapping = {
    good: 'G',
    neutral: 'N',
    bad: 'B',
  }

  const [history, setHistory] = useState([]);

  const updateHistory = (history, setHistory, key) => setHistory(history.concat(mapping[key]));

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => updateHistory(history, setHistory, "good")}>good</button>
      <button onClick={() => updateHistory(history, setHistory, "neutral")}>neutral</button>
      <button onClick={() => updateHistory(history, setHistory, "bad")}>bad</button>

      <h1>Statistics</h1>
      <Statistics mapping={mapping} history={history} />
    </>
  )
}

export default App