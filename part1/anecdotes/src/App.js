import React, { useState } from 'react'

function registerVote(points, setPoints, selected) {
  const copy = [...points]
  copy[selected] += 1
  setPoints(copy)
}

function argmax(arr) {
  return arr.reduce((a, x, i, arr) => x > arr[a] ? i : a, 0)
}

const Score = ({score}) => <p>This anecdote has {score} vote{score === 1 ? "" : "s"}</p>

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

  const best = argmax(points)

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <Score score={points[selected]} />
      <p>
        <button onClick={() => registerVote(points, setPoints, selected)}>vote</button>
        <button onClick={() => setSelected(random_index())}>next anecdote</button>
      </p>
      
      <h1>Anecdote with Most Votes</h1>
      <p>{anecdotes[best]}</p>
      <Score score={points[best]} />
    </>
  )
}

export default App;
