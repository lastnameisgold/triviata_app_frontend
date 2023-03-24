import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UpdateUserInfo } from '../services/UserServices'

const UpdateUser = ({setUser,user}) => {
    

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ 
        name: '', 
        email: '' 
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        
    }
    // console.log(users)
    const handleSubmit = async (e) => {
        e.preventDefault()
        let updatedUser = await UpdateUserInfo(
            user.id, formValues
            // name: formValues.name,
            // email: formValues.email
        )
        console.log(formValues.email)
        setUser(updatedUser[1][0])
        console.log(updatedUser)
        setFormValues({
            name: '', 
            email: ''})
        
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