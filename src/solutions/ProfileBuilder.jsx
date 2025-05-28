import React from "react"
import "../css/profile_builder.css"

function ProfileBuilder() {
    const [form, setForm] = React.useState({
        personal: { name: "", email: "", bio: "" },
        skills: [],
        social: { twitter: "", github: "", linkedin: "" }
    })

    function handleChange(event) {
        const {name, value} = event.target
        if (name === "name" || name === "email") {
            setForm(prev => (
                {...prev, personal : {...prev.personal, [name]:value}}
            ))
        }

        if (name === "bio" && value.length <= 150) {
            setForm(prev => (
                {...prev, personal: {...prev.personal, bio:value} }
            ))
        }

        if (name === "twitter" || name === "github" || name === "linkedin") {
            setForm(prev => (
                {...prev, social: {...prev.social, [name]:value}}
            ))
        }
    }

    function handleSkills(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const skill = formData.get("skill")

        if (skill && !form.skills.includes(skill)) {
            setForm(prev => ({...prev, skills: [...prev.skills, skill]}))
        } else {
            alert("Skill is already added.")
        }
        event.target.reset()
    }

    function handleReset() {
        setForm({
        personal: { name: "", email: "", bio: "" },
        skills: [],
        social: { twitter: "", github: "", linkedin: "" }
    })
    }
    return (
        <div className="profile-builder">
            
                <h2>Profile Builder</h2>

                <p>Build your profile by filling out the form below. All fields are important.</p>
                <section className="form-section">
                    <h3>Personal Info</h3>
                    <input type="text" name="name" placeholder="Full Name" value={form.personal.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" value={form.personal.email} onChange={handleChange} />
                    <textarea name="bio" placeholder="Short Bio (max 150 chars)" value={form.personal.bio} onChange={handleChange}></textarea>
                    <div className="char-count">Characters: <span id="bioCount">{form.personal.bio.length}</span>/150</div>
                </section>

                <section className="form-section">
                    <h3>Skills</h3>
                    <div className="skills-input">
                    <form onSubmit={handleSkills}>
                    <input type="text" name="skill" placeholder="e.g. React, Python"/>
                    <button type="submit" className="add-skill">Add Skill</button>
                    </form>
                    </div>
                    <ul className="skills-list">
                        {
                            form.skills.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </section>

                <section className="form-section">
                    <h3>Social Links</h3>
                    <input type="text" name="twitter" placeholder="Twitter Handle" value={form.social.twitter} onChange={handleChange}/>
                    <input type="text" name="github" placeholder="GitHub Username" value={form.social.github} onChange={handleChange} />
                    <input type="text" name="linkedin" placeholder="LinkedIn URL" value={form.social.linkedin} onChange={handleChange}/>
                </section>
            

            <div className="form-actions">
                <button className="reset-button" onClick={handleReset}>Reset</button>
            </div>

            <div className="preview">
                <h3>Live Profile Preview</h3>
                <pre className="preview-json">{JSON.stringify(form, null, 2) }</pre>
            </div>
        </div>
    )
}

export default ProfileBuilder