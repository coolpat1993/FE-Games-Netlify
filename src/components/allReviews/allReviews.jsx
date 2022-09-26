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

    if (loading) return <div class="loader"></div>
    return (
        <div>
            <h2>all reviews</h2>
            <div class="container">
                {reviews.map(
                    ({
                        review_id,
                        title,
                        category,
                        designer,
                        owner,
                        review_img_url,
                        votes,
                        comment_count,
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
                            />
                        );

                    }
                )}
            </div>
        </div>
    )
}

export default AllReviews
