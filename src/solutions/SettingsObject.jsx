import React from "react"
import "../css/settings_object.css"

function Settings() {
    const [settings, setSettings] = React.useState({autoPlay: false, sound: false, darkMode: false})

    function handleChange(key) {
        setSettings(prevSetting => (
                {...prevSetting, [key]: !prevSetting[key]}
            )
        )
    }
    return (
        <div className="settings-container">
            <h2>App Settings</h2>
            <form className="settings-form">
                <div className="setting-option">
                <label htmlFor="autoPlay">
                    <input 
                        type="checkbox" 
                        id="autoPlay" 
                        name="autoPlay"
                        checked={settings.autoPlay}
                        onChange={() => handleChange("autoPlay")}
                    />
                    Auto Play
                </label>
                </div>
                <div className="setting-option">
                <label htmlFor="sound">
                    <input 
                        type="checkbox" 
                        id="sound" 
                        name="sound" 
                        checked={settings.sound}
                        onChange={() => handleChange("sound")}
                    />
                    Sound
                </label>
                </div>
                <div className="setting-option">
                <label htmlFor="darkMode">
                    <input
                        type="checkbox"
                        id="darkMode"
                        name="darkMode"
                        checked={settings.darkMode}
                        onChange={() => handleChange("darkMode")}
                    />
                    Dark Mode
                </label>
                </div>
                <div>
                    {JSON.stringify(settings, null, 2)}
                </div>
            </form>
        </div>
    )
}

export default Settings