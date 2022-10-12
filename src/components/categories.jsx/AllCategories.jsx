import axios from "axios"
import CategoriesCard from "./CategoriesCard"
import { useQuery } from "@tanstack/react-query"

const AllCategories = () => {
    const { data, isLoading } = useQuery(['categories'], () => {
        return axios
            .get('https://nc-games-site.herokuapp.com/api/categories')
    })
    return (
        <>
            <h2>Categories</h2>
            {isLoading ? <div className="loader"></div> : null}
            <div className="container">
                {data?.data.categories.map(
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
