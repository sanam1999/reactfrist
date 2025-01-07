import React, { useState, useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db, authantication } from "../../config/firebase";
import './State.css';
import { useAuthState } from "react-firebase-hooks/auth";

function State() {
  const [value, setValue] = useState(false); // Toggling show/hide
  const [postlist, setPostList] = useState([]); // Post data
  const [likes, setLikes] = useState({}); // Likes for each post
  const [user] = useAuthState(authantication);

  const postCollection = collection(db, "post");
  const likesCollection = collection(db, "likes");

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      const postsSnapshot = await getDocs(postCollection);
      const posts = postsSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(posts);
    };
    fetchPosts();
  }, []);

  // Fetch likes
  useEffect(() => {
    const fetchLikes = async () => {
      const likesSnapshot = await getDocs(likesCollection);
      const likesData = {};
      likesSnapshot.docs.forEach((doc) => {
        const { postId, userId } = doc.data();
        if (!likesData[postId]) likesData[postId] = 0;
        likesData[postId] += 1;
      });
      setLikes(likesData);
    };
    fetchLikes();
  }, []);

  // Handle like button click
  const handleLike = async (postId) => {
    if (!user) {
      alert("You must be logged in to like a post.");
      return;
    }

    try {
      // Add like to Firestore
      await addDoc(likesCollection, { postId, userId: user.uid });
      setLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1,
      }));
    } catch (error) {
      console.error("Error adding like:", error);
    }
  };

  return (
    <>
      <button onClick={() => setValue(!value)}>
        {value ? "Hide" : "Show"}
      </button>
      {value && <h1>Show me</h1>}

      <ul>
        {postlist.map((post) => (
          <div className="card" key={post.id}>
            <h4 className="name">{post.username}</h4>
            <h6 className="title">{post.title}</h6>
            <p className="description">{post.description}</p>
            <span
              className="likebtn"
              onClick={() => handleLike(post.id)}
            >
              &#128077;
            </span>
            <p>Likes: {likes[post.id] || 0}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default State;
