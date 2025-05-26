import React from "react"
import "../css/dynamic_form.css"

function DynamicForm() {
    const [field, setField] = React.useState({})

    function handleReset() {
        setField({})
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const key = formData.get("key").trim()
        const value = formData.get("value").trim()

        setField(prevField => (
            {...prevField, [key]: value}
        ))
        event.target.reset()
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
                />
                <input
                type="text"
                name="value"
                placeholder="Field Value (e.g. Developer)"
                className="value-input"
                />
                <button type="submit" className="add-button">Add Field</button>
            </form>

            <button className="reset-button" onClick={handleReset}>Reset</button>

            <div className="preview-output">
                <h3>Preview Object:</h3>
                <pre className="output">{JSON.stringify(field, null, 2)}</pre>
            </div>
        </div>
    )
}

export default DynamicForm