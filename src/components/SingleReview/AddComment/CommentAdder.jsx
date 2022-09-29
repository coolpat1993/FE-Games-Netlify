import axios from "axios";
import { useState } from "react";

const CommentAdder = ({ setComments, review_id }) => {
    const [newComment, setNewComment] = useState('')
    const [posting, setPosting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setPosting(true)
        axios
            .post(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}/comments`, {
                body: newComment,
                author: "tickle122",
            }).then(({ data }) => {
                console.log(data.newComment)
                setComments((currComments) => {
                    return [data.newComment, ...currComments]
                })
                setPosting(false)
                setNewComment('')
            })
    }


    return (
        <form className="center" autocomplete="off" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="newComment"></label>
            <textarea
                className="commentAdder"
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="please leave a comment"
                required>
            </textarea>
            <br></br>
            <button>submit</button>
            {posting ? <p>your comment is being posted...</p> : null}
        </form>
    )
}

export default CommentAdder