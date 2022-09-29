
export default function CategoryCard({ slug }) {
	return (<option value={`&category=${slug}`}>{slug}</option>)
}
