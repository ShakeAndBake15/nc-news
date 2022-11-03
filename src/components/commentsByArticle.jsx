import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentByArticle, getCommentsByArticle } from "./Api";

const CommentsByArticle = () => {

    const {article_id} = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [newComment, setNewComment] = useState('')
    const [posting, setPosting] = useState(false)

    useEffect(() => {
        getCommentsByArticle(article_id).then((response) => {
        setComments(response.comments)
        setLoading(false)
        })
    }, [article_id])

    const handleChange = (event) => {
      setNewComment({username: "grumpy19", body: event.target.value})
    }

    const handleClick = (event) => {
    setPosting(true)
    addCommentByArticle(article_id, newComment).then((response) => {
      setComments([response, ...comments])
      setPosting(false)
    })
    }

  if(loading === true) return <p>Loading...</p>
  return (
    <>
    {posting ? <p>Posting...</p> : <textarea id="commentBox" cols="30" rows="5" onChange={handleChange}></textarea>}
    <br />
    <button id="addComment" onClick={handleClick}>✍️ Join the conversation...</button>
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