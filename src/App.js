import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './CustomHooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('https://backend-xm8e.onrender.com/posts');
console.log('test');
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
        <Header title="REACT JS Blog" />  
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError}/>} />    
          <Route exact path="/post" element={<NewPost />} />
          <Route exact path="/edit/:id" element={<EditPost />} />

          <Route path="/post/:id" element={<PostPage />} />         
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Missing/>} />
        </Routes>
        
        <Footer />
      
    </div>
  );
}

export default App;
