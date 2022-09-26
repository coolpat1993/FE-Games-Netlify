export default function AllReviewsCard({ title, owner, designer, review_img_url, votes, category, comments, review_id }) {
	return (<article className="review-card column" >
		<h3>{title}</h3>
		<img src={review_img_url} alt={designer} />
		{/* <Link to={`/reviews/${item_id}`}>Click Here</Link> */}
		<p>{category}</p>
		<p>by {owner}, votes:{votes}, comments:{comments}</p>
	</article>)
}