import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

const PostList = (props) => {
    return (
    <main >
<div>
<img className="postpic" src="https://imgur.com/WXWcfEx.png" />
</div>
<div className={styles.container}>
      {props.posts.map((post) => (
      <Link key={post._id} to={`/posts/${post._id}`}>
        <article>
          <header>
            <h2>{post.title}</h2>
          </header>
            <p>
              {post.author.username} posted on 
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          {/* <p>{post.text}</p> */}
        </article>
      </Link>
    ))}
    </div>
    </main>
    );
  };
  
  export default PostList;