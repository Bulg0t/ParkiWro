import React, { Fragment, useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';

function Blog() {
  const searchParams = new URLSearchParams(location.search);
  const parkId = searchParams.get('id');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [park, setPark] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseBlogs = await axios.get(`http://localhost:3001/blog?id=${parkId}`);
        const responsePark = await axios.get(`http://localhost:3001/api/park?id=${parkId}`);
        console.log('Fetched blogs:', responseBlogs.data.posts);
        console.log('Fetched users:', responseBlogs.data.users);
        console.log('Fetched park:', responsePark.data[0]);
        setPosts(responseBlogs.data.posts || []);
        setUsers(responseBlogs.data.users || []);
        setPark(responsePark.data[0] || {});
      } catch (error) {
        console.error('Błąd podczas pobierania danych', error);
      }
    };
    fetchData();
  }, [parkId]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:3001/posts', { title, content, parkId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Post created successfully!');
      setPosts([posts, response.data]); 
      setTitle('');
      setContent('');
    } catch (error) {
      setError('Failed to create post');
      console.error('Error creating post:', error);
    }
  };

  const handleCommentSubmit = async (postId, e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const text = commentText[postId];

    try {
      const response = await axios.post(`http://localhost:3001/posts/${postId}/comments`, { text }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Comment added successfully!');
      setPosts(posts.map(post => post._id === postId ? response.data : post));
      setCommentText({ commentText, [postId]: '' }); 
    } catch (error) {
      setError('Failed to add comment');
      console.error('Error adding comment:', error);
    }
  };

  const getUserById = (userId) => {
    const user = users.find(user => user._id === userId);
    return user ? user.email : 'Unknown';
  };

  return (
    <Fragment>
      <Menu />
      <div className="body-blog">
        <div className="banner-blog">
          <p className="banner-title">{park.name}</p>
        </div>
        {posts.map((post) => {
          const { title, content, userId, comments } = post;

          return (
            <div className="container-blog" key={post._id}>
              <div className="post">
                <h2>{title}</h2>
                <p>{content}</p>
                <p><strong>Autor:</strong> {getUserById(userId)}</p> 
                <div className="comments">
                  <h3>Komentarze:</h3>
                  {comments.map((comment, index) => {
                    const { text, userId } = comment;
                    return (
                      <div className="comment" key={index}>
                        <p><strong>{getUserById(userId)}:</strong> {text}</p>
                      </div>
                    );
                  })}
                  <form onSubmit={(e) => handleCommentSubmit(post._id, e)}>
                    <textarea
                      placeholder="Dodaj komentarz..."
                      value={commentText[post._id] || ''}
                      onChange={(e) => setCommentText({ ...commentText, [post._id]: e.target.value })}
                    />
                    <button type="submit">Dodaj Komentarz</button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}

        <div className="container-blog">
          <h2>Dodaj nowy post</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          <form onSubmit={handlePostSubmit}>
            <div className="form-group">
              <label htmlFor="title">Tytuł</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Treść</label>
              <textarea
                id="content"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Dodaj Post</button>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Blog;
