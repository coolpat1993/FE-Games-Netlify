import axios from "axios"
import { useState, useEffect } from "react"
import CommentsCard from "./CommentsCard"


const Comments = ({ review_id }) => {
    let id = review_id.review_id

    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [comment, setComments] = useState([])
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews/${id}/comments`)
            .then(({ data }) => {
                setLoading(false)

                setComments(data.comments)
            }).catch(err => {
                setIsError(true)
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <h2>comments</h2>
            {isError ? <h2>400: this category does not exist</h2> : null}
            {loading ? <div className="loader"></div> : null}
            <div className="container">
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
