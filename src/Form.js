import React, {useState} from 'react'
import FormSignUp from './FormSignUp'
import Success from './Success';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <div>
      {!isSubmitted ?
      <FormSignUp submitForm={submitForm} /> :
      <Success />
      }
    </div>
  )
}

export default Form
