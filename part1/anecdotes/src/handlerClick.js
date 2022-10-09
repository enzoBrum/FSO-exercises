import { Anecdote } from "./App"


function mostVoted(anecdotes)
{
  let votes  = 0;
  let index = 0
  for (let i = 0; i < anecdotes.length; i++)
  {
    if (anecdotes[i].votes > votes)
    {
      votes = anecdotes[i].votes
      index = i
    }
    
  }
  return anecdotes[index]
}



export function handlerClickVote(anecdotes, setAnecdotes, selected, setMost)
{
    
    let new_anecdotes = [...anecdotes]
    let temp = new_anecdotes[selected]
    new_anecdotes[selected] =  new Anecdote(temp.content, temp.votes+1)
    return(
        ()=>{
        setAnecdotes(new_anecdotes)
        setMost(mostVoted(new_anecdotes))
    }
    )
    
}

export function handlerClickNext(anecdotes, setSelected, selected){
    let value = selected
    while (value === selected)
    {
        value = Math.floor(Math.random() * anecdotes.length)
    }
    return ()=>setSelected(value)
}