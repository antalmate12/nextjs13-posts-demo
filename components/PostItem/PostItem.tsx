import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "../../models/post";

async function getUserOfPost(userId) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId,
    {
      next: { revalidate: 10 },
    }
  );
  return res.json();
}

const PostItem = async ({ post }: { post: Post }) => {
  const userData = await getUserOfPost(post.userId);

  return (
    <li>
      <pre>{JSON.stringify(userData.name, null, 2)}</pre>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link
        href={{
          pathname: "/post/" + post.id,
        }}
      >
        <button>GO</button>
      </Link>
    </li>
  );
};

export default PostItem;
