import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticle } from "./Api";

const CommentsByArticle = () => {

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCommentsByArticle(article_id).then((response) => {
        setComments(response.comments)
        setLoading(false)
        })
    }, [article_id])

  if(loading === true) return <p>Loading...</p>
  return (
    <>
    {comments.map((comment) => {
      return (
      <section id="comments" key={comment.comment_id}>
        <br />
        <p><strong id="commentAuthor">{comment.author}</strong> says:</p>
        <p id="commentBody">{comment.body}</p>
      <dl>
        <dt><strong>Agreed 👍🏻:</strong></dt>
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