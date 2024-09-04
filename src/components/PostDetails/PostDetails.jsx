import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import * as postService from '../../services/postService';
import CommentForm from '../CommentForm/CommentForm';
import { AuthedUserContext } from '../../App';
import { Link } from 'react-router-dom';
import styles from './PostDetails.module.css';

const PostDetails = (props) => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const user = useContext(AuthedUserContext);
    useEffect(() => {
        const fetchPost = async () => {
          const postData = await postService.show(postId);
          console.log('postData', postData);
          setPost(postData);
        };
        fetchPost();
      }, [postId]);
    const handleAddComment = async (commentFormData) => {
        const newComment = await postService.createComment(postId, commentFormData);
        setPost({ ...post, comments: [...post.comments, newComment] });
      };
      if (!post) return <main>Loading...</main>;
    return (
    <main className={styles.container}>
        <header>
    <p>{post.category.toUpperCase()}</p>
    <h1>{post.title}</h1>
    <div>
    {post.author._id === user._id && (
    <>
      <Link to={`/posts/${postId}/edit`}>Edit</Link>
      <button onClick={() => props.handleDeletePost(postId)}>Delete</button>
    </>
  )}
  </div>
  </header>
  <p>{post.text}</p>
    <p>
      {post.author.username} posted on
      {new Date(post.createdAt).toLocaleDateString()}
    </p>
  <section>
    <h2>Comments</h2>
    <CommentForm handleAddComment={handleAddComment} />

    {!post.comments.length && <p>There are no comments.</p>}

  {post.comments.map((comment) => (
    <article key={comment._id}>
      <header>
        <div>
        <p>
          {comment.author.username} posted on
          {new Date(comment.createdAt).toLocaleDateString()}
        </p>
        {comment.author._id === user._id && (
            <>
             <Link to={`/posts/${postId}/comments/${comment._id}/edit`}>Edit</Link>
          <button onClick={() => handleDeleteComment(comment._id)}>
            Delete
          </button>
            </>
        )}
        </div>
      </header>
      <p>{comment.text}</p>
    </article>
  ))}
  </section>
  </main>
    );
  };
  export default PostDetails;