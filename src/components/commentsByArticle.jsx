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
    })
  
  if(loading === true) return <p>Loading...</p>
  return (
    <>
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
    </>
  )
}

export default CommentsByArticle;