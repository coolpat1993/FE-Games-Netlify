import { Link } from 'react-router-dom'

export default function AllReviewsCard({ title, owner, designer, review_img_url, votes, category, comments, review_id }) {
	return (<article className="review-card column" >
		<Link to={`/reviews/review/${review_id}`}>
		<h3>{title}</h3>
		<img src={review_img_url} alt={designer} />
		<p>by {owner}, votes:{votes}, comments:{comments}</p>
		</Link>
	</article>)
}
