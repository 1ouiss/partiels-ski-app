import './App.css';
import postService from './setup/services/post.service';

import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import MainRouter from './app/routers/MainRouter';

function App() {

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})

  const fetchPosts = async () => {
    try {
      const response = await postService.getPosts();
      console.log(response);
      setPosts(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const getPost = async (id) => {
    try {
      const response = await postService.getOnePostById(id);
      console.log(response);
      setPost(response)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter/>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
