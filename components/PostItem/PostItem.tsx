import Link from "next/link";
import { ReactElement } from "react";

async function getUserData(post) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + post.userId,
    { next: { revalidate: 10 } }
  );
  return res.json();
}

const PostItem = async ({ post }): Promise<ReactElement<any, any>> => {
  // useMemo
  const userData = await getUserData(post);

  return (
    <li key={post.id}>
      <small>{userData.name}</small>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link href={`post/${post.id}`}>
        <button>GO</button>
      </Link>
    </li>
  );
};

export default PostItem;
