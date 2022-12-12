import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import postService from './setup/services/post.service';
import PostList from './app/pages/PostList';
import DetailPost from './app/pages/DetailPost';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

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

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path='/:id' element={<DetailPost />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
