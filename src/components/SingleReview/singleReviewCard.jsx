export default function SingleReviewCard({ title, owner, designer, review_img_url, votes, category, comments, review_id, review_body }) {
	return (<article className="singleReview singleColumn" >
		<h3>{title}</h3>
		<img src={review_img_url} alt={designer} />
		<p>{category}</p>
		<p>{review_body}</p>
		<p>by {owner}, votes:{votes}, comments:{comments}</p>
	</article>)
}
