import React, { useRef, useState } from 'react'
import { Card,Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from './CenteredContainer'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/user')
    }catch{
      setError("Failed to Log In")
    }
    setLoading(false)
  }
  return (
    <>

<CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label className="mt-1 mb-0" >Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label className="mt-3 mb-0" >Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} className="mb-3" required/>
            </Form.Group>
            <Button disabled={loading} className="w-100 "type="submit">Login</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to ='/forgot-password'/>
          Forgot Password?</div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need An Account? <Link to='./signup'>Sign Up</Link>
      </div>
      </CenteredContainer>
    </>
  )
}
