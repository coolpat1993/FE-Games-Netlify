import Votes from "./Voting/Votes"
import { useState } from "react"

export default function SingleReviewCard({ title, owner, designer, review_img_url, votes, category, comments, review_id, review_body }) {
	const [trueVotes, setTrueVotes] = useState(votes)

	return (<article className="singleReview singleColumn" >
		<h3>{title}</h3>
		<img src={review_img_url} alt={designer} />
		<p>{category}</p>
		<p>{review_body}</p>
		<Votes review_id={review_id}
			setTrueVotes={setTrueVotes}
			votes={trueVotes} />
		<p>by {owner}, votes:{trueVotes}, comments:{comments}</p>
	</article>)
}
