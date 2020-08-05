import React, { useEffect } from 'react';

const Post = ({item}) => {

    useEffect( () => {
        console.log('post created');
    }, []);

    return ( 
        <div key={item.i}>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
        </div>
     );
}
 
export default Post;