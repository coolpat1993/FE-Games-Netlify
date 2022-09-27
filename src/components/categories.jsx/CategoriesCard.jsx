import { Link } from 'react-router-dom'

export default function CategoriesCard({ slug, description }) {
	return (<article className="category-card column" >
		<h3>{slug}</h3>
		<p>{description}</p>
		<Link to={`/reviews/${slug}`}>click Here</Link>
	</article>)
}
