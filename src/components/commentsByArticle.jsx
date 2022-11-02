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
            console.log(response.comments)
        setComments(response.comments)
        setLoading(false)
        })
    }, [article_id])
  
  if(loading === true) return <p>Loading...</p>
  return (
    <>
    <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
    {comments.map((comment) => {
      return (
      <section id="comments" key={comment.comment_id}>
        <br />
        <p><strong>{comment.author}</strong> says:</p>
        <p>{comment.body}</p>
      <dl>
        <dt><strong>Votes:</strong></dt>
        <dd>{comment.votes}</dd>
        <dt><strong>Posted:</strong></dt>
        <dd>{comment.created_at.slice(0, 10)}</dd>
      </dl>
        <br />
      </section>
      )})}
    </>
  )
}

export default CommentsByArticle;