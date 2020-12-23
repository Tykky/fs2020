const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => 
          <Part part={part} />
        )}
      </div>
    )
  }
  
  const Course = ({ course }) => (
    <>
      <Header course={course} />
      <Content course={course} />
      <b>Total of { course.parts.reduce((a,b) => ({exercises: a.exercises + b.exercises })).exercises } exercises</b>
    </>
  )

export default Course