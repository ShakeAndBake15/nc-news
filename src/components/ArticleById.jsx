import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, patchArticleById } from "./Api";

const ArticleById = () => {

  const {article_id} = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [votesIncrement, setVotesIncrement] = useState(0)

  useEffect(() => {
    getArticleById(article_id).then((response) => {
        setArticle(response.article)
        setLoading(false)
    })
  }, [article_id])

  const handleUpClick = (event) => {
    setVotesIncrement((votesIncrement) => votesIncrement + 1)
    patchArticleById(article_id).then((response) => {
    }).catch((err) => {
      setVotesIncrement((votesIncrement) => votesIncrement - 1)
    })
  }

  if(loading === true){
    return <p>Loading...</p>
  }
  return (
    <section id="articleById" key={article.article_id}>
    <br />
      <h2 id="articleTitle"><strong>{article.title}</strong></h2>
      <ul>
        <li><strong>Author:</strong> {article.author}</li>
        <li><strong>Category:</strong> {article.topic}</li>
        <li><strong>Posted date:</strong> {article.created_at.slice(0, 10)}</li>
      </ul>
      <dl>
        <br />
        <dt id="bodyTitle"><strong>Article:</strong></dt>
        <dd>{article.body}</dd>
      </dl>
        <br />
        <p><strong>Votes: {article.votes+votesIncrement}</strong></p>
        <button id="likeButton" onClick={handleUpClick} disabled={votesIncrement !== 0}>❤️</button>
        <br />
        <p><strong>Comments:{article.comment_count}</strong></p>
        <Link to={`/articles/${article.article_id}/comments`}><button>view comments 💬</button></Link>
    <br />
  </section>
  )
}

export default ArticleById;