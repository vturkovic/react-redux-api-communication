import { useSelector } from 'react-redux';
import { RootState } from '../interfaces';

function DisplayComponent() {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayComponent;