import React from "react"
import "../css/object_field_validator.css"

function FieldValidator() {
    const [validation, setValidation] = React.useState({username: false, email: false, password: false})
    const [form, setForm] = React.useState({username: "", email: "", password: ""})

    function handleChange(event) {
        const {name, value} = event.target
        
            setForm(prevForm => (
                {...prevForm, [name]:value}
            ))
        
    
        if (name === "username") {
            if (value.length >= 4) {
                setValidation(prev => ({...prev, username: true}))
            } else {
                setValidation(prev => ({ ...prev, username: false }))
            }
        }

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (emailRegex.test(value)) {
                setValidation(prev => ({ ...prev, email: true }))
            } else {
                setValidation(prev => ({ ...prev, email: false }))
            }
        }

        if (name === "password") {
            if (value.length >= 6) {
                setValidation(prev => ({ ...prev, password: true }))
            } else {
                setValidation(prev => ({ ...prev, password: false }))
            }
        }
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <div className="form-validator-container">
            <h2>User Registration</h2>
            <form className="validator-form" onSubmit={handleSubmit}>
                <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username (min 4 chars)" value={form.username} onChange={handleChange}/>
                <small className="error-message" style={{display: `${!validation.username ? "block": "none"}`}}>Invalid username</small>
                </div>

                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@email.com" value={form.email} onChange={handleChange}/>
                <small className="error-message" style={{display: `${!validation.email ? "block" : "none"}`}}>Invalid email format</small>
                </div>

                <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Min 6 characters" value={form.password} onChange={handleChange}/>
                <small className="error-message" style={{display: `${!validation.password ? "block" : "none"}`}}>Password too short</small>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FieldValidator