import React, { useRef, useState } from 'react'
import { Card,Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from './CenteredContainer'


export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords don't match")
    }
    try{
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    }catch{
      setError("Failed to Create Account")
    }
    setLoading(false)
  }
  return (
    <>

<CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label className="mt-1 mb-0" >Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label className="mt-3 mb-0" >Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required/>
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label className="mt-3 mb-0" >Confirm Password</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} className="mb-3" required/>
            </Form.Group>
            <Button disabled={loading} className ="w-100"type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already Have and Account? <Link to='/login'>Log In</Link>
      </div>
   </CenteredContainer>
    </>
  )
}
