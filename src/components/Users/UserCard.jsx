import { useContext } from "react";
import { UserContext } from "./User";

export default function UserCard({ username, name, avatar_url }) {

const { setLoggedInUser } = useContext(UserContext);

return (<article className="category-card column" >
		<h3>username: {username}</h3>
		<p>name: {name}</p>
		<img src={avatar_url} alt={name} />
		<button aria-label="Select User" onClick={() => {
			setLoggedInUser({
				username: username,
				name: name,
				avatar_url: avatar_url
			})
		}}
		>Select User</button>
	</article>)
}
