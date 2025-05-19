import React from "react"
import "../css/permissions.css"

function Panel() {
    const [panel, setPanel] = React.useState({ read: false, write: false, delete: false })

    function handleChange(key) {
        setPanel(prev => (
            {...prev, [key]:!prev[key]}
        ))
    }
    return (
        <div className="permissions-panel">
            <h2>User Permissions</h2>

            <div className="permission-item">
                <label for="read">Read</label>
                <input type="checkbox" id="read" name="read" onChange={() => handleChange("read")} checked={panel.read} />
            </div>

            <div className="permission-item">
                <label for="write">Write</label>
                <input type="checkbox" id="write" name="write" onChange={() => handleChange("write")} checked={panel.write} />
            </div>

            <div className="permission-item">
                <label for="delete">Delete</label>
                <input type="checkbox" id="delete" name="delete" onChange={() => handleChange("delete")} checked={panel.delete} />
            </div>

            <div className="permission-output">
                <h3>Current Permissions:</h3>
                <pre id="permissionState">{JSON.stringify(panel, null, 2)}</pre>
            </div>
        </div>
    )
}

export default Panel