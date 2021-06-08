import React from 'react'

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({ course }) => {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [{
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }]
  // }

  return (
    <>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((p) =>
          <Part part={p} key={p.name} />
        )}
      </div>
      {/* <Total course={course} /> */}
    </>
  )
}

export default Course