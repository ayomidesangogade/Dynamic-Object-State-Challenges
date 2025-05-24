import React from "react"
import "../css/dynamic_form.css"

function DynamicForm() {
    const [field, setField] = React.useState({})
    const [form, setForm] = React.useState({key: "", value: ""})

    function handleChange(event) {
        const {name, value} = event.target

        setForm(prevForm => (
            {...prevForm, [name]:value}
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()  
        const {newKey, newValue} = form

        setField(prevField => (
            {...prevField, [newKey]: newValue}
        ))
        // setForm({key: "", value: ""})
    }

    return (
        <div className="form-previewer">
            <h2>Dynamic Form Previewer</h2>

            <form className="field-form" onSubmit={handleSubmit}>
                <input
                type="text"
                name="key"
                placeholder="Field Key (e.g. title)"
                className="key-input"
                value={form.key}
                onChange={handleChange}
                />
                <input
                type="text"
                name="value"
                placeholder="Field Value (e.g. Developer)"
                className="value-input"
                value={form.value}
                onChange={handleChange}
                />
                <button type="submit" className="add-button">Add Field</button>
            </form>

            <button className="reset-button">Reset</button>

            <div className="preview-output">
                <h3>Preview Object:</h3>
                <pre className="output">{JSON.stringify(field, null, 2)}</pre>
            </div>
        </div>
    )
}

export default DynamicForm