import { Link } from "react-router-dom"

const SearchArticles = () => {

    return (
        <form id="articleCatForm">
          <fieldset>
            <legend>Article catergory</legend>
            <Link to={`/football`}><button type="submit">football</button></Link>
            <Link to={`/coding`}><button type="submit">coding</button></Link>
            <Link to={`/cooking`}><button type="submit">cooking</button></Link>
          </fieldset>
        </form>
    )
}

export default SearchArticles;