import { Link } from 'react-router-dom'

export default function AllReviewsCard({ title, owner, designer, review_img_url, votes, category, comments, review_id }) {
	return (<article className="review-card column" >
		<h3>{title}</h3>
		<img src={review_img_url} alt={designer} />
		<p>by {owner}, votes:{votes}, comments:{comments}</p>
		<Link to={`/reviews/review/${review_id}`}>click Here</Link>
	</article>)
}
