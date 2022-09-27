
export default function CommentsCard({ body, author, votes, created_at }) {
	return (<article className="comment-card" >
		<h3>{author}</h3>
		<p>{body}</p>
		<p>{votes}</p>
		<p>{created_at}</p>
	</article>)
}
