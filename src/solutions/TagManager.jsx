import React from "react"
import "../css/tag_manager.css"

function TagManager() {
    const [tag, setTag] = React.useState({})

    function handleTags(event) {
        const formData = new FormData(event.target)
        const key = formData.get("tagKey")
        const value = formData.get("tagValue")

        setTag(prevTag => (
            {...prevTag, [key] : value}
        ))
        event.preventDefault()
    }

    function handleDelete(key) {
        setTag(prevTag => {
            const updated = {...prevTag}
            delete updated[key]
            return updated
        })
    }
    return (
        <div class="tag-manager">
            <h2>Tag Manager</h2>

            <form class="tag-form" onSubmit={handleTags}>
                <input
                type="text"
                name="tagKey"
                placeholder="Enter tag key (e.g. category)"
                class="tag-input"
                />
                <input
                type="text"
                name="tagValue"
                placeholder="Enter tag value (e.g. books)"
                class="tag-input"
                />
                <button type="submit" class="add-tag-btn">Add Tag</button>
            </form>

            <div class="tag-list">
                {Object.entries(tag).map(([key, value]) => (
                <div key={key} class="tag-item">
                    <span class="tag-key">{key}: </span>
                    <span class="tag-value">{value}</span>
                    <button class="delete-tag-btn" title="Remove Tag" onClick={() => handleDelete(key)}>✖</button>
                </div>
                ))}
            </div>
        </div>

    )
}

export default TagManager