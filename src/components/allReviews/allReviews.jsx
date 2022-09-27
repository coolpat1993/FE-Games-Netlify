import axios from "axios"
import { useState, useEffect } from "react"
import AllReviewsCard from "./allReviewsCard"

const AllReviews = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://nc-games-site.herokuapp.com/api/reviews')
            .then(({ data }) => {
                setReviews(data.reviews)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h2>all reviews</h2>
            {loading ? <div className="loader"></div> : null}
            <div className="container">

                {reviews.map(
                    ({
                        review_id,
                        title,
                        category,
                        designer,
                        owner,
                        review_img_url,
                        votes,
                        comment_count
                    }) => {
                        return (
                            <AllReviewsCard
                                key={review_id}
                                title={title}
                                category={category}
                                designer={designer}
                                owner={owner}
                                review_img_url={review_img_url}
                                votes={votes}
                                comments={comment_count}
                                review_id={review_id}
                            />
                        );
                    }
                )}
            </div>
        </div>
    )
}

export default AllReviews
