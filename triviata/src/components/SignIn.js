import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const SignIn = (props) => {

  // let UserEmail = ''
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    // UserEmail = formValues.email
    // console.log(UserEmail)
    setFormValues({email: '', password: ''})
    console.log(payload)
    console.log(payload.email)
    let logUser = await Client.get(`/api/users/view/${payload.email}`)
    console.log(logUser)
    props.setUser(logUser.data[0])
    console.log(props.user)
    props.toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="signin-signup-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email Address"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              required
            />
          </div>
          <button className="primary-button signin-button" disabled={!formValues.email || !formValues.password}>
            Sign in
          </button>
        </form>
    </div>
  )
}

export default SignIn

