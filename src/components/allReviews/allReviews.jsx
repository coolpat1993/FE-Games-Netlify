import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import AllReviewsCard from "./allReviewsCard"


const AllReviews = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://nc-games-site.herokuapp.com/api/reviews')
            .then(({ data }) => {
                setItem(data.reviews)
                setLoading(false)
            })
    }, [])

    if (loading) return <div class="loader"></div>
    return (
        <div>
            <h3>all reviews</h3>
            <div class="container">
                {item.map(
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