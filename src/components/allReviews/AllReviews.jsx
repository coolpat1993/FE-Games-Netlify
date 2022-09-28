import axios from "axios"
import { useState, useEffect } from "react"
import AllReviewsCard from "./AllReviewsCard"
import OrderBy from "./ReviewFilters/OrderBy"
import CategoryFilter from "./ReviewFilters/CategoryFilter"
import SortBy from "./ReviewFilters/SortBy"
import SearchBox from "./ReviewFilters/SearchBox"

const AllReviews = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [search, setSearch] = useState([])
    const [orderBy, setOrderBy] = useState('order_by=DESC')
    const [sortBy, setSortBy] = useState('&sort_by=created_at')
    const [filterBy, setFilterBy] = useState('')
    const [isError, setIsError] = useState('')
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        axios
            .get(`https://nc-games-site.herokuapp.com/api/reviews?${orderBy}${sortBy}${filterBy}${search}`)
            .then(({ data }) => {
                setLoading(false)
                setReviews(data.reviews)
            }).catch((err) => {
                setLoading(false)
                setIsError(true)
                console.log(err)
            })

    }, [orderBy, sortBy, filterBy, search])
    return (
        <>
            <div className="center">
                <SortBy setSortBy={setSortBy} />
                <CategoryFilter setFilterBy={setFilterBy} />
                <OrderBy setOrderBy={setOrderBy}
                    orderBy={orderBy} />
                <SearchBox setSearch={setSearch} />
            </div>
            {isError ? <h2 className="center">there are no reviews by those parameters</h2> :
                <>
                    <h2>Viewing all {filterBy.slice(10)} reviews, sorted by {sortBy.slice(9)}, in order {orderBy.slice(9)}</h2>
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
                </>
            }
        </>
    )
}

export default AllReviews
