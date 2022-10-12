import axios from "axios";
import { useContext, useState } from "react"
import { UserContext } from "../../Users/User";

export default function CommentsCard({ body, author, votes, created_at, comment_id, setTrueComments, comments }) {
	const [hidden, setHidden] = useState(false)
	const user = useContext(UserContext);
	let userName = user.loggedInUser.username

	const handleSubmit = (e) => {
		e.preventDefault();
		setHidden(true)
		setTrueComments(+comments - 1)
		axios
			.delete(`https://nc-games-site.herokuapp.com/api/comments/${comment_id}`)
			.catch((err) => {
				setHidden(false)
			})
	}

	if (hidden) {
		return <h2>comment was deleted</h2>
	}

	return (
		<article className="singleComment" >
			<h3>{author}</h3>
			<p>{body}</p>
			<p>votes:{votes}</p>
			<p>{created_at}</p>
			{userName === author ? <button aria-label="Delete Comment" onClick={(e) => handleSubmit(e)}>Delete Comment</button> : null}
		</article>)
}
