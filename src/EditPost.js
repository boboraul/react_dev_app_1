import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 
import { useStoreState, useStoreActions } from 'easy-peasy';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
  const returnHome = useNavigate();
  const { id } = useParams();

  const posts = useStoreState((state) => state.posts);
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  
  const handleEdit = (id) => {
    const datetime = format(new Date(), 'MMMM, dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    editPost(updatedPost);
    returnHome(`/post/${id}`);
  }

  useEffect(() =>{
    if (post) {
        setEditTitle(post.title);
        setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (  
    <main className="EditPost">
      {editTitle &&
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              required 
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Body:</label>
            <textarea 
              id="postBody"
              required 
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)} 
            >
            </textarea>
            <button type="button" onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      } 
    </main>
  )
}

export default EditPost