import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

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
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/profile')
  }

  return (
    <div className="signin-signup-container">
        <form className="form-container" onSubmit={handleSubmit}>
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

