import axios from "axios"
import { useState, useEffect } from "react"
import AllReviewsCard from "../allReviews/AllReviewsCard"
import { useParams } from "react-router-dom"

const ReviewCategory = () => {
    const params = useParams()
    const category = params.category
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews?category=${category}`)
            .then(({ data }) => {
                setLoading(false)

                setReviews(data.reviews)
            }).catch(err => {
                setIsError(true)
                setLoading(false)
                console.log(err.response.data.msg, 'the data')
            })
    }, [category])

    return (
        <>
            <h2>{category}</h2>
            {isError ? <h2>400: this category does not exist</h2> : null}
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
                                review_id={review_id}
                            />
                        );

                    }
                )}
            </div>
        </>
    )
}

export default ReviewCategory
