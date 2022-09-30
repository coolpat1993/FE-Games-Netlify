import { Link } from 'react-router-dom'

export default function AllReviewsCard({ title, owner, designer, review_img_url, votes, category, comments, review_id }) {
	return (<article className="review-card" >
		<div className="img__wrap">
			<Link to={`/reviews/review/${review_id}`} >
				<img src={review_img_url} alt={designer} className="img__img" />
			<div className="img__description">Read more</div>
			</Link>
		</div>
		<p>{title}</p>
		<p>by {owner}, votes:{votes}, comments:{comments}</p>
	</article>)
}
