import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Comments from "./ViewComments/Comments";
import SingleReviewCard from "./SingleReviewCard";

const SingleReview = () => {
    const params = useParams()
    const review_id = params.review_id
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [trueComments, setTrueComments] = useState('')
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}`)
            .then(({ data }) => {
                setReviews(data.review)
                setLoading(false)
                setTrueComments(data.review.comment_count)
            }).catch(err => {
                setIsError(true)
                setLoading(false)
            })
    }, [review_id])

    return (
        <>
            {isError ? <h2>this review does not exist</h2> : null}
            {loading ? <div className="loader"></div> : null}
            {!loading && !isError ? <><SingleReviewCard className="container"
                key={reviews.review_id}
                title={reviews.title}
                category={reviews.category}
                designer={reviews.designer}
                owner={reviews.owner}
                review_img_url={reviews.review_img_url}
                votes={reviews.votes}
                review_body={reviews.review_body}
                review_id={reviews.review_id}
                comments={trueComments}
                setTrueComments={setTrueComments}
            />
                <Comments review_id={review_id}
                    setTrueComments={setTrueComments}
                    comments={trueComments} /> </>

                : null}
        </>
    )
};

export default SingleReview
