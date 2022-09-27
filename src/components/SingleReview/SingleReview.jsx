import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Comments from "./comments/Comments";
import SingleReviewCard from "./SingleReviewCard";

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
        <>
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
                review_id={reviews.review_id}
            />
            <Comments review_id={params} />
        </>
    )
};

export default SingleReview
