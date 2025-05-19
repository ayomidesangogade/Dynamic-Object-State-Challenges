import React from "react"
import "../css/post_reactions.css"

function Reactions() {
    const [reactions, setReactions] = React.useState({ likes: 0, shares: 0, bookmarks: 0 })

    function handleLikes() {
        setReactions(prevReactions => (
            { ...prevReactions, likes: prevReactions.likes + 1}
        ))
    }
    function handleShares() {
        setReactions(prevReactions => (
            { ...prevReactions, shares: prevReactions.shares + 1}
        ))
    }
    function handleBookMarks() {
        setReactions(prevReactions => (
            { ...prevReactions, bookmarks: prevReactions.bookmarks + 1}
        ))
    }
    return (
        <div className="counter-panel">
            <h2>Post Reactions</h2>

            <div className="counter-item">
                <span>👍 Likes:</span>
                <span className="count" id="likes-count">{reactions.likes}</span>
                <button className="counter-btn" id="like-btn" onClick={handleLikes}>Like</button>
            </div>

            <div className="counter-item">
                <span>🔁 Shares:</span>
                <span className="count" id="shares-count">{reactions.shares}</span>
                <button className="counter-btn" id="share-btn" onClick={handleShares}>Share</button>
            </div>

            <div className="counter-item">
                <span>🔖 Bookmarks:</span>
                <span className="count" id="bookmarks-count">{reactions.bookmarks}</span>
                <button className="counter-btn" id="bookmark-btn" onClick={handleBookMarks}>Bookmark</button>
            </div>
        </div>
    )
}

export default Reactions