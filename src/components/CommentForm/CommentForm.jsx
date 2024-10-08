import { useState, useEffect } from 'react';
import Icon from "../Icon/Icon"
import styles from './CommentForm.module.css';



const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData);
    setFormData({ text: '' });
  };



  return (
    <main className={styles.container}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Your comment:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit"><Icon category="Create" /></button>
    </form>
    </main>
  );
};

export default CommentForm;