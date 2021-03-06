import React from 'react'

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => (
  <div >
    {props.course.parts.map((x) => <Part part={x} key={x.name}/>)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => (
  <p>Number of exercises {props.course.parts.reduce((a, p) => a + p.exercises, 0)}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  }
  

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App