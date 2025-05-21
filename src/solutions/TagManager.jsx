import React from "react"
import "../css/tag_manager.css"

function TagManager() {
    const [tag, setTag] = React.useState({})
    const [form, setForm] = React.useState({tagKey: "", tagValue: ""})

    function handleChange(event) {
        const {name, value} = event.target
        
        setForm(prevForm => (
            {...prevForm, [name] : value}
        ))
    }
    function handleSubmit(event) {
        event.preventDefault()
        const {tagKey, tagValue} = form

        if (tagKey.trim() && tagValue.trim()) {
            setTag(prevTag => (
                {...prevTag, [tagKey] : tagValue}
            ))
            setForm({tagKey: "", tagValue: ""})
        }
    }

    function handleDelete(key) {
        setTag(prevTag => {
            const updated = {...prevTag}
            delete updated[key]
            return updated
        })
    }
    return (
        <div className="tag-manager">
            <h2>Tag Manager</h2>

            <form className="tag-form" onSubmit={handleSubmit}>
                <input
                type="text"
                name="tagKey"
                placeholder="Enter tag key (e.g. category)"
                className="tag-input"
                value={form.tagKey}
                onChange={handleChange}
                />
                <input
                type="text"
                name="tagValue"
                placeholder="Enter tag value (e.g. books)"
                className="tag-input"
                value={form.tagValue}
                onChange={handleChange}
                />
                <button type="submit" className="add-tag-btn">Add Tag</button>
            </form>

            <div className="tag-list">
                {Object.entries(tag).map(([key, value]) => (
                <div key={key} className="tag-item">
                    <span className="tag-key">{key}: </span>
                    <span className="tag-value">{value}</span>
                    <button className="delete-tag-btn" title="Remove Tag" onClick={() => handleDelete(key)}>✖</button>
                </div>
                ))}
            </div>
        </div>

    )
}

export default TagManager