import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Users/User";

const CommentAdder = ({ setComments, review_id }) => {
    let user = useContext(UserContext)
    let userName = user.loggedInUser.username
    const [newComment, setNewComment] = useState('')
    const [posting, setPosting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setPosting(true)
        axios
            .post(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}/comments`, {
                body: newComment,
                author: userName,
            }).then(({ data }) => {
                setComments((currComments) => {
                    return [data.newComment, ...currComments]
                })
                setPosting(false)
                setNewComment('')
            })
    }


    return (
        <form className="center" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="newComment"></label>
            <textarea
                className="commentAdder"
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={`You are posting publically as ${userName}`}
                required>
            </textarea>
            <br></br>
            <button>submit</button>
            {posting ? <p>your comment is being posted...</p> : null}
        </form>
    )
}

export default CommentAdder