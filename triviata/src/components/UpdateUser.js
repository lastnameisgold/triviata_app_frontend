import { useState } from 'react'
import { UpdateUser } from '../services/UserServices'
import { useNavigate } from 'react-router-dom'

const EditUser = () => {
    
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
        <div className='update-user-container'>
            <h3 className="input-wrapper">Edit User Information</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="name"></label>
                    <input 
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formValues.name}
                        required
                    />
                </div>
                <div className="input-wrapper">
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
                <button>Submit Changes</button>

            </form>
        </div>

    )



}

export default EditUser