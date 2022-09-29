
const SortBy = ({ setSortBy, setName }) => {

    return (
        <>
            <form><label htmlFor="sortBy">Sort By:</label>
                <select name="sort by" id="sort_by" onChange={e => { setSortBy(e.target.value) }} >
                    <option value="&sort_by=created_at">Date</option>
                    <option value="&sort_by=review_id">Review id</option>
                    <option value="&sort_by=title">Title</option>
                    <option value="&sort_by=votes">Votes</option>
                    <option value="&sort_by=comment_count">Comment count</option>
                </select>
            </form>
        </>)
}
export default SortBy