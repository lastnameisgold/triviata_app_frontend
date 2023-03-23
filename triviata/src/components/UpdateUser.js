import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateUser = () => {
    
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ name: '', email: '' })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await UpdateUser({
            name: formValues.name,
            email: formValues.email,
          })
        setFormValues({name: '', password: ''})
        navigate('/profile')
    }
    
    
    return (
        <div className='signin-signup-container'> 
            <form className="form-container" onSubmit={handleSubmit}>
                <h2 >Edit User Information</h2>
                <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input 
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formValues.name}
                        required
                    />
                </div>
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
                <button className="primary-button signup-button">Submit Changes</button>

            </form>
        </div>

    )



}

export default UpdateUser