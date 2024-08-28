import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as postService from '../../services/postService';

const PostDetails = (props) => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
          const postData = await postService.show(postId);
          console.log('postData', postData);
          setPost(postData);
        };
        fetchPost();
      }, [postId]);
      if (!post) return <main>Loading...</main>;
    return (
    <main>
        <header>
    <p>{post.category.toUpperCase()}</p>
    <h1>{post.title}</h1>
    <p>
      {post.author.username} posted on
      {new Date(post.createdAt).toLocaleDateString()}
    </p>
  </header>
  <p>{post.text}</p>
  <section>
    <h2>Comments</h2>

    {!post.comments.length && <p>There are no comments.</p>}

  {post.comments.map((comment) => (
    <article key={comment._id}>
      <header>
        <p>
          {comment.author.username} posted on
          {new Date(comment.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{comment.text}</p>
    </article>
  ))}
  </section>
  </main>
    );
  };
  export default PostDetails;