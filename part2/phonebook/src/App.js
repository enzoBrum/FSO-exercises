import { useState, useEffect } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Numbers from './components/Numbers'
import axios from 'axios'
import personService from './services/persons'
import Message from './components/Message'

// this is so ugly :(
// sadly im to tired to care...

const containSubstringFromStart = (value, string) => {
  if (typeof(string) !== "string")
    return false
  
  value = value.toLowerCase().trim()
  string = string.toLowerCase()
  
  if (!value) return true

  for (let i = 0; i < string.length; i++) {
    if ( value[i] !== string[i] )
      return false;

    if ( i+1 === value.length )
      return true;
  }
}




const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState({
    text: null,
    color: 'black'
  })

  
  useEffect(
    () => {
      personService
      .get()
      .then( (personsReceived) => {
        setPersons(personsReceived)
      })
      
    }, [])
  
    
  const valueChangeHandler = (setValue) =>
    (event) => setValue(event.target.value)
  
  const eraseHandler = (id, name) =>
    () => {
      const err = false
      const r = window.confirm(`delete ${name}?`)
      if (!r)
        return

      personService
      .erase(id)
      .then(() => 
        setPersons(persons.filter( (p) => p.id !== id ))
      )
      .catch(() => {
        setMessage({text: `information about ${name} has already been removed from server`, color:'red'})
        err = true
      })

      if (!err)
      {
        const mem = {
          text: `Deleted ${name}`,
          color: 'darkred'
        }
        setMessage(mem)
      }

      setTimeout(
        () => setMessage({...message, text: null}),
        5000
      )
    }
  
  const formSubmitHandler  = (event) => {
    event.preventDefault()
    
    const personFound = persons.find( (p) => p.name === newName )
    const err = false
    if (personFound !== undefined )
    {
      const r  = window.confirm(`${personFound.name} is already adde to phonebook, replace old number with new one?`)
      if (r)
      {
        const updated_person = {...personFound, phone: newPhone}
        personService
        .update(updated_person, updated_person.id)
        .then( (response) => {
          setPersons(persons.map( (p) => p.id === response.id ? response : p))
          setNewName('')
          setNewPhone('')
        })
        .catch(() => {
          setMessage({text: `information about ${personFound.name} has already been removed from server`, color:'red'})
          err = true
        })

        if (!err) {
          const mem = {
            text: `Changed number of ${personFound.name}`,
            color: 'darkblue'
          }
          setMessage(mem)
        }
      }
      
    }
    else 
    {      
      const new_person = { name: newName, phone: newPhone }

      personService
      .create(new_person)
      .then( (response) => {
        setPersons(persons.concat(response))
        setNewName("")
        setNewPhone('')
      } )
      .catch(() => {
        setMessage({text: `information about ${personFound.name} has already been removed from server`, color:'red'})
        err = true
      })
    
    if (!err)
    {
      const mem = {
        text: `Added ${newName}`,
        color: 'darkgreen'
      }
      setMessage(mem)
    }
    }
    setTimeout(
      () => setMessage({...message, text: null}),
      5000
    )

  }
  


  const persons_shown = persons.filter( 
                                        (p)=> 
                                          containSubstringFromStart(search, p.name) 
                                      );  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Message text={message.text} color={message.color}/>
      <Input 
        text={"filter shown with: "}
        value={search}
        onChange={valueChangeHandler(setSearch)}
      />

      <h2>add a new</h2>
      <Form 
        submitHandler={formSubmitHandler}
        nameValue={newName}
        nameChange={valueChangeHandler(setNewName)}
        phoneValue={newPhone}
        phoneChange={valueChangeHandler(setNewPhone)}
      />      
      <Numbers 
        persons={persons_shown} 
        eraseHandler={eraseHandler}
      />
    </div>
  )
}

export default App