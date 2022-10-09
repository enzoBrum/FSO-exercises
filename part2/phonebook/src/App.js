import { useState } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Numbers from './components/Numbers'



const valueChangeHandler = (setValue) =>
  (event) => setValue(event.target.value)

const containSubstringFromStart = (value, string) => {
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const formSubmitHandler  = (event) => {
    event.preventDefault()
    
    
    if (persons.find( (p) => p.name === newName ) !== undefined )
    {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    const new_person = { name: newName, phone: newPhone }
    setPersons(persons.concat(new_person))
    setNewName("")
    setNewPhone('')
  }
  


  const persons_shown = persons.filter( 
                                        (p)=> 
                                          containSubstringFromStart(search, p.name) 
                                      );  
  

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Numbers persons={persons_shown} />
    </div>
  )
}

export default App