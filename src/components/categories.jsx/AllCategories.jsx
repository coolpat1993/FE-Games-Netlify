import axios from "axios"
import { useState, useEffect } from "react"
import CategoriesCard from "./CategoriesCard"

const AllCategories = () => {
    const [loading, setLoading] = useState(true)
    const [categories, setcategories] = useState([])
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://nc-games-site.herokuapp.com/api/categories')
            .then(({ data }) => {
                setcategories(data.categories)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h2>Categories</h2>
            {loading ? <div className="loader"></div> : null}
            <div className="container">
                {categories.map(
                    ({
                        slug,
                        description
                    }) => {
                        return (
                            <CategoriesCard
                                key={slug}
                                slug={slug}
                                description={description}
                            />
                        );
                    }
                )}
            </div>
        </>
    )
}

export default AllCategories
