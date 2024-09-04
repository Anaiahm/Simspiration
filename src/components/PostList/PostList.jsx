import { Link } from 'react-router-dom';
import styles from './PostList.module.css';
import Icon from '../Icon/Icon.jsx';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo.jsx';

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
            <div>
            <h2>{post.title}</h2>
            <Icon category={post.category}/>
            </div>
          </header>
          <AuthorInfo content={post} />
        </article>
      </Link>
    ))}
    </div>
    </main>
    );
  };
  
  export default PostList;