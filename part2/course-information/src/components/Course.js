import Content from "./Content"
import Header from "./Header"
import Total from "./Total"


const Course = ({course}) => {
    
    const total = course.parts.map(z => z.exercises).reduce((x,y) => x+y)
    return (
    <>
      <Header course={course.name}/>
      
      <Content parts={course.parts}/>

      <Total total={total} />
    
    </>


  )
}

export default Course