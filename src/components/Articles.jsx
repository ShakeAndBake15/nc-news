import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getArticles, getArticlesByQuery, } from "./Api";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
        getArticles().then((response) => {
          setArticles(response.articles);
        })
    }, [])

  const handleClick = (event) => {
    setValue(event.target.value)
    event.preventDefault()
    getArticlesByQuery(value).then((response) => {
      setArticles(response.articles)
    })
    
  }
    
  return (
    <>
    <h2>Latest Articles</h2>
    <form action="">
      <fieldset>
        <legend>Sort by:</legend>
        <button type="submit" onClick={handleClick} value="created_at" >Date posted</button>
        <button type="submit" onClick={handleClick} value="comment_count">Comments</button>
        <button type="submit" onClick={handleClick} value="votes">Votes</button>
      </fieldset>
    </form>
        {articles.map((article) => {
            return (
                <section id="articles" key={article.article_id}>
                <br />
                  <Link to={`/articles/${article.article_id}`}><h4 id="articleTitle"><strong>{article.title}</strong></h4></Link>
                  <dl>
                    <dt id="authorTitle"><strong>Author:</strong></dt>
                    <dd>{article.author}</dd>
                    <dt id="catergoryTitle"><strong>Category:</strong></dt>
                    <dd>{article.topic}</dd>
                    <dt id="createdAtTitle"><strong>Posted date:</strong></dt>
                    <dd>{article.created_at.slice(0, 10)}</dd>
                    <dt><strong>Votes ❤️:</strong></dt>
                    <dd> {article.votes}</dd>
                    <dt><strong>Comments 💬:</strong></dt>
                    <dd>{article.comment_count}</dd>
                  </dl>
                <br />
              </section>
            )
        })}
    </>
  )
}

export default Articles