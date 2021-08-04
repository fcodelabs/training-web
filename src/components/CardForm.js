import React from 'react'
import './CardForm.css'

export function CardForm({onCancel, card }) {
  const id = card && card.id ? card.id : undefined

  const [term, setTerm] = React.useState(id ? card.term : '')
  const [definition, setDef] = React.useState(id ? card.definition : '')

  function handleSubmit(event) {
    // event.preventDefault()
    alert("Title: " +term + " Description: " +definition)
    console.log(term)
    console.log(definition)
  }

  function clearForm() {
    setTerm('')
    setDef('')
    onCancel && typeof onCancel === 'function' && onCancel()
  }

  function handleTermChange(event) {
    const { value } = event.target
    setTerm(value)
  }

  function handleDefChange(event) {
    const { value } = event.target
    setDef(value)
  }
  return (
    <div className="formcard-container">
      {/* <h4>{id ? 'Update Card' : 'Add Card'}</h4> */}
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="card_term">term</label> */}
          <textarea id="card_term" value={term} onChange={handleTermChange} placeholder="Submit New"/>
        </div>
        <div>
          {/* <label htmlFor="card_definition">definition</label> */}
          <textarea
            id="card_definition"
            value={definition}
            onChange={handleDefChange}
            placeholder= "Enter Description"
            rows= {5}
          />
        </div>
        <div className="buttons">
          <button className="primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}