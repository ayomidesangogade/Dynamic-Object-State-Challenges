import React from "react"
import "../css/profile_form.css"

function ProfileForm() {
    const [profile, setProfile] = React.useState({name: "", bio: "", location: ""})

    function handleChange(event) {
        const {name, value} = event.target
        setProfile(prevProfile => (
            {...prevProfile, [name]:value}
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <div className="profile-editor">
            <h2>Edit Profile</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                />

                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio" rows="4" value={profile.bio} onChange={handleChange} placeholder="Tell us about yourself..."></textarea>

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={profile.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                />

                <button type="submit">Update Profile</button>
            </form>

            <div className="profile-preview">
                <h3>Live Preview</h3>
                <pre className="profile-output">{JSON.stringify(profile, null, 2)}</pre>
            </div>
        </div>
    )
}

export default ProfileForm