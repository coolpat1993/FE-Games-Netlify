import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Comments from "./comments/comments";
import SingleReviewCard from "./singleReviewCard";

const SingleReview = () => {
    const params = useParams()
    const review_id = params.review_id
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}`)
            .then(({ data }) => {
                setReviews(data.review)
                setLoading(false)
            })
    }, [review_id])

    return (
        <div>
            {loading ? <div className="loader"></div> : null}
            <SingleReviewCard className="container"
                key={reviews.review_id}
                title={reviews.title}
                category={reviews.category}
                designer={reviews.designer}
                owner={reviews.owner}
                review_img_url={reviews.review_img_url}
                votes={reviews.votes}
                comments={reviews.comment_count}
                review_body={reviews.review_body}
            />
            <Comments review_id={params} />
        </div>
    )
};

export default SingleReview
