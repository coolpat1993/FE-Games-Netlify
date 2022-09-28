const SearchBox = ({ setSearch, Search }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let queryString = `${e.target[0].value}${e.target[1].value}`
        setSearch(queryString)
    }

    return (<form autocomplete="off" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="newSearch"></label>
        <select name="sort by" id="sort_by" >
            <option value="&title=">Title</option>
            <option value="&owner=">Owner</option>
            <option value="&votes=">Votes</option>
            <option value="&designer=">designer</option>
        </select>
        <input
            className="Searcher"
            id="Searcher"
            value={Search}
            placeholder="search"
            required>
        </input>
        <br></br>
        <button>submit</button>

    </form>)
}
export default SearchBox