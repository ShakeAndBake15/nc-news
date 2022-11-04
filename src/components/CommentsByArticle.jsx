import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentByArticle, deleteCommentByArticle, getCommentsByArticle } from "./Api";
import { UserContext } from "../context/UserContext";

const CommentsByArticle = () => {
    
  const {user} = useContext(UserContext)
  const {article_id} = useParams()
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [newComment, setNewComment] = useState('')
  const [posting, setPosting] = useState(false)
  const [deleting, setDeleting] = useState(false)

    useEffect(() => {
      commentFetch()
    })

    const commentFetch = () => {
      getCommentsByArticle(article_id).then((response) => {
      setComments(response.comments)
      setLoading(false)
      })
    }

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

  const handleDelete = (event) => {
    setDeleting(true)
    deleteCommentByArticle(event.target.value).then((response) => {
      commentFetch()
      setDeleting(false)
    })

  }

  if(loading === true) return <p>Loading...</p>
  return (
    <>
    {posting ? <p>Posting...</p> : <textarea id="commentBox" cols="30" rows="5" onChange={handleChange}></textarea>}
    <br />
    <button id="addComment" onClick={handleClick}>✍️ Join the conversation...</button>
    {deleting && <p>Deleting comment...</p>}
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
      {user.username !== comment.author ? <></> : <button id="deleteButton" value={comment.comment_id} onClick={handleDelete} disabled={user.username !== comment.author}>Delete 🗑️</button>}
        <br />
      </section>
      )})}
    </>
  )
}

export default CommentsByArticle;
