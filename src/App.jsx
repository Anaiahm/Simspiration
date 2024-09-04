import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
import PostForm from './components/PostForm/PostForm';
import * as authService from '../src/services/authService';
import * as postService from './services/postService';
import { Helmet } from 'react-helmet';
export const AuthedUserContext = createContext(null);


const App = () => {
  const [user, setUser] = useState(authService.getUser()); 
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postsData = await postService.index();
      setPosts(postsData)
    };
    if (user) fetchAllPosts();
  }, [user]);
  

const handleAddPost = async (postFormData) => {
  const newPost = await postService.create(postFormData);
  setPosts([newPost, ...posts]);
  navigate('/posts');
};

const handleDeletePost = async (postId) => {
  const deletedPost = await postService.deletePost(postId);
  setPosts(posts.filter((post) => post._id !== deletedPost._id));
  navigate('/posts');
};

const handleUpdatePost = async (postId, postFormData) => {
  const updatedPost = await postService.update(postId, postFormData);
  setPosts(posts.map((post) => (postId === post._id ? updatedPost : post)));
  navigate(`/posts/${postId}`);
};

  return (
    <>
      <AuthedUserContext.Provider value={user}>
      <Header user={user} handleSignout={handleSignout} />
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
        {user ? (
    // Protected Routes:
    <>
      <Route path="/" element={<Dashboard user={user} />} />
      <Route path="/posts" element={<PostList posts={posts} />} />
      <Route path="/posts/:postId" element={<PostDetails handleDeletePost={handleDeletePost} />} />
      <Route path="/posts/new" element={<PostForm handleAddPost={handleAddPost} />} />
      <Route path="/posts/:postId/edit" element={<PostForm handleUpdatePost={handleUpdatePost} />} />
    </>
  ) : (
    // Public Route:
    <Route path="/" element={<Landing />} />
  )}
  <Route path="/signup" element={<SignupForm setUser={setUser} />} />
  <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;

// TESTING

{/* <Route path="/posts/cheats" element={<CheatList posts={posts}/>} />
<Route path="/posts/tips" element={<TipsList posts={posts}/>} />
<Route path="/posts/build" element={<BuildList posts={posts}/>} />
<Route path="/posts/game" element={<GameList posts={posts}/>} /> */}