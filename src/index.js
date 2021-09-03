import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const defaultPet = { petName: '', petType: ''}
  const [pet, setPet] = useState(defaultPet)
  const [pets, setPets] = useState([])
  
  const changeHandler = event => {
    const newPet = {
      ...pet,
      [event.target.name]: event.target.value
    }
    setPet(newPet)
  }

  const submitHandler = event => {
    event.preventDefault()
    // adding new pet to pets state
    setPets([...pets, pet])
    // clearing the form back to the zero state
    setPet(defaultPet)
  }

  return (
    <div className="container">
      <h1>Simple Form App</h1>
      <ul>
        {pets.map((p, i) => (
          <li key={i}>{p.petName} is a {p.petType}</li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input 
          placeholder="Pet Name" 
          type="text" 
          onChange={changeHandler}
          name="petName"
          value={pet.petName}
        />
        <input 
          placeholder="Pet Type"
          type="text"
          onChange={changeHandler}
          name="petType"
          value={pet.petType}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
