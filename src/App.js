import React, { useState } from 'react';


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

  const addOnePost = () => {
    let newPost =     {
      name: 'Super hooks',
      body: 'Everything is awesome...'
    };


    setPosts([
      ...posts, newPost
    ]);
  }

  return ( 
    <>
      <h3> Count: {state.count}</h3>
      <button onClick={ addOne }> ADD 1</button>
      <button onClick={ restOne }> REST 1</button>
      { posts.map( (posts, i) => (
        <div key={i}>
          <div>Name: {posts.name}</div>
          <div>Body: {posts.body}</div>
        </div>
      ))}
      <button onClick={addOnePost}> Add Post</button>
    </>
   );
}
 
export default App;