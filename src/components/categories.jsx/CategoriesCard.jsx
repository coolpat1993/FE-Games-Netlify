import { Link } from 'react-router-dom'

export default function CategoriesCard({ slug, description }) {
	return (<article className="category-card column" >
		<Link to={`/reviews/${slug}`}>
		<h3>{slug}</h3>
		<p>{description}</p>
		</Link>
	</article>)
}
