import React, { useState } from 'react'

const registerVote = (points, setPoints, selected) => {
  const copy = [...points]
  copy[selected] += 1
  setPoints(copy)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const random_index = () => Math.floor(Math.random()*anecdotes.length)

  const [selected, setSelected] = useState(random_index())
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} vote{points[selected] === 1 ? "" : "s"}</p>
      <p>
        <button onClick={() => registerVote(points, setPoints, selected)}>vote</button>
        <button onClick={() => setSelected(random_index())}>next anecdote</button>
      </p>
    </>
  )
}

export default App;
