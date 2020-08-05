import React, { useState, useEffect } from 'react';
import Post from './posts';

const App = ({initialCount}) => {

  let [state, setCount] = useState({
    count: initialCount,
    name: 'Francis',
  });

  let [posts, setPosts] = useState([
    {
      name: 'Super hooks',
      body: 'Everything is awesome...'
    },
    {
      name: 'Super hooks',
      body: 'Everything is awesome...'
    },
    {
      name: 'Super hooks',
      body: 'Everything is awesome...'
    }
  ])

  const addOne= () => {
    setCount( prevState => {
      return { ...prevState, count: state.count +1 }
    } );
  }

  const restOne = () => {
    setCount( prevState => {
      return { ...prevState, count: state.count -1 }
    } );
  }

  useEffect( () => {
    console.log('mounted');
  }, []);

  const addOnePost = () => {
    let newPost =     {
      name: 'Super hooks',
      body: 'Everything is awesome...'
    };


    setPosts([
      ...posts, newPost
    ]);
  }

  const removePosts = () => {
    setPosts([]);
  }

  return ( 
    <>
      <h3> Count: {state.count}</h3>
      <button onClick={ addOne }> ADD 1</button>
      <button onClick={ restOne }> REST 1</button>
      { posts.map( (posts, i) => (
        <Post item={posts} key={i}/>
      ))}
      <button onClick={addOnePost}> Add Post</button>
      <button onClick={removePosts}>Remove Posts</button>
    </>
   );
}
 
export default App;