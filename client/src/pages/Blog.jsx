import React from 'react';

const Blog = ({ park }) => {
  return (
    <div className="blog">
      <h1>{park.nazwa_parku}</h1>
      <p>{park.opis_parku}</p>
      <div className="images">
        {park.zdjecia_parku.map((src, index) => (
          <img key={index} src={src} alt={`Zdjęcie ${index + 1}`} />
        ))}
      </div>
      <div className="posts">
        {park.posty_forum.map((post, index) => (
          <div key={index} className="post">
            <h3>Post by {post.autor_posta}</h3>
            <p>{post.tresc_posta}</p>
            <p>Created: {new Date(post.data_utworzenia_posta).toLocaleString()}</p>
            {post.data_aktualizacji_posta && (
              <p>Updated: {new Date(post.data_aktualizacji_posta).toLocaleString()}</p>
            )}
            <div className="comments">
              {post.komentarze.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>Comment by {comment.autor_komentarza}</p>
                  <p>{comment.tresc_komentarza}</p>
                  <p>Created: {new Date(comment.data_utworzenia_komentarza).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
