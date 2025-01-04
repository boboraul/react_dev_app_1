import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const returnHome = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);

  const post = getPostById(id);

  const handleDelete = (id) => {
    deletePost(id);
    returnHome('/');
  }
 
  return (
    
    <main className="PostPage">
       <article className="post"> 
            {post &&
              <>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
                <p className="postBody">{post.body}</p>
                <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
                
                <Link to={`/edit/${post.id}`}>
                  <button className="editButton" type="button">Edit</button>
                </Link>
              </>
            }
            {!post && 
              <>
                <h2>Post not found</h2>
                <p><Link to='/'>Visit our Homepage</Link></p>
              </>
            }
         
       </article>
    </main>
  )
}

export default PostPage