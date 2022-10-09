import { useState } from 'react'
import Display from './Display';
import { handlerClickVote, handlerClickNext } from './handlerClick';



export class Anecdote {
  constructor(content, votes = 0) {
    this.content = content;
    this.votes = votes
  }
}



const App = () => {


   
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    new Anecdote('If it hurts, do it more often.'),
    new Anecdote('Adding manpower to a late software project makes it later!'),
    new Anecdote('The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'),
    new Anecdote('Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'),
    new Anecdote('Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'),
    new Anecdote('Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.')
  ])
  const [mostVotedAnecdote, setMost] = useState(new Anecdote('If it hurts, do it more often.'))
  
  return (
    <>
      <h2>
        Anecdote of the day
      </h2>
      
      <Display content={anecdotes[selected].content} votes={anecdotes[selected].votes}/>
      <button onClick={handlerClickVote(anecdotes, setAnecdotes, selected, setMost)}>
        vote
      </button>
      <button onClick={handlerClickNext(anecdotes, setSelected, selected)}>
        next anecdote
      </button>

      <h2>
        Anecdote with most votes
      </h2>
      <Display content={mostVotedAnecdote.content} votes={mostVotedAnecdote.votes}/>
    </>
  )
}

export default App