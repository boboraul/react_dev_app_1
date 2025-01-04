import React from 'react'
import { useStoreState } from 'easy-peasy';

const Footer = () => {
  const today = new Date();
  const postsCount = useStoreState((state) => state.postCount)

  return (
    <footer className="Footer">
      <div className="container" style={{ textAlign: "center" }}>
        <p>Copyright &copy; {today.getFullYear()}</p>
        <p>{postsCount} Posts</p>
      </div>
    </footer>
  )
}

export default Footer