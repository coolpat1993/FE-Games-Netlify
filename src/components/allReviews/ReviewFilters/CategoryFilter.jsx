import axios from "axios"
import { useState, useEffect } from "react"
import CategoryCard from "./CategoryCard"


const CategoryFilter = ({ setFilterBy }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios
            .get('https://nc-games-site.herokuapp.com/api/categories')
            .then(({ data }) => {
                setCategories(data.categories)
            })
    }, [])

    return (<>
        <form><label htmlFor="filterBy">Category:</label>
            <select name="filter by" id="filter_by" onChange={(e) => setFilterBy(e.target.value)}>
                <option value="">none</option>
                {categories.map(
                    ({
                        slug,
                    }) => {
                        return (
                            <CategoryCard
                                key={slug}
                                slug={slug}
                            />
                        );
                    }
                )}
            </select>
        </form>
    </>)

}
export default CategoryFilter