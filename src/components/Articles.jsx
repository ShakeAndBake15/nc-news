import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getArticles, getArticlesByTopic } from "./Api";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
      if(value !== ''){
        getArticlesByTopic().then((response) => {
          setArticles(response.articles);
        })
      } else {
        getArticles().then((response) => {
            setArticles(response.articles);
        })
      }
    }, [value])

    const handleChange = (event) => {
      setValue(event.target.value)
    }

  return (
    <>
    <h2>Latest Articles</h2>
    <>
    <select id="articleSearch" onChange={handleChange}>
      <option value=''>please select</option>
      <option value="football">football</option>
      <option value="coding">coding</option>
      <option value="cooking">cooking</option>
    </select>
    <Link to={`/${value}`}><button>search</button></Link>
    </>
        {articles.map((article) => {
            return (
                <section id="articles" key={article.article_id}>
                <br />
                  <h4 id="articleTitle"><strong>{article.title}</strong></h4>
                  <dl>
                    <dt id="authorTitle"><strong>Author:</strong></dt>
                    <dd>{article.author}</dd>
                    <dt id="catergoryTitle"><strong>Category:</strong></dt>
                    <dd>{article.topic}</dd>
                    <dt id="createdAtTitle"><strong>Posted date:</strong></dt>
                    <dd>{article.created_at.slice(0, 10)}</dd>
                    <dt><strong>Votes ⬆️ ⬇️:</strong></dt>
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