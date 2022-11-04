import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticleById } from "./Api";
import CommentsByArticle from "./CommentsByArticle";

const ArticleById = () => {

  const {article_id} = useParams()
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [votesIncrement, setVotesIncrement] = useState(0)

  useEffect(() => {
    getArticleById(article_id).then((response) => {
        setArticle(response.article)
        setLoading(false)
    }).catch((err) => {
      setLoading(false)
      setIsError(true)
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
  if(isError === true){
    return <h1 id="articleError">Article not found 🤷‍♂️<br />Please return to the home page</h1>
  }
  return (
    <>
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
        <h3><strong>Votes: {article.votes+votesIncrement}</strong></h3>
        <button id="likeButton" onClick={handleUpClick} disabled={votesIncrement !== 0}>❤️</button>
        <br />
        <h3><strong>Comments 💬: {article.comment_count}</strong></h3>
    <CommentsByArticle />
    <br />
  </section>
  </>
  )
}

export default ArticleById;