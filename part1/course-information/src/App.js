import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React',
    exercises: 10
  }
  ,{
    name: 'Using props to pass data',
    exercises: 7
  }
  ,{
    name: 'State of a component',
    exercises: 14
  }
]
  return (
    <>
      <Header course={course}/>
      
      <Content parts={parts}/>

      <Total total={parts.map(z => z.exercises).reduce((x,y) => x+y, 0)} />
    
    </>


  )
}

export default App