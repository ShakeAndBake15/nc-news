import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, getCommentsByArticle } from "./Api";

const CommentsByArticle = () => {

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState([])

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.article)
        })
        getCommentsByArticle(article_id).then((response) => {
        setComments(response.comments)
        setLoading(false)
        })
    })
  
  if(loading === true) return <p>Loading...</p>
  return (
    <>
    <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
    {comments.map((comment) => {
      return (
      <section id="comments">
        <br />
      <ul>
        <li>{comment.body}</li>
        <li>{comment.author}</li>
      </ul>
      <dl>
        <dt><strong>Votes:</strong></dt>
        <dd>{comment.votes}</dd>
        <dt><strong>Posted:</strong></dt>
        <dd>{comments.created_at}</dd>
      </dl>
        <br />
      </section>
      )})}
    </>
  )
}

export default CommentsByArticle;