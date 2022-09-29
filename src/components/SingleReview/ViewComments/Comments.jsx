import axios from "axios"
import { useState, useEffect } from "react"
import CommentAdder from "../AddComment/CommentAdder"
import CommentsCard from "./CommentsCard"


const Comments = ({ review_id }) => {

    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [noComments, setNoComments] = useState(false)
    const [comment, setComments] = useState([])
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}/comments`)
            .then(({ data }) => {
                console.log(data)
                if (data.comments) { setComments(data.comments) }
                if (data.msg === "This comment was not found") { setNoComments(true) }
                setLoading(false)
            }).catch(err => {
                setIsError(true)
                setLoading(false)
            })
    }, [review_id])

    return (
        <>
            <h2>comments</h2>
            {isError ? <h2>internal server error</h2> : null}
            {noComments ? <h2>be the first to leave a comment</h2> : null}
            {loading ? <div className="loader"></div> : null}
            <CommentAdder setComments={setComments}
                review_id={review_id} className="" />
            <div className="">
                {comment.map(
                    ({
                        comment_id,
                        author,
                        body,
                        votes,
                        created_at,
                    }) => {
                        return (
                            <CommentsCard
                                key={comment_id}
                                body={body}
                                author={author}
                                votes={votes}
                                created_at={created_at}
                            />
                        );
                    }
                )}
            </div>
        </>
    )
}

export default Comments
