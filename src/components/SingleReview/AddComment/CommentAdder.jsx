import axios from "axios";
import { useState } from "react";

const CommentAdder = ({ setComments, review_id }) => {
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}/comments`, {
                body: newComment,
                author: "tickle122",
            }).then(({ data }) => {
                console.log(data.newComment)
                setComments((currComments) => {
                    return [data.newComment, ...currComments]
                })
                setNewComment('')
            })
    }


    return (
        <form className="commentAdder" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="newComment">leave a comment</label>
            <textarea
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="please leave a comment">
            </textarea>
            <button>submit</button>
        </form>
    )
}

export default CommentAdder