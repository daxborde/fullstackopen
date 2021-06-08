import React from 'react'

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({ course }) => (
  <>
    <h1>{course.name}</h1>
    <div>
      {course.parts.map((p) =>
        <Part part={p} key={p.name} />
      )}
    </div>
    <p><b>Total number of exercises: {course.parts.reduce((a, p) => a + p.exercises, 0)}</b></p>
  </>
)

export default Course