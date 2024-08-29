import { useState, useEffect } from 'react';
import * as postService from '../../services/postService';
import { useParams } from 'react-router-dom';

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: 'Tips',
  });
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setFormData(postData);
    };
    if (postId) fetchPost();
  }, [postId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  if (postId) {
    props.handleUpdatePost(postId, formData);
  } else {
    props.handleAddPost(formData);
  }
};


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{postId ? 'Edit Post' : 'New Post'}</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Cheats">Cheats</option>
          <option value="Tips">Tips</option>
          <option value="Build Challenges">Build Challenges</option>
          <option value="GamePlay Challenges">GamePlay Challenges</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default PostForm;